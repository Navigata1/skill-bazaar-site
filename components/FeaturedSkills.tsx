"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { FEATURED_SKILLS } from "@/lib/skills-data";

export default function FeaturedSkills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">Featured</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Skills That{" "}
            <span className="gradient-text">Define the Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hand-curated, production-tested capabilities powering the most
            sophisticated autonomous agent deployments on the market.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_SKILLS.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#categories"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Browse all 200+ skills
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
