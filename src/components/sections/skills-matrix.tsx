"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { skills } from "../../data/skills";
import { cn } from "../../lib/cn";
import { SectionHeading } from "../ui/section-heading";

const ALL = "all";

export function SkillsMatrix() {
  const [activeId, setActiveId] = useState<string>(ALL);

  if (skills.length === 0) {
    return null;
  }

  const visible =
    activeId === ALL
      ? skills
      : skills.filter((category) => category.id === activeId);

  return (
    <section id="skills" className="border-b border-hairline py-16">
      <div className="shell">
        <SectionHeading
          kicker="Capability Matrix"
          title="Depth across the full delivery stack"
          description="Filter by discipline to see the platforms, languages and governance practices behind the architecture work."
        />

        <div
          role="tablist"
          aria-label="Skill categories"
          className="mt-8 flex flex-wrap gap-2"
        >
          {[{ id: ALL, category: "All disciplines" }, ...skills].map(
            (category) => {
              const selected = activeId === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(category.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                    selected
                      ? "border-cobalt bg-cobalt/15 text-ink"
                      : "border-hairline text-muted hover:border-cobalt/40 hover:text-ink",
                  )}
                >
                  {category.category}
                </button>
              );
            },
          )}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((category) => (
            <motion.article
              key={category.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="surface-card p-5"
            >
              <h3 className="text-base font-bold">{category.category}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {category.focus}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
