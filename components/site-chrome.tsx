import Link from "next/link";
import { Mark } from "./icon";
import { CONTACT } from "@/lib/data";
export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Skill Bazaar home">
          <Mark />
          <span>Skill Bazaar</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#collections">Collections</Link>
          <Link href="/#catalog">Browse</Link>
          <Link href="/#access">Access</Link>
          <a href="https://islanddevcrew.com">About IDC</a>
        </nav>
        <a
          className="button button-outline suggest"
          href={`mailto:${CONTACT}?subject=Skill%20Bazaar%20%E2%80%94%20suggest%20a%20skill`}
        >
          Suggest a skill
        </a>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <Link href="/" className="footer-brand">
          Skill Bazaar
        </Link>
        <nav aria-label="Footer navigation">
          <Link href="/#catalog">Catalog</Link>
          <Link href="/#access">Access</Link>
          <a href={`mailto:${CONTACT}?subject=Skill%20Bazaar`}>{CONTACT}</a>
        </nav>
        <div className="footer-owner">
          <a href="https://islanddevcrew.com">Island Development Crew</a>
          <p>An IDC catalog. AgentPact services are optional.</p>
        </div>
      </div>
      <div className="footer-note">
        <span>Choose deliberately. Inspect the source.</span>
        <Link href="/about">How this catalog works</Link>
      </div>
    </footer>
  );
}
