# Catalog maintenance

The JSON inventory is the single source for the catalog, generated item guides, and sitemap. Every entry must have a stable ID, exact GitHub owner/repository, branch, type, access/license, supported outcomes, a factual description, and tailored start/caution text. Document paths point to files within that same repository.

`lib/catalog.ts` validates repository/path boundaries, duplicate IDs/repositories, required copy, and outcome membership. This is a structural check, not semantic proof that a claim is true. `tests/catalog.test.mts` exercises both valid cases and watched-red invalid fixtures.

The homepage’s featured collections and pairings are editorial. Review those separately when changing inventory IDs. No catalog-wide version badge is inferred from the website package version.

## Reviewed source corrections in 2.2

- Memory Mastery now points to `Island-Dev-Crew/neuralforge-memory-mastery`; Recall, Genesis, and Hivemind link into that collection rather than counting as extra listings.
- `Navigata1/iron-canvas-skill` is archived and explicitly links to `Island-Dev-Crew/iron-canvas`; the catalog follows that maintained source.
- YPE’s LICENSE says all rights reserved. NBB’s license is CC BY-NC-SA 4.0. NBCLI has an MIT-engine/noncommercial-methodology seam. None is advertised as unrestricted MIT.
- Garnet’s license offers MIT or Apache 2.0.
- Build Orchestration’s repository contains a skill but no README or visible license. It is omitted from discovery until a clear visitor/license path exists; the source repository was not deleted or changed.

## Adding checkout

The current application intentionally has no checkout action. An active Stripe link alone does not establish fulfillment. Before exposing payment, confirm the owner-approved price/currency/interval, delivered entitlement, real activation destination, support/cancellation terms, and end-to-end test-mode fulfillment. Handle secrets only in the service backend, never in inventory or `NEXT_PUBLIC_*`. Keep open catalog browsing independent of any paid service.
