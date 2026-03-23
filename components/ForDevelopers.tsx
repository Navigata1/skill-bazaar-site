"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Standardized Skill API",
    description:
      "Every skill adheres to the AgentCore Skill Interface Specification — a precision-engineered contract defining inputs, outputs, error surfaces, and observability hooks.",
  },
  {
    icon: "🛡️",
    title: "Sandboxed Execution",
    description:
      "Skills run in isolated execution environments with capability grants. No skill accesses resources it wasn't granted. Zero-trust from the runtime up.",
  },
  {
    icon: "📦",
    title: "Semantic Versioning",
    description:
      "Semver-compliant skill versioning with dependency resolution, compatibility matrices, and automated compatibility testing across the skill graph.",
  },
  {
    icon: "🔍",
    title: "Observable by Default",
    description:
      "Built-in telemetry: latency traces, token counts, error rates, and execution logs. Every skill invocation is observable without additional instrumentation.",
  },
  {
    icon: "🌐",
    title: "Runtime Agnostic",
    description:
      "Deploy skills in any runtime: Python, Node.js, Go, Rust, or WASM. The Skill Interface is language-neutral — build once, run anywhere.",
  },
  {
    icon: "💰",
    title: "Skill Monetization",
    description:
      "List your skills on the Bazaar with per-use, subscription, or open-source licensing. The IDC marketplace handles billing, distribution, and discovery.",
  },
];

const codeExample = `import { defineSkill } from "@agentcore/skill-sdk";

export default defineSkill({
  name: "semantic-search",
  version: "1.0.0",
  description: "Vector-based semantic document search",
  
  inputs: {
    query: { type: "string", required: true },
    limit: { type: "number", default: 10 },
    threshold: { type: "number", default: 0.75 },
  },
  
  outputs: {
    results: { type: "array" },
    total: { type: "number" },
  },
  
  async execute({ query, limit, threshold }) {
    const embeddings = await embed(query);
    const results = await vectorSearch(embeddings, { limit, threshold });
    return { results, total: results.length };
  },
});`;

export default function ForDevelopers() {
  return (
    <section id="developers" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-50" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">For Developers</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Built for the{" "}
            <span className="gradient-text">Engineer First</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The Skill Bazaar SDK gives you everything you need to build, test,
            publish, and monetize next-generation agent capabilities.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/25 transition-all duration-200"
                style={{ background: "rgba(15, 15, 25, 0.6)" }}
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h4 className="text-white font-bold text-sm mb-1.5">{feature.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right — code example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Window chrome */}
            <div className="rounded-2xl overflow-hidden border border-purple-500/15"
              style={{ background: "rgba(8, 8, 16, 0.9)" }}>
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-600 font-mono">semantic-search.skill.ts</span>
              </div>
              <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto">
                <code className="text-gray-300">
                  {codeExample.split("\n").map((line, i) => {
                    // Simple syntax highlighting
                    const highlighted = line
                      .replace(/(import|export|default|async|return|const|await)/g, '<span class="text-purple-400">$1</span>')
                      .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
                      .replace(/(\/\/.*)/g, '<span class="text-gray-600">$1</span>')
                      .replace(/(defineSkill|embed|vectorSearch)/g, '<span class="text-blue-400">$1</span>')
                      .replace(/(\btrue\b|\bfalse\b|\bnumber\b|\bstring\b|\barray\b)/g, '<span class="text-yellow-400">$1</span>');
                    return (
                      <span key={i} dangerouslySetInnerHTML={{ __html: highlighted + "\n" }} />
                    );
                  })}
                </code>
              </pre>
            </div>

            {/* Glow under the code block */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-purple-600/15 blur-xl rounded-full" />
          </motion.div>
        </div>

        {/* SDK CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-purple px-8 py-4 rounded-2xl border border-purple-500/20">
            <span className="text-purple-400 font-mono text-sm">
              npm install @agentcore/skill-sdk
            </span>
            <div className="h-4 w-px bg-purple-500/30" />
            <a
              href="#"
              className="text-purple-300 hover:text-purple-200 text-sm font-semibold transition-colors flex items-center gap-1"
            >
              Read the Docs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}
