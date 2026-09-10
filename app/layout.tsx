import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/site-chrome";
import { CANONICAL } from "@/lib/data";
import "./globals.css";
const description =
  "Open skills for building, verifying, and remembering. Explore Forge 50, Uncle Bob Skills, Memory Mastery, and the wider Island Development Crew catalog.";
export const metadata: Metadata = {
  title: {
    default: "Skill Bazaar — Give your agents better tools",
    template: "%s | Skill Bazaar",
  },
  description,
  metadataBase: new URL(CANONICAL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Skill Bazaar — Give your agents better tools",
    description,
    url: CANONICAL,
    siteName: "Skill Bazaar",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Skill Bazaar — Give your agents better tools",
    description,
  },
  manifest: "/site.webmanifest",
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
};
export const viewport: Viewport = {
  themeColor: "#0b1820",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
