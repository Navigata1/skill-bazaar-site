"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Install",
    subtitle: "One command. Zero friction.",
    description:
      "Browse the Bazaar, find the capability your agent needs, and install it in a single operation. Skills are containerized, versioned, and cryptographically signed.",
    icon: "⬇️",
    code: `agentcore skills install web-search-pro@3.2.1\n✓ Verified signature\n✓ Dependencies resolved\n✓ Skill ready`,
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/20",
  },
  {
    step: "02",
    title: "Compose",
    subtitle: "Skills that talk to each other.",
    description:
      "Chain skills into multi-step capability pipelines. Skill Bazaar's composability protocol ensures any skill can interface with any other through a standardized I/O contract.",
    icon: "🔗",
    code: `agentcore compose \\n  --skills web-search,memory-graph \\n  --output researcher-agent\n✓ Composition validated`,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/20",
  },
  {
    step: "03",
    title: "Deploy",
    subtitle: "Ship with confidence.",
    description:
      "Package your composed agent and deploy across any runtime — cloud, edge, or on-device. Full observability, skill versioning, and rollback built in from day one.",
    icon: "🚀",
    code: `agentcore deploy researcher-agent \\n  --runtime cloud --region us-east\n✓ Agent deployed\n◉ Endpoint live: agent.idc.run`,
    color: "from-violet-500/20 to-purple-600/20",
    borderColor: "border-violet-500/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-violet-700/5 blur-[100px] -translate-y-1/2" />
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
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">How It Works</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            From Skill to{" "}
            <span className="gradient-text">Deployed Agent</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The Skill Bazaar pipeline reduces agent capability development from weeks
            to minutes. Three steps. No friction. No boilerplate.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-purple-500/40 via-violet-500/40 to-purple-500/40 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative z-10"
            >
              <div
                className={`rounded-2xl p-6 h-full border ${step.borderColor}`}
                style={{ background: "rgba(15, 15, 25, 0.8)" }}
              >
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl border ${step.borderColor}`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-purple-500 mb-0.5">STEP {step.step}</div>
                    <h3 className="text-white font-black text-xl">{step.title}</h3>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-purple-300 font-semibold text-sm mb-3">{step.subtitle}</p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Code block */}
                <div className="rounded-xl bg-black/60 border border-white/5 p-4 font-mono text-xs text-green-400 leading-relaxed whitespace-pre-wrap">
                  {step.code.split("\\n").join("\n")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
