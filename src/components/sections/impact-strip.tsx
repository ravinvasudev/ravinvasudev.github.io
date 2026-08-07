import { impactMetrics } from "../../data/experience";
import { Reveal } from "../ui/reveal";

export function ImpactStrip() {
  if (impactMetrics.length === 0) {
    return null;
  }

  return (
    <section id="impact" className="border-b border-hairline py-24">
      <div className="shell">
        <p className="kicker">Enterprise Impact</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
          Results, not words
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {impactMetrics.map((metric, index) => (
            <li key={metric.id} className="self-stretch">
              <Reveal delay={index * 0.05} className="h-full">
                <article className="surface-card h-full p-5">
                  <p className="metric-value text-3xl">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold text-ink">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {metric.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
