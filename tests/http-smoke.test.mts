import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

for (const failure of ["missing CSP", "empty initial catalog"]) {
  test(`HTTP gate watched red: ${failure}`, async () => {
    const server = createServer((_request, response) => {
      const headers: Record<string, string> = {
        "content-type": "text/html",
        "x-content-type-options": "nosniff",
        "x-frame-options": "DENY",
      };
      if (failure !== "missing CSP")
        headers["content-security-policy"] =
          "default-src 'self'; frame-ancestors 'none'; object-src 'none'; form-action 'none'";
      response.writeHead(200, headers);
      response.end(
        '<html><head><link rel="canonical" href="https://skill-bazaar.islanddevcrew.app"></head><body><main id="main"><h1>Empty catalog fixture</h1></main></body></html>',
      );
    });
    await new Promise<void>((resolve) =>
      server.listen(0, "127.0.0.1", resolve),
    );
    try {
      const address = server.address();
      assert.ok(address && typeof address !== "string");
      const result = await new Promise<{ code: number | null; error: string }>(
        (resolve, reject) => {
          const child = spawn(
            process.execPath,
            [
              fileURLToPath(new URL("../scripts/smoke.mjs", import.meta.url)),
              `http://127.0.0.1:${address.port}`,
            ],
            { stdio: ["ignore", "ignore", "pipe"] },
          );
          let error = "";
          child.stderr.on("data", (chunk) => {
            error += chunk;
          });
          child.on("error", reject);
          child.on("close", (code) => resolve({ code, error }));
        },
      );
      assert.equal(result.code, 1);
      assert.match(
        result.error,
        failure === "missing CSP"
          ? /missing default-src/
          : /missing server-rendered forge-50/,
      );
    } finally {
      await new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      );
    }
  });
}
