import type { Metadata } from "next";
import { CONTACT, reviewedAt } from "@/lib/data";
export const metadata: Metadata = {
  title: "How this catalog works",
  alternates: { canonical: "/about" },
  openGraph: { title: "How this catalog works | Skill Bazaar", url: "/about" },
};
export default function About() {
  return (
    <main id="main" className="container prose-page">
      <p className="eyebrow amber">About the catalog</p>
      <h1>
        A starting point.
        <br />
        Not a stamp of approval.
      </h1>
      <p className="lead">
        Skill Bazaar connects visitors with Island Development Crew’s public
        skills, frameworks, and tools. The repository remains the authority for
        what each project does.
      </p>
      <section>
        <h2>Editorial selection, visible sources.</h2>
        <p>
          Collections are featured for breadth and a clear first-use path, not
          download numbers or popularity. Outcome pairings are editorial
          suggestions, not a claim that the products have been
          integration-tested together. Listings were reviewed on{" "}
          <time dateTime={reviewedAt}>{reviewedAt}</time>.
        </p>
        <p>
          <a href="/inventory.json">The catalog data</a> is public. It is served
          with the site rather than fetched from GitHub on every visit, so
          unavailable third-party APIs do not empty the page. There are no live
          star counts, adoption claims, or fabricated review scores.
        </p>
      </section>
      <section>
        <h2>Public source does not mean unrestricted use.</h2>
        <p>
          Open-source, source-available, mixed-license, and review-terms entries
          are labeled separately. Read the actual license before copying,
          modifying, redistributing, or using a project commercially. Catalog
          inclusion is not a security certification or a warranty.
        </p>
      </section>
      <section>
        <h2>Open catalog. Optional services.</h2>
        <p>
          The catalog and its source links are free to explore. AgentPact Signal
          Feed is a separate paid service, not an unlock for the skills. This
          catalog does not offer checkout: the previously advertised activation
          destination did not resolve during review. Delivery and service terms
          must be reverified before a payment link is displayed.
        </p>
      </section>
      <section>
        <h2>A small privacy footprint.</h2>
        <p>
          The application has no account system, tracking scripts, analytics
          SDK, or payment capture. Search stays in your browser; it is not sent
          to us. Hosting providers may retain standard request logs. Clicking
          GitHub, the IDC parent site, or an email link takes you to a
          separately operated service; their privacy practices apply.
        </p>
      </section>
      <section>
        <h2>Corrections and security.</h2>
        <p>
          Send broken links, ownership changes, and catalog corrections to{" "}
          <a href={`mailto:${CONTACT}?subject=Skill%20Bazaar%20correction`}>
            {CONTACT}
          </a>
          . For a suspected vulnerability, use the same corporate contact with
          “Skill Bazaar security” in the subject. Please do not send passwords,
          private keys, or customer data.
        </p>
      </section>
    </main>
  );
}
