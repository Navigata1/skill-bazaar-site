"use client";

import { motion } from "framer-motion";

const requirements = [
  "Skill Interface Specification v2.0 compliance",
  "Test coverage ≥ 80% with provided harness",
  "Semantic versioning with changelog",
  "Zero critical CVEs in dependency audit",
  "Documentation including schema + usage examples",
];

export default function ListSkillsCTA() {
  return (
    <section id="list-skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-purple-500" />
              <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">
                For Publishers
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Your Skills,{" "}
              <span className="gradient-text">The World&apos;s Agents</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Skill Bazaar is the category-defining distribution channel for
              agent capabilities. Publish your precision-engineered skills to
              thousands of agent developers building on the AgentCore stack.
            </p>

            {/* Requirements list */}
            <div className="space-y-3 mb-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Listing Requirements
              </p>
              {requirements.map((req, i) => (
                <motion.div
                  key={req}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-500 text-sm leading-snug">{req}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                List Your Skills
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-purple-500/20 hover:border-purple-500/40 text-purple-300 hover:text-purple-200 font-semibold transition-all duration-200"
              >
                Publisher Guidelines
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div
              className="rounded-2xl p-8 border border-purple-500/20 glow-purple"
              style={{ background: "rgba(15, 15, 25, 0.8)" }}
            >
              <h3 className="text-white font-black text-xl mb-6">
                Publisher Metrics
              </h3>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "48k+", label: "Monthly active agents", accent: "text-purple-400" },
                  { value: "2.1M", label: "Skill invocations / day", accent: "text-blue-400" },
                  { value: "$0", label: "Listing fee", accent: "text-green-400" },
                  { value: "70%", label: "Revenue share to publishers", accent: "text-yellow-400" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/3 border border-white/5 p-4">
                    <div className={`text-2xl font-black mb-1 ${stat.accent}`}>{stat.value}</div>
                    <div className="text-gray-600 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Publisher quote */}
              <div className="rounded-xl bg-purple-500/8 border border-purple-500/15 p-4">
                <p className="text-gray-400 text-sm leading-relaxed italic mb-3">
                  &ldquo;We listed three skills on Skill Bazaar. Within 30 days they were
                  running inside 400+ agent deployments we&apos;d never have reached on our own.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs">M</div>
                  <div>
                    <div className="text-white text-xs font-semibold">Mira S.</div>
                    <div className="text-gray-600 text-xs">Infrastructure Lead, Vertex AI Labs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative orb */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
