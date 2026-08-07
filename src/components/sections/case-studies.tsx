"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { projects } from "../../data/projects";
import { cn } from "../../lib/cn";
import { BadgeList } from "../ui/badge-list";
import { SectionHeading } from "../ui/section-heading";

export function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(
    projects[0]?.id ?? null,
  );

  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="border-b border-hairline py-24">
      <div className="shell">
        <SectionHeading
          kicker="Architecture Case Studies"
          title="Systems designed, delivered and measured"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            const expanded = expandedId === project.id;

            return (
              <motion.article
                key={project.id}
                layout
                className={cn(
                  "surface-card flex flex-col p-6 transition-colors",
                  expanded ? "border-cobalt/40" : "hover:border-cobalt/25",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                      {project.domain} : {project.timeframe}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.role}</p>
                  </div>
                  {/* {project.featured ? (
                    <span className="chip border-gold/40 text-gold">
                      Featured
                    </span>
                  ) : null} */}
                </div>

                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="kicker">Problem</dt>
                    <dd className="mt-1.5 text-muted">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="kicker">Solution</dt>
                    <dd className="mt-1.5 text-muted">{project.solution}</dd>
                  </div>
                  {project.impact.length > 0 ? (
                    <div>
                      <dt className="kicker">Impact</dt>
                      <dd>
                        <ul className="mt-1.5 space-y-1.5">
                          {project.impact.map((entry) => (
                            <li
                              key={entry}
                              className="flex gap-2 text-sm text-ink/90"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                              />
                              {entry}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <BadgeList
                  items={project.techStack}
                  className="mt-5"
                  tone="accent"
                />

                {project.architecture.length > 0 ? (
                  <>
                    <AnimatePresence initial={false}>
                      <motion.ul
                        id={`${project.id}-architecture`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="mt-4 space-y-2 overflow-hidden"
                      >
                        {project.architecture.map((layer) => (
                          <li
                            key={layer}
                            className="rounded-lg border border-hairline bg-white/[0.03] px-3 py-2 font-mono text-[12px] text-muted"
                          >
                            {layer}
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  </>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
