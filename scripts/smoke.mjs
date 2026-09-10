import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const base = new URL(process.argv[2] ?? "http://127.0.0.1:4192");
if (
  !["http:", "https:"].includes(base.protocol) ||
  base.username ||
  base.password
) {
  throw new Error("Use an HTTP(S) site URL without credentials");
}
const inventory = JSON.parse(
  readFileSync(new URL("../public/inventory.json", import.meta.url), "utf8"),
);
const canonical = "https://skill-bazaar.islanddevcrew.app";
const pages = [
  "/",
  "/about",
  ...inventory.entries.map((entry) => `/skills/${entry.id}`),
];
for (const path of pages) {
  const response = await fetch(new URL(path, base), {
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(response.status, 200, `${path} must return200`);
  assert.match(response.headers.get("content-type") ?? "", /text\/html/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  const csp = response.headers.get("content-security-policy") ?? "";
  for (const directive of [
    "default-src 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "form-action 'none'",
  ])
    assert.ok(csp.includes(directive), `${path}: missing ${directive}`);
  const html = await response.text();
  assert.match(html, /<main\b[^>]*id="main"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path} needs one H1`);
  const expected = path === "/" ? canonical : canonical + path;
  assert.ok(
    html.includes(`rel="canonical" href="${expected}"`),
    `${path}: canonical mismatch`,
  );
  assert.ok(
    !html.includes("buy.stripe.com"),
    `${path}: unverified checkout exposed`,
  );
  if (path === "/") {
    const initialHTML = html.split("</main>")[0];
    for (const entry of inventory.entries)
      assert.ok(
        initialHTML.includes(`id="entry-${entry.id}"`),
        `missing server-rendered ${entry.id}`,
      );
  }
  console.log(
    `PASS ${path}: HTML, heading, canonical, headers, checkout boundary`,
  );
}
for (const path of ["/not-a-real-page", "/skills/not-a-real-skill"]) {
  const response = await fetch(new URL(path, base), {
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(response.status, 404, `${path} must fail404`);
  assert.ok((await response.text()).includes("Not in this catalog"));
  console.log(`PASS ${path}:404`);
}
const legacy = await fetch(new URL("/skill-bazaar.html", base), {
  redirect: "manual",
  signal: AbortSignal.timeout(15000),
});
assert.equal(legacy.status, 308);
assert.equal(new URL(legacy.headers.get("location"), base).pathname, "/");
const sitemap = await (await fetch(new URL("/sitemap.xml", base))).text();
for (const path of pages)
  assert.ok(
    sitemap.includes(
      `<loc>${path === "/" ? canonical : canonical + path}</loc>`,
    ),
  );
const robots = await (await fetch(new URL("/robots.txt", base))).text();
assert.ok(robots.includes(`Sitemap: ${canonical}/sitemap.xml`));
const delivered = await (await fetch(new URL("/inventory.json", base))).json();
assert.deepEqual(delivered, inventory);
console.log("PASS legacy308, sitemap, robots, and exact inventory parity");
console.log(
  "HTTP author smoke only: browser interaction/accessibility/fidelity and external source truth are separate checks.",
);
