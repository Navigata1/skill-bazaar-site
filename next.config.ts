import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the checked-in project instructions rather than rewriting on dev.
  agentRules: false,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/skill-bazaar.html", destination: "/", permanent: true },
    ];
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    // Static pages require Next's inline hydration scripts. No user HTML,
    // remote scripts, embeds, analytics, or payment SDK is accepted here.
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      `connect-src 'self'${isDev ? " ws: http://localhost:* http://127.0.0.1:*" : ""}`,
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'none'",
      "frame-ancestors 'none'",
    ].join("; ");
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
    ];
  },
};

export default nextConfig;
