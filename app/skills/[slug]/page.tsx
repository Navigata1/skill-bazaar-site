import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icon";
import { sourceUrl } from "@/lib/catalog";
import { CANONICAL, entries } from "@/lib/data";
// Unknown slugs reach our explicit notFound() guard. With dynamicParams=false,
// Next16.3.4 logs an internal NoFallbackError even though it returns a404.
export const dynamicParams = true;
export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.id }));
}
type Props = { params: Promise<{ slug: string }> };
async function getEntry({ params }: Props) {
  const { slug } = await params;
  return entries.find((entry) => entry.id === slug) ?? notFound();
}
export async function generateMetadata(props: Props): Promise<Metadata> {
  const entry = await getEntry(props);
  return {
    title: `${entry.name} — start here`,
    description: entry.description,
    alternates: { canonical: `/skills/${entry.id}` },
    openGraph: {
      title: `${entry.name} | Skill Bazaar`,
      description: entry.description,
      url: `${CANONICAL}/skills/${entry.id}`,
    },
  };
}
export default async function SkillGuide(props: Props) {
  const entry = await getEntry(props);
  return (
    <main id="main" className="container guide-page">
      <Link className="text-link" href="/#catalog">
        Back to the catalog <Arrow />
      </Link>
      <header className="guide-heading">
        <p className="eyebrow amber">
          {entry.kind} · {entry.access}
        </p>
        <h1>{entry.name}</h1>
        <p>{entry.description}</p>
        <p className="guide-license">
          License:{" "}
          <a href={sourceUrl(entry, entry.licensePath)}>{entry.license}</a>
        </p>
      </header>
      <div className="guide-grid">
        <section aria-labelledby="guide-start">
          <h2 id="guide-start">A deliberate first step.</h2>
          <p>{entry.start}</p>
          <ol className="guide-steps">
            <li>
              <h3>Inspect the current source.</h3>
              <p>
                Read the repository’s entry guide and license. Confirm the
                release, prerequisites, and supported environment; this page
                does not automatically run an installer.
              </p>
              <a className="text-link" href={sourceUrl(entry, entry.guidePath)}>
                Read {entry.name} documentation <Arrow />
              </a>
            </li>
            <li>
              <h3>Choose a revision and workspace.</h3>
              <p>
                If you need a local copy, clone into a new disposable directory,
                then inspect and select a release tag or commit before executing
                code. A clone downloads files; it does not install this tool.
              </p>
              <pre>
                <code>{`git clone https://github.com/${entry.repo}.git`}</code>
              </pre>
              <p className="muted">
                Do not paste instructions from a repository into a privileged
                agent session without reviewing them.
              </p>
            </li>
            <li>
              <h3>Install only what you need.</h3>
              <p>
                Follow the repository’s documented procedure for your harness or
                runtime. Review proposed file writes, hooks, network calls, and
                required credentials. Test on non-sensitive sample data first.
              </p>
            </li>
          </ol>
        </section>
        <aside className="guide-aside">
          <h2>Before you run it.</h2>
          <p>{entry.caution}</p>
          <dl>
            <dt>Maintained source</dt>
            <dd>
              <a href={sourceUrl(entry)}>{entry.repo}</a>
            </dd>
            <dt>Useful for</dt>
            <dd>{entry.outcomes.join(" · ")}</dd>
            <dt>Access</dt>
            <dd>
              {entry.access}. No Skill Bazaar subscription is required to
              inspect the source. Its license determines permitted use.
            </dd>
          </dl>
          {entry.includes && (
            <>
              <h3>Inside this collection</h3>
              <ul className="collection-parts">
                {entry.includes.map((child) => (
                  <li key={child.path}>
                    <a href={sourceUrl(entry, child.path)}>
                      {child.name} <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link href="/about" className="text-link">
            Our catalog boundaries <Arrow />
          </Link>
        </aside>
      </div>
    </main>
  );
}
