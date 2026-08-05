"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Cloud, Cpu, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

interface HeroMetric {
  id: string;
  title: string;
  value: string;
}

interface InteractiveHeroProps {
  name: string;
  title: string;
  summary: string;
  location: string;
  totalExperience: string;
  industries: string[];
  metrics: HeroMetric[];
  actions?: ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export function InteractiveHero({
  name,
  title,
  summary,
  location,
  totalExperience,
  industries,
  metrics,
  actions,
}: InteractiveHeroProps) {
  return (
    <section className="hero relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="hero-accent-orb pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full"
        style={{ background: "rgba(15, 118, 110, 0.2)", filter: "blur(52px)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.34, 0.6, 0.34] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-accent-orb pointer-events-none absolute -right-14 top-20 h-72 w-72 rounded-full"
        style={{ background: "rgba(180, 83, 9, 0.18)", filter: "blur(52px)" }}
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-grid relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-main"
        >
          <motion.p
            variants={itemVariants}
            className="kicker mb-3 inline-flex items-center rounded-full border px-3 py-1"
            style={{ borderColor: "rgba(180, 83, 9, 0.35)", color: "#92400e" }}
          >
            <ShieldCheck size={14} className="mr-2" />
            Enterprise Architecture Leadership
          </motion.p>

          <motion.h1 variants={itemVariants}>{name}</motion.h1>

          <motion.p
            variants={itemVariants}
            className="hero-title text-lg md:text-xl"
          >
            {title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="hero-summary max-w-3xl text-base md:text-lg"
          >
            {summary}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="hero-meta text-sm md:text-base"
          >
            {location} | {totalExperience}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-2"
          >
            {industries.map((industry) => (
              <span
                key={industry}
                className="tag"
                style={{ fontSize: "0.72rem", padding: "0.25rem 0.62rem" }}
              >
                {industry}
              </span>
            ))}
          </motion.div>

          {actions ? (
            <motion.div variants={itemVariants} className="cta-row mt-6">
              {actions}
            </motion.div>
          ) : null}
        </motion.div>

        <motion.aside
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-rail"
        >
          <motion.div
            variants={itemVariants}
            className="mb-1 flex items-center justify-between"
          >
            <p className="rail-head">Executive Snapshot</p>
            <ArrowUpRight size={15} style={{ color: "var(--accent2)" }} />
          </motion.div>

          <div className="rail-grid">
            {metrics.slice(0, 4).map((metric) => (
              <motion.article
                key={metric.id}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="rail-item"
              >
                <p className="rail-value">{metric.value}</p>
                <p className="rail-label">{metric.title}</p>
              </motion.article>
            ))}
          </div>

          <motion.div variants={itemVariants} className="hero-capabilities">
            <div className="capability">
              <Cloud
                className="mx-auto"
                style={{ color: "var(--accent2)" }}
                size={16}
              />
              <p>Cloud</p>
            </div>
            <div className="capability">
              <Cpu
                className="mx-auto"
                style={{ color: "var(--accent2)" }}
                size={16}
              />
              <p>Platform</p>
            </div>
            <div className="capability">
              <Building2
                className="mx-auto"
                style={{ color: "var(--accent2)" }}
                size={16}
              />
              <p>Scale</p>
            </div>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
