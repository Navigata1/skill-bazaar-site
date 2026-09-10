import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  filterEntries,
  sourceUrl,
  validateCatalog,
  OUTCOMES,
  type Entry,
} from "../lib/catalog.ts";
const inventory = JSON.parse(
  readFileSync(new URL("../public/inventory.json", import.meta.url), "utf8"),
);
const entries: Entry[] = inventory.entries;
test("catalog validates and has stable unique identities", () => {
  assert.doesNotThrow(() => validateCatalog(entries));
  assert.equal(new Set(entries.map((entry) => entry.id)).size, entries.length);
});
test("all means full catalog; no query changes source data", () => {
  assert.deepEqual(filterEntries(entries, "  ", "All"), entries);
  const before = JSON.stringify(entries);
  filterEntries(entries, "forge", "Build");
  assert.equal(JSON.stringify(entries), before);
});
test("every outcome finds only matching entries", () => {
  for (const outcome of OUTCOMES.slice(1)) {
    const result = filterEntries(entries, "", outcome);
    assert.ok(result.length);
    assert.ok(result.every((entry) => entry.outcomes.includes(outcome)));
  }
});
test("case, whitespace, Unicode width, and multiple terms normalize", () => {
  assert.equal(
    filterEntries(entries, "  ＦＯＲＧＥ   50 ", "All")[0]?.id,
    "forge-50",
  );
  assert.equal(
    filterEntries(entries, "recall", "Memory")[0]?.id,
    "memory-mastery",
  );
});
test("query and outcome combine; empty state is real", () => {
  assert.equal(filterEntries(entries, "recall", "Build").length, 0);
  assert.equal(filterEntries(entries, "no-such-product-z9", "All").length, 0);
});
test("search treats potentially hostile text as literal input", () => {
  assert.equal(
    filterEntries(entries, "<script>alert(1)</script>", "All").length,
    0,
  );
  assert.equal(filterEntries(entries, ".*", "All").length, 0);
});
test("red fixtures: duplicate ids, duplicate repositories, unknown outcomes are rejected", () => {
  assert.throws(() => validateCatalog([entries[0], entries[0]]), /duplicate/);
  assert.throws(
    () => validateCatalog([entries[0], { ...entries[0], id: "different" }]),
    /Duplicate/,
  );
  assert.throws(
    () => validateCatalog([{ ...entries[0], outcomes: ["Whatever"] }]),
    /outcome/,
  );
});
test("red fixtures: source URLs reject protocol injection and unauthorized hosts", () => {
  for (const repo of [
    "javascript:alert(1)",
    "//evil.test/path",
    "OtherOwner/repo",
    "Navigata1/repo?x=1",
    "Navigata1/repo/../../evil",
  ])
    assert.throws(() => sourceUrl({ ...entries[0], repo }), /approved/);
});
test("red fixtures: document traversal and control characters are rejected", () => {
  for (const file of [
    "../secrets",
    "/absolute",
    "a//b",
    "a/../b",
    "README.md?x=1",
    "a\\b",
    "a\nb",
  ])
    assert.throws(() => sourceUrl(entries[0], file), /path/);
});
test("GitHub source document links are local to their repository", () => {
  assert.equal(
    sourceUrl(entries[0], "docs/start here.md"),
    "https://github.com/Island-Dev-Crew/idc-skills/blob/main/docs/start%20here.md",
  );
});
test("required document paths cannot silently become repository root links", () => {
  for (const key of ["guidePath", "licensePath"] as const) {
    for (const value of ["", " ", undefined, null]) {
      assert.throws(
        () => validateCatalog([{ ...entries[0], [key]: value } as Entry]),
        /Missing|path/,
        `${key} must reject ${String(value)}`,
      );
    }
  }
  assert.equal(sourceUrl(entries[0]), `https://github.com/${entries[0].repo}`);
  for (const value of ["", " "])
    assert.throws(() => sourceUrl(entries[0], value), /path/);
});
test("included members require both a readable name and a document path", () => {
  for (const key of ["name", "path"] as const) {
    for (const value of ["", " ", undefined, null]) {
      const child = {
        name: "Recall",
        path: "forge-recall/README.md",
        [key]: value,
      };
      assert.throws(
        () => validateCatalog([{ ...entries[0], includes: [child] } as Entry]),
        /Missing|path/,
        `included ${key} must reject ${String(value)}`,
      );
    }
  }
});
test("memory children are grouped rather than inflated into catalog entries", () => {
  const memory = entries.filter((entry) => entry.id === "memory-mastery");
  assert.equal(memory.length, 1);
  assert.equal(memory[0].includes?.length, 3);
  assert.ok(
    !entries.some((entry) =>
      ["forge-recall", "forge-genesis", "forge-hivemind"].includes(entry.id),
    ),
  );
});
test("paid service never exposes an unverified checkout or price", () => {
  assert.equal(inventory.services.length, 1);
  assert.equal(inventory.services[0].checkout, null);
  assert.equal(inventory.services[0].status, "availability-under-review");
  assert.ok(!JSON.stringify(inventory).includes("buy.stripe.com"));
});
test("non-open licensing is not laundered as open source", () => {
  assert.equal(
    entries.find((entry) => entry.id === "ype-pipeline")?.license,
    "All rights reserved",
  );
  assert.equal(
    entries.find((entry) => entry.id === "northstar-bootstrap")?.access,
    "Source available",
  );
  assert.equal(
    entries.find((entry) => entry.id === "northstar-cli")?.access,
    "Mixed license",
  );
});
