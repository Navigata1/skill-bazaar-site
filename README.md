# Skill Bazaar

## Give your agents better tools.

An outcome-first catalog for Island Development Crew’s skills, frameworks, and tools. Start with **Forge 50**, **Uncle Bob Skills**, or **Memory Mastery**; then browse the wider collection by the work you want to do.

Canonical deployment target: **https://skill-bazaar.islanddevcrew.app**. This checkout prepares **2.2.0**; package version and local checks are not evidence of public deployment or independent acceptance.

### What a visitor gets

- A complete server-rendered catalog, usable even with JavaScript off.
- Local search, outcome filters, and a clear empty/reset state when JavaScript is available.
- Individual start guides that distinguish downloading source from installing or executing a tool.
- Explicit license labels: public source is not automatically open source.
- A clear separation between open collections and optional paid AgentPact services.

Checkout is not offered by this catalog while AgentPact’s activation and fulfillment are reverified. Existing external payment processing was not changed. Contact **hello@islanddevcrew.com** for access questions.

### Run locally

Requires Node 22.18+ and npm. From a fresh clone:

```bash
npm ci --ignore-scripts
npm run check
npm run dev -- --hostname 127.0.0.1
```

Open `http://127.0.0.1:3000`. No application credentials or environment file are required. `npm ci --ignore-scripts` suppresses dependency lifecycle scripts; the build still uses the locked framework toolchain.

For a production-mode check:

```bash
npm run build
npm run start -- --hostname 127.0.0.1
```

### Repository map

| Surface                                        | Purpose                                                                 |
| ---------------------------------------------- | ----------------------------------------------------------------------- |
| [public/inventory.json](public/inventory.json) | Single catalog source, reviewed descriptions, license and access labels |
| [app](app)                                     | Landing, item guides, catalog policy, 404, and search metadata          |
| [components](components)                       | Shared navigation, icons, and interactive catalog                       |
| [lib/catalog.ts](lib/catalog.ts)               | Source URL validation, catalog validation, and filtering                |
| [tests](tests)                                 | Valid cases and negative fixtures                                       |
| [Catalog maintenance](docs/catalog.md)         | Source and payment-review rules                                         |
| [Contributing](CONTRIBUTING.md)                | Changes, verification, and review                                       |
| [Security](SECURITY.md)                        | Reporting and security boundaries                                       |

### Evidence and limits

Run `npm run test`, `npm run lint`, `npm run typecheck`, `npm run build`, and `npm audit`. Local tests do not prove external link freshness, browser accessibility, hosted rendering, or independent release acceptance. Check those separately before publication.

The site uses Next/React, ordinary CSS, local vector icons, and system fonts. It contains no tracking SDK, account system, database, or checkout backend. Search stays in the browser. See the [catalog policy](app/about/page.tsx) for the visitor-facing boundaries.

The source repositories retain their own licenses and attribution. This site repository does not currently declare a separate reuse license; publication is not a grant of unrestricted reuse. The public catalog is an IDC project; AgentPact services are optional.
