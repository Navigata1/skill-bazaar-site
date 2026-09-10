# Contributing

Start with one visitor problem: a broken source link, unclear outcome, incorrect license, or inaccessible interaction. Keep changes small and reviewable.

## Catalog changes

1. Verify the public repository, current owner, entry guide, and actual license file.
2. Edit [public/inventory.json](public/inventory.json), the single catalog source. Keep a stable lowercase `id`, a concise job-to-be-done, supported outcome labels, and specific start/caution text.
3. Use `Open source` only when the license permits it. Public source with noncommercial or all-rights-reserved terms must be labeled separately.
4. Keep a collection as one listing; add member documents to `includes`. Do not inflate counts by listing the same collection’s children separately.
5. Run the checks below. Inspect narrow and desktop rendering, keyboard focus, search, reset, empty state, and the item guide.

```bash
npm ci --ignore-scripts
npm run check
npm run smoke:production
npm audit
```

Node 22.18+ is required for the TypeScript test runner. The project uses system fonts, Next/React, and ordinary CSS; do not add remote fonts, tracking, or decorative dependencies without a demonstrated need.

Keep unknown `/skills/*` routes recoverable without JavaScript: a real HTTP 404, noindex, main heading, and catalog link must be present in the HTML tree, not merely in a serialized hydration payload. The smoke gate uses the parser bundled with the pinned Next version and excludes scripts, templates, and hidden nodes; preserve its negative fixtures when upgrading Next. Do not add a page at the reserved internal rewrite target `/__catalog_not_found__`.

## Claims and access

Do not invent popularity, install counts, compatibility, independent acceptance, or security claims. Editorial recommendations must remain identified as editorial. Do not copy unreviewed shell pipelines into installation guides.

Payment is a separate review boundary. A listing change must not enable checkout without an owner-approved price, confirmed fulfillment and activation, cancellation terms, and current end-to-end evidence. Do not put secret credentials in issues or fixtures.

## Review and release

Include test results and the limits of your verification in the pull request. Passing tests are author QA, not independent acceptance or deployment authority. Recheck external links and license drift before publication. Keep review artifacts and screenshots outside this public source tree unless they are deliberate user documentation.
