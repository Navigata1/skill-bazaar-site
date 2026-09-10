import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <p className="eyebrow amber">404 · Not in this catalog</p>
      <h1>
        Let’s find your
        <br />
        starting point.
      </h1>
      <p>This address does not match a Skill Bazaar page.</p>
      <Link className="button" href="/#catalog">
        Return to the catalog
      </Link>
    </main>
  );
}
