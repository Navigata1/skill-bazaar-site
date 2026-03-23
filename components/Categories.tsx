"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/skills-data";

export default function Categories() {
  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
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
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">Categories</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Every Capability,{" "}
            <span className="gradient-text">Precisely Organized</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            18 skill categories spanning the full spectrum of autonomous agent
            capabilities — from retrieval to reasoning to real-world action.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="group relative rounded-2xl p-5 cursor-pointer overflow-hidden"
              style={{
                background: "rgba(15, 15, 25, 0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(139, 92, 246, 0.1)",
              }}
            >
              {/* Hover bg */}
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300 rounded-2xl" />

              {/* Icon */}
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {cat.icon}
              </div>

              {/* Label + count */}
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-white font-bold text-sm leading-tight">
                  {cat.label}
                </h3>
                <span className="text-purple-400 font-mono text-xs font-bold ml-2 flex-shrink-0">
                  {cat.count}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs leading-relaxed">
                {cat.description}
              </p>

              {/* Arrow on hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}
