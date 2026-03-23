import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skill Bazaar — AgentCore | Island Development Crew",
  description:
    "The agent skill marketplace. Browse, install, and compose precision-engineered capabilities for autonomous agents. Part of the AgentCore suite by Island Development Crew.",
  keywords: [
    "agent skills",
    "AI marketplace",
    "autonomous agents",
    "AgentCore",
    "Island Development Crew",
    "skill marketplace",
    "AI capabilities",
    "agent infrastructure",
  ],
  authors: [{ name: "Island Development Crew LLC" }],
  creator: "Island Development Crew LLC",
  publisher: "Island Development Crew LLC",
  metadataBase: new URL("https://skillbazaar.idc.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skillbazaar.idc.dev",
    siteName: "Skill Bazaar",
    title: "Skill Bazaar — AgentCore | Island Development Crew",
    description:
      "The agent skill marketplace. Browse, install, and compose precision-engineered capabilities for autonomous agents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skill Bazaar — Agent Skill Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Bazaar — AgentCore",
    description:
      "Browse, install, and compose precision-engineered capabilities for autonomous agents.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
