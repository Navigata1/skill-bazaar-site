import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

test("production smoke refuses an occupied port without killing its owner", async () => {
  const fixture = createServer((_request, response) =>
    response.end("owned fixture"),
  );
  await new Promise<void>((resolve, reject) => {
    fixture.once("error", reject);
    fixture.listen(0, "127.0.0.1", resolve);
  });
  try {
    const address = fixture.address();
    assert.ok(address && typeof address !== "string");
    const result = await new Promise<{ code: number | null; error: string }>(
      (resolve, reject) => {
        const child = spawn(
          process.execPath,
          [
            fileURLToPath(
              new URL("../scripts/production-smoke.mjs", import.meta.url),
            ),
            String(address.port),
          ],
          { stdio: ["ignore", "ignore", "pipe"] },
        );
        let error = "";
        child.stderr.on("data", (chunk) => {
          error += chunk;
        });
        child.once("error", reject);
        child.once("close", (code) => resolve({ code, error }));
      },
    );
    assert.equal(result.code, 1);
    assert.match(result.error, /EADDRINUSE/);
    assert.equal(
      await (await fetch(`http://127.0.0.1:${address.port}`)).text(),
      "owned fixture",
    );
  } finally {
    await new Promise<void>((resolve, reject) =>
      fixture.close((error) => (error ? reject(error) : resolve())),
    );
  }
});
