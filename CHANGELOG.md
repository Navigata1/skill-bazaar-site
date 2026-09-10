# Changelog

## 2.2.0 — release candidate

- Rebuilt the landing page as native Next components with three collection entry points, outcome routes, and a full server-rendered catalog.
- Added local search and filters, real empty/reset states, and per-item installation preparation with license and permission boundaries.
- Consolidated Memory Mastery’s three skills under the organization-hosted collection. Followed Iron Canvas’s documented move to its maintained organization repository.
- Corrected non-open licensing labels for YPE, NorthStar Bootstrap, and NorthStar CLI. Omitted the undocumented/unlicensed Build Orchestration listing pending review.
- Separated open collections from the optional AgentPact service. Removed this site’s checkout link because the advertised activation destination did not resolve during review; external Stripe processing was not changed.
- Prepared `skill-bazaar.islanddevcrew.app` canonical metadata, sitemap, robots, legacy-page redirect, custom 404, and the corporate contact route.
- Updated Next to 16.3.4, refreshed compatible dependencies, removed unused animation/Tailwind packages and starter assets, and added catalog/negative-fixture tests.
- Added a read-only, immutable-action-pinned GitHub quality workflow for pull requests and main. It checks the source; it does not deploy or claim browser acceptance.
- Independent review found a dynamic-guide 404 with no usable recovery markup unless JavaScript ran. Unknown guide paths now resolve to the existing 404 renderer before streaming, with the requested URL preserved. Structural HTML tests reject hydration-only and hidden recovery content; production HTTP smoke now runs in CI.
- Required guide/license paths and collection-member names/paths reject empty or missing values instead of silently linking to a repository root.

Publication, live-route verification, and independent acceptance are separate gates. The package version alone does not establish that they have passed.
