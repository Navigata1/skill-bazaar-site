import test from "node:test";
import assert from "node:assert/strict";
import { assertRecoveryDocument } from "../scripts/html-checks.mjs";

const recovery =
  '<main id="main"><h1>Find a starting point</h1><a href="/#catalog">Return to the catalog</a></main>';
const head = '<head><meta name="robots" content="noindex"></head>';

test("404 guard accepts real recovery structure in initial HTML", () => {
  assert.doesNotThrow(() =>
    assertRecoveryDocument(
      `<html>${head}<body>${recovery}</body></html>`,
      "/unknown",
    ),
  );
});
test("404 guard rejects a recovery page present only in hydration scripts", () => {
  const html = `<html id="__next_error__">${head}<body><script>self.__next_f.push(${JSON.stringify(recovery)})</script></body></html>`;
  assert.ok(html.includes("Return to the catalog"));
  assert.throws(
    () => assertRecoveryDocument(html, "/skills/unknown"),
    /missing initial HTML recovery main/,
  );
});
test("404 guard rejects hidden or template-only recovery markup", () => {
  for (const fragment of [
    `<div hidden>${recovery}</div>`,
    `<template>${recovery}</template>`,
  ])
    assert.throws(
      () =>
        assertRecoveryDocument(
          `<html>${head}<body>${fragment}</body></html>`,
          "/unknown",
        ),
      /missing initial HTML recovery main/,
    );
});
test("404 guard requires a real heading, recovery target, and noindex", () => {
  for (const html of [
    `<html>${head}<body>${recovery.replace(/<h1>.*?<\/h1>/, "")}</body></html>`,
    `<html>${head}<body>${recovery.replace('href="/#catalog"', 'href="/wrong"')}</body></html>`,
    `<html><body>${recovery}</body></html>`,
  ])
    assert.throws(() => assertRecoveryDocument(html, "/unknown"));
});
