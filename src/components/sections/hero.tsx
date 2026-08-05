"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Linkedin, Notebook } from "lucide-react";

import { impactMetrics } from "../../data/experience";
import { profile } from "../../data/profile";
import { ButtonLink } from "../ui/button-link";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const stackLayers = [
  { label: "Governance", detail: "CCoE : Policy as Code : FinOps" },
  { label: "Platform", detail: "EKS : ArgoCD : Helm" },
  { label: "Infrastructure", detail: "AWS : Terraform : OpenTofu" },
  { label: "Services", detail: "Java : Spring Boot : Kafka" },
];

export function Hero() {
  const headlineMetrics = impactMetrics.slice(0, 3);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-hairline"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.18),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(212,175,55,0.1),transparent_40%)]"
      />

      <div className="shell relative grid gap-12 py-16 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:py-24">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p variants={item} className="kicker">
            {profile.title}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/90 sm:text-xl"
          >
            {profile.positioningStatement}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
          >
            {profile.recruiterSummary}
          </motion.p>

          <motion.dl
            variants={item}
            className="mt-8 grid grid-cols-3 gap-4 border-y border-hairline py-5"
          >
            {headlineMetrics.map((metric) => (
              <div key={metric.id}>
                <dt className="sr-only">{metric.label}</dt>
                <dd className="metric-value text-2xl sm:text-3xl">
                  {metric.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resumeUrl} external>
              <Download size={16} />
              Download Resume
            </ButtonLink>
            <ButtonLink href={profile.socials.linkedin} variant="outline">
              <Linkedin size={16} />
              Connect on LinkedIn
            </ButtonLink>
            <ButtonLink href="/blog" variant="ghost">
              <Notebook size={16} />
              Explore Technical Articles
            </ButtonLink>
          </motion.div>

          <motion.a
            variants={item}
            href="#impact"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
          >
            <ArrowDown size={14} />
            Scroll for measured impact
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="surface-card p-6"
          aria-label="Architecture stack overview"
        >
          <p className="kicker">System Layers</p>
          <div className="mt-5 space-y-3">
            {stackLayers.map((layer, index) => (
              <motion.div
                key={layer.label}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-hairline bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-heading text-sm font-semibold">
                    {layer.label}
                  </p>
                  <span className="font-mono text-[11px] text-gold">
                    L{stackLayers.length - index}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">
                  {layer.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {profile.industries.map((industry) => (
              <span key={industry} className="chip">
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
