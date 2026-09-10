import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const portArgument = process.argv[2] ?? "4277";
const port = Number(portArgument);
if (
  !/^\d+$/.test(portArgument) ||
  !Number.isInteger(port) ||
  port < 1 ||
  port > 65535
)
  throw new Error("Production smoke port must be an integer from 1 to 65535");
const base = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  [
    require.resolve("next/dist/bin/next"),
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    String(port),
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
const closed = new Promise((resolve) => server.once("close", resolve));

try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("Production server readiness timed out")),
      30000,
    );
    const ready = () => {
      clearTimeout(timer);
      resolve();
    };
    server.stdout.on("data", (chunk) => {
      process.stdout.write(chunk);
      if (chunk.toString().includes("Ready in")) ready();
    });
    server.stderr.on("data", (chunk) => process.stderr.write(chunk));
    server.once("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    server.once("exit", (code, signal) => {
      clearTimeout(timer);
      reject(
        new Error(
          `Production server exited before readiness: ${code ?? signal}`,
        ),
      );
    });
  });
  const code = await new Promise((resolve, reject) => {
    const smoke = spawn(
      process.execPath,
      [fileURLToPath(new URL("./smoke.mjs", import.meta.url)), base],
      { stdio: "inherit" },
    );
    smoke.once("error", reject);
    smoke.once("close", resolve);
  });
  if (code !== 0)
    throw new Error(`Production HTTP smoke failed with exit ${code}`);
} finally {
  if (server.exitCode === null && server.signalCode === null) {
    server.kill("SIGTERM");
    const force = setTimeout(() => server.kill("SIGKILL"), 5000);
    await closed;
    clearTimeout(force);
  }
}
