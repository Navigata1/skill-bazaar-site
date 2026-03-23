"use client";

import { motion } from "framer-motion";
import { type Skill } from "@/lib/skills-data";

const categoryColors: Record<string, string> = {
  search: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  memory: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  code: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  browser: "text-green-400 bg-green-500/10 border-green-500/20",
  data: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  communication: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  vision: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  reasoning: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  audio: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  infrastructure: "text-gray-400 bg-gray-500/10 border-gray-500/20",
};

const categoryIcons: Record<string, string> = {
  search: "🔍",
  memory: "🧠",
  code: "⚡",
  browser: "🌐",
  data: "📊",
  communication: "📡",
  vision: "👁",
  reasoning: "🎯",
  audio: "🎙",
  infrastructure: "⚙️",
};

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export default function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const catColor = categoryColors[skill.category] ?? "text-purple-400 bg-purple-500/10 border-purple-500/20";
  const catIcon = categoryIcons[skill.category] ?? "⬡";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-6 cursor-pointer"
      style={{
        background: "rgba(15, 15, 25, 0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(139, 92, 246, 0.12)",
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.1)" }} />

      {/* Header badges */}
      <div className="flex items-start justify-between mb-4 relative">
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${catColor}`}>
          <span>{catIcon}</span>
          <span className="capitalize">{skill.category}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {skill.new && (
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              NEW
            </span>
          )}
          {skill.verified && (
            <span className="text-purple-400" title="Verified Publisher">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors relative">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 relative line-clamp-3">
        {skill.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 relative">
        {skill.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded-md border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between relative pt-3 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-600 font-mono">v{skill.version}</span>
          <span className="text-xs text-gray-600">by {skill.author}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs text-gray-400 font-medium">{skill.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-xs text-gray-500">{skill.installs}</span>
          </div>
        </div>
      </div>

      {/* Install button — appears on hover */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
        <button className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors">
          Install
        </button>
      </div>
    </motion.div>
  );
}
