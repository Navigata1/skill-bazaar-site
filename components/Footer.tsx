"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Browse Skills", href: "#skills" },
    { label: "Categories", href: "#categories" },
    { label: "Featured", href: "#skills" },
    { label: "New Releases", href: "#" },
  ],
  Developers: [
    { label: "SDK Docs", href: "#" },
    { label: "Skill Interface Spec", href: "#" },
    { label: "CLI Reference", href: "#" },
    { label: "Publisher Portal", href: "#list-skills" },
  ],
  AgentCore: [
    { label: "Suite Overview", href: "#" },
    { label: "Agent Runtime", href: "#" },
    { label: "Observability", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "Island Development Crew", href: "https://idc.dev" },
    { label: "About IDC", href: "https://idc.dev/about" },
    { label: "Portfolio", href: "https://idc.dev/portfolio" },
    { label: "Contact", href: "https://idc.dev/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-purple-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">SB</span>
              </div>
              <span className="text-white font-bold text-lg">Skill Bazaar</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The marketplace for agent capabilities.
              Part of the AgentCore suite.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-600 text-xs font-mono">All systems operational</span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-purple-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AgentCore suite banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-5 border border-purple-500/15 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: "rgba(15, 15, 25, 0.6)" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">🧠</span>
              <span className="text-white font-bold text-sm">AgentCore Suite</span>
              <span className="text-xs text-purple-400 font-mono bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                Agent Infrastructure
              </span>
            </div>
            <p className="text-gray-600 text-xs">
              Engineering the foundational layer that makes autonomous agents smarter, faster, and composable.
            </p>
          </div>
          <a
            href="https://idc.dev"
            className="flex-shrink-0 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors flex items-center gap-1"
          >
            Explore IDC portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Island Development Crew LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">Privacy</a>
            <a href="#" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">Terms</a>
            <a href="#" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">Skill Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
