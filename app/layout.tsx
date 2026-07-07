import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skill Bazaar — Real Skills for Working Agents",
  description:
    "A curated catalog of real, public agent skills and frameworks from Island Development Crew. Honest counts, real installs. Part of the AgentPact suite.",
  metadataBase: new URL("https://bazaar.islanddevcrew.app"),
  alternates: { canonical: "https://bazaar.islanddevcrew.app" },
  openGraph: {
    title: "Skill Bazaar — Real Skills for Working Agents",
    description:
      "A curated catalog of real, public agent skills and frameworks from Island Development Crew. Honest counts, real installs. Part of the AgentPact suite.",
    url: "https://bazaar.islanddevcrew.app",
    siteName: "Skill Bazaar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
