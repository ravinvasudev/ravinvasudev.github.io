import { Hero } from "../../components/sections/hero";
import { Tags } from "../../components/ui/tags";
import { getExperience, getProfile } from "../../lib/content";
import { formatPeriod } from "../../lib/date";

export default async function ExperiencePage() {
  const [profile, experience] = await Promise.all([
    getProfile(),
    getExperience(),
  ]);

  return (
    <>
      <Hero
        name={profile.name}
        title="Professional Experience"
        summary="Leadership progression from software engineering to principal-level cloud and platform architecture."
      />

      <section className="section">
        <h2>Timeline</h2>
        <div className="cards">
          {experience.map((role) => (
            <article
              key={role.id}
              className={`card ${role.isCurrent ? "current" : ""}`}
            >
              <h3>{role.title}</h3>
              <p className="sub">
                {role.company} | {role.location} |{" "}
                {formatPeriod(role.startDate, role.endDate)}
              </p>
              <p>{role.summary}</p>
              <ul className="list">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {role.metrics.length > 0 ? (
                <div className="tag-list">
                  {role.metrics.map((metric) => (
                    <span
                      key={`${metric.label}-${metric.value}`}
                      className="tag"
                    >
                      {metric.label}: {metric.value}
                    </span>
                  ))}
                </div>
              ) : null}
              <Tags items={role.tech} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
