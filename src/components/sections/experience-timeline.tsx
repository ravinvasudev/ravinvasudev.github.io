import { experience } from "../../data/experience";
import { cn } from "../../lib/cn";
import { formatPeriod } from "../../lib/date";
import { BadgeList } from "../ui/badge-list";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ExperienceTimeline() {
  if (experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="border-b border-hairline py-16">
      <div className="shell">
        <SectionHeading
          kicker="Career Trajectory"
          title="From core software engineering to cloud architecture leadership"
          description="A continuous progression across electric vehicle, energy, telecommunications and financial services platforms."
        />

        <ol className="mt-10 space-y-5">
          {experience.map((role, index) => (
            <li key={role.id}>
              <Reveal delay={Math.min(index * 0.04, 0.2)}>
                <article
                  className={cn(
                    "surface-card relative p-6 pl-7",
                    role.isCurrent && "border-cobalt/50 shadow-glow",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-0 top-6 h-[calc(100%-3rem)] w-0.5 rounded-full",
                      role.isCurrent ? "bg-cobalt" : "bg-hairline",
                    )}
                  />

                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-bold">{role.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      {formatPeriod(role.startDate, role.endDate)}
                    </p>
                  </div>

                  <p className="mt-1 text-sm text-cobalt-soft">
                    {role.company} : {role.location}
                    {role.isCurrent ? " : Current" : ""}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {role.coreFocus}
                  </p>

                  {role.metrics.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {role.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[11px] text-gold"
                        >
                          {metric}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {role.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-relaxed text-ink/85"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cobalt-soft"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <BadgeList items={role.techStack} className="mt-5" />
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
