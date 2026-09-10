# Security

Report suspected vulnerabilities privately to **hello@islanddevcrew.com** with “Skill Bazaar security” in the subject. Include the affected URL/revision, a minimal reproduction, and potential impact. Do not include credentials, private memory contents, or customer data. No response-time guarantee is implied.

## Scope and boundaries

This repository is a public catalog, not the private Skill Bazaar backend or AgentPact billing service. It has no login, database, form submission endpoint, payment SDK, arbitrary remote fetch, or raw-HTML rendering. Catalog content is reviewed at build time; text is rendered through React. Search is local to the browser. Source links are constrained to the declared GitHub owners and validated document paths.

The catalog does **not** certify linked code as safe. Repository documentation can contain executable instructions; review it before supplying it to an agent or running it with credentials. Use a disposable workspace and non-sensitive inputs first.

## Browser policy

Responses restrict scripts, images, connections, fonts, framing, and sensitive browser permissions. Static Next rendering requires inline hydration scripts, so this CSP deliberately retains `script-src 'unsafe-inline'`; it is **not a strict nonce-based XSS defense**. There is no user-authored HTML surface. Reassess this tradeoff before adding untrusted content, account features, or payment processing. HSTS applies only to this host, without claiming control of sibling subdomains.

## Dependencies

Next 16.3.4 is pinned. Compatible transitive packages are locked; `npm ci --ignore-scripts`, `npm audit`, and the build are reproducible checks, not proof of absence of vulnerabilities. ESLint 9.39.5 is a development-only compatibility limitation: current `eslint-config-next` React/import/accessibility plugins do not support ESLint 10, whose trial upgrade failed. Do not bypass those rules to conceal the incompatibility; migrate when upstream support is available.

This 2.2 candidate does not claim future cross-model testing or comprehensive security hardening.
