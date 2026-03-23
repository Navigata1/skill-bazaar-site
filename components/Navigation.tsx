"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Categories", href: "#categories" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Developers", href: "#developers" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-purple-500/20 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">SB</span>
              </div>
              <div className="absolute -inset-0.5 rounded-lg bg-purple-500/30 blur-sm -z-10" />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight">
                Skill Bazaar
              </span>
              <span className="hidden sm:inline ml-2 text-xs text-purple-400 font-mono bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                AgentCore
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://idc.dev"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              IDC
            </a>
            <a
              href="#list-skills"
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            >
              List Your Skills
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-purple-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 hover:text-purple-300 text-sm font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://idc.dev"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors flex items-center gap-1"
                >
                  ← Back to IDC
                </a>
                <a
                  href="#list-skills"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all"
                >
                  List Your Skills
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
