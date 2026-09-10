import Link from "next/link";
import { Catalog } from "@/components/catalog";
import { Arrow } from "@/components/icon";
import { CONTACT, catalogEntries } from "@/lib/data";
const collections = [
  {
    id: "forge-50",
    title: "Forge 50",
    description: "Plan, build, research, and ship with evidence.",
    action: "Explore Forge 50",
  },
  {
    id: "uncle-bob",
    title: "Uncle Bob Skills",
    description: "Turn software craftsmanship into repeatable checks.",
    action: "Explore Uncle Bob",
  },
  {
    id: "memory-mastery",
    title: "Memory Mastery",
    description: "Inspect, structure, and reconcile agent memory.",
    action: "Explore Memory Mastery",
  },
];
const outcomes = [
  {
    title: "Build with intent.",
    pairing: "Forge 50 → Uncle Bob",
    description:
      "Plan the work with Forge 50, then bring software-craft checks to the implementation.",
    href: "/skills/forge-50",
  },
  {
    title: "Verify what ships.",
    pairing: "Uncle Bob → Dogfood Readiness",
    description:
      "Pair executable checks with a product-readiness audit. Keep the evidence tied to what you tested.",
    href: "/skills/dogfood-readiness",
  },
  {
    title: "Remember responsibly.",
    pairing: "Memory Mastery",
    description:
      "Inspect existing memory, plan a new store, or reconcile shared knowledge with Recall, Genesis, and Hivemind.",
    href: "/skills/memory-mastery",
  },
  {
    title: "Orchestrate the work.",
    pairing: "ARCHIPELAGO",
    description:
      "Structure multi-stage builds around typed contracts, explicit task boundaries, and review gates.",
    href: "/skills/archipelago",
  },
];
export default function Home() {
  return (
    <main id="main" className="container">
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">
          Give your agents
          <br />
          better tools.
        </h1>
        <p>
          Open skills for building, verifying, and remembering.
          <br className="desktop-break" /> Find the right starting point.
          Inspect the source.
          <br className="desktop-break" /> Keep the decision yours.
        </p>
        <div className="hero-actions">
          <a href="#outcomes" className="button">
            Choose your starting point <Arrow />
          </a>
          <a href="#catalog" className="text-link">
            Browse the catalog <Arrow />
          </a>
        </div>
      </section>
      <section
        id="collections"
        className="collection-rail"
        aria-label="Featured open-source collections"
      >
        {collections.map((collection) => (
          <article key={collection.id}>
            <p className="eyebrow">Open source</p>
            <h2>{collection.title}</h2>
            <p className="collection-description">{collection.description}</p>
            <Link href={`/skills/${collection.id}`} className="text-link">
              {collection.action} <Arrow />
            </Link>
          </article>
        ))}
      </section>
      <section
        id="outcomes"
        className="outcomes section"
        aria-labelledby="outcomes-title"
      >
        <h2 id="outcomes-title">Start with the outcome.</h2>
        <div className="outcome-rail">
          {outcomes.map((outcome, index) => (
            <article key={outcome.title}>
              <p className="step-number">0{index + 1}</p>
              <h3>{outcome.title}</h3>
              <p className="pairing">{outcome.pairing}</p>
              <p className="outcome-description">{outcome.description}</p>
              <Link href={outcome.href} className="small-link">
                Explore skills <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section
        id="catalog"
        className="section catalog-section"
        aria-labelledby="catalog-title"
      >
        <p className="eyebrow amber">Catalog</p>
        <h2 id="catalog-title">Browse the catalog.</h2>
        <Catalog entries={catalogEntries} />
      </section>
      <section
        id="access"
        className="section access-section"
        aria-labelledby="access-title"
      >
        <div className="open-access">
          <h2 id="access-title">
            Open skills.
            <br />
            Separate services.
          </h2>
          <h3>The catalog is free to explore.</h3>
          <p>
            Open-source skills do not require an AgentPact subscription. Read
            each repository’s license and installation guide before running
            code.
          </p>
          <a href="#collections" className="text-link amber">
            Start with an open collection <Arrow />
          </a>
        </div>
        <aside className="service-panel" aria-labelledby="service-title">
          <p className="eyebrow">AgentPact</p>
          <h3 id="service-title">AgentPact Signal Feed</h3>
          <p className="service-status">
            Paid service · availability under review
          </p>
          <p>
            A separate intelligence service, not an unlock for the skill
            catalog.
          </p>
          <a
            className="button"
            href={`mailto:${CONTACT}?subject=Skill%20Bazaar%20%E2%80%94%20AgentPact%20access`}
          >
            Ask about access
          </a>
          <p className="service-note">
            Checkout is not offered on this page while the activation route and
            delivery are reverified. Price, delivery, and cancellation terms
            must be confirmed before this catalog links to payment.
          </p>
        </aside>
      </section>
      <section className="section get-started" aria-labelledby="start-title">
        <p className="eyebrow amber">Get started</p>
        <h2 id="start-title">Inspect before you install.</h2>
        <ol className="steps">
          <li>
            <h3>Read the source</h3>
            <p>
              Review the repository, documentation, and license for intended
              use.
            </p>
          </li>
          <li>
            <h3>Check the permissions</h3>
            <p>Understand what the code can access and what it requires.</p>
          </li>
          <li>
            <h3>Try a safe workspace</h3>
            <p>
              Run in an isolated environment before using it in your projects.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
