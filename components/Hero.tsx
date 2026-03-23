"use client";

import { motion } from "framer-motion";

const floatingSkills = [
  { label: "web-search", x: "10%", y: "20%", delay: 0 },
  { label: "code-exec", x: "80%", y: "15%", delay: 0.5 },
  { label: "memory-graph", x: "5%", y: "65%", delay: 1 },
  { label: "file-system", x: "85%", y: "60%", delay: 0.3 },
  { label: "api-router", x: "50%", y: "85%", delay: 0.8 },
  { label: "llm-compose", x: "25%", y: "78%", delay: 1.2 },
  { label: "voice-output", x: "70%", y: "80%", delay: 0.6 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/8 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/6 blur-[80px]" />
      </div>

      {/* Floating skill chips */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSkills.map((skill) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.6, 0.6, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 8,
              delay: skill.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ left: skill.x, top: skill.y }}
          >
            <div className="glass px-3 py-1.5 rounded-full text-xs font-mono text-purple-300 border-purple-500/20 whitespace-nowrap">
              <span className="text-purple-500 mr-1">⬡</span>
              {skill.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="glass-purple px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-lg">🧠</span>
            <span className="text-purple-300 text-sm font-medium tracking-wide">
              AgentCore — Agent Infrastructure
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.95]"
        >
          <span className="text-white">The Marketplace</span>
          <br />
          <span className="gradient-text text-glow">for Agent Skills</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Browse, install, and compose precision-engineered capabilities
          for autonomous agents. The operating layer for the agent economy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-gray-600 mb-12"
        >
          By{" "}
          <a href="https://idc.dev" className="text-purple-400 hover:text-purple-300 transition-colors">
            Island Development Crew LLC
          </a>
          {" "}— Engineering the foundational layer for intelligent systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#skills"
            className="group relative px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore the Bazaar
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#list-skills"
            className="px-8 py-4 rounded-xl glass border border-purple-500/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10"
          >
            List Your Skills →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: "200+", label: "Skills Available" },
            { value: "18", label: "Categories" },
            { value: "∞", label: "Composability" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
