import { Award, GraduationCap } from "lucide-react";

import { achievements, education } from "../../data/credentials";
import { profile } from "../../data/profile";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function About() {
  return (
    <section id="about" className="border-b border-hairline py-24">
      <div className="shell">
        <SectionHeading
          kicker="Professional Story"
          title="From engineer to enterprise architect"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="surface-card p-6">
            <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              {profile.narrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-8 text-base font-bold text-ink">
              Leadership philosophy
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.leadershipPhilosophy.map((principle) => (
                <li
                  key={principle}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                  />
                  {principle}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="space-y-6">
            {achievements.length > 0 ? (
              <Reveal delay={0.06} className="surface-card p-6">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-gold" />
                  <h3 className="text-base font-bold">Recognition</h3>
                </div>
                <ul className="mt-4 space-y-4">
                  {achievements.map((achievement) => (
                    <li key={achievement.id}>
                      <p className="text-sm font-semibold text-ink">
                        {achievement.title}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                        {achievement.organization} : {achievement.timeframe}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">
                        {achievement.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {education.length > 0 ? (
              <Reveal delay={0.12} className="surface-card p-6">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-cobalt-soft" />
                  <h3 className="text-base font-bold">Education</h3>
                </div>
                <ul className="mt-4 space-y-4">
                  {education.map((entry) => (
                    <li key={entry.id}>
                      <p className="text-sm font-semibold text-ink">
                        {entry.degree}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {entry.institution} : {entry.location} :{" "}
                        {entry.graduationYear}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
