import assert from "node:assert/strict";
import parser from "next/dist/compiled/node-html-parser/index.js";

// Reuse the HTML parser shipped with the pinned Next version. This is test-only;
// the fixture tests must stay green whenever that dependency is upgraded.
export function initialDocument(html) {
  const document = parser.parse(html);
  for (const node of document.querySelectorAll(
    'script, style, template, [hidden], [aria-hidden="true"]',
  ))
    node.remove();
  return document;
}

export function assertRecoveryDocument(html, path) {
  const document = initialDocument(html);
  const mains = document.querySelectorAll("main#main");
  assert.equal(mains.length, 1, `${path}: missing initial HTML recovery main`);
  const headings = mains[0].querySelectorAll("h1");
  assert.equal(headings.length, 1, `${path}: missing initial HTML recovery H1`);
  assert.ok(headings[0].textContent.trim(), `${path}: empty recovery H1`);
  const recovery = mains[0].querySelector('a[href="/#catalog"]');
  assert.ok(recovery, `${path}: missing initial HTML catalog recovery link`);
  assert.equal(recovery.textContent.trim(), "Return to the catalog");
  assert.ok(
    document
      .querySelectorAll('meta[name="robots"]')
      .some((node) => /\bnoindex\b/.test(node.getAttribute("content") ?? "")),
    `${path}: missing noindex`,
  );
}
