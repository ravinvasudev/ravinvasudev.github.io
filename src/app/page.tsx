import Link from "next/link";

import { InteractiveHero } from "../components/sections/interactive-hero";
import { Tags } from "../components/ui/tags";
import {
    getAchievements,
    getExperience,
    getProfile,
    getProjects,
} from "../lib/content";
import { formatPeriod } from "../lib/date";

export default async function HomePage() {
  const [profile, achievements, projects, experience] = await Promise.all([
    getProfile(),
    getAchievements(),
    getProjects(),
    getExperience(),
  ]);

  const metrics = achievements
    .filter((item) => item.type !== "Award")
    .slice(0, 6);
  const heroMetrics = metrics
    .map((item) => ({
      id: item.id,
      title: item.title,
      value: item.value ?? item.title,
    }))
    .slice(0, 4);

  return (
    <>
      <InteractiveHero
        name={profile.name}
        title={profile.headline}
        summary={profile.summary[0]}
        location={`${profile.location.city}, ${profile.location.region}, ${profile.location.country}`}
        totalExperience={profile.totalExperience}
        industries={profile.industries}
        metrics={heroMetrics}
        actions={
          <>
            <a
              className="btn"
              href="/Ravin%20Vasudev%20-%20Master%20Resume.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.cta.primary}
            </a>
            <a
              className="btn-outline"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.cta.secondary}
            </a>
            <Link className="btn-outline" href="/blog">
              {profile.cta.tertiary}
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="section-head">
          <p className="kicker">Impact Overview</p>
          <h2>Impact Metrics</h2>
          <p className="section-copy">
            Outcomes delivered across platform modernization, cost optimization,
            reliability engineering, and enterprise cloud transformation.
          </p>
        </div>
        <div className="cards">
          {metrics.map((item) => (
            <article key={item.id} className="card metric-card">
              <p className="metric">{item.value ?? item.title}</p>
              <p className="sub">{item.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="kicker">Executive Narrative</p>
          <h2>Career Highlights</h2>
        </div>
        <article className="card">
          <ul className="list">
            {profile.careerHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="kicker">Architecture Delivery</p>
          <h2>Featured Projects</h2>
          <p className="section-copy">
            Representative engagements showing technical depth, system
            leadership, and measurable business impact.
          </p>
        </div>
        <div className="cards">
          {projects.slice(0, 3).map((project) => (
            <article key={project.id} className="card">
              <h3>{project.name}</h3>
              <p className="sub">
                {project.role} | {project.domain}
              </p>
              <p>{project.problem}</p>
              <p>
                <strong>Solution:</strong> {project.solution}
              </p>
              <ul className="list">
                {project.impact.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
              <Tags items={project.tech.slice(0, 8)} />
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="kicker">Leadership Timeline</p>
          <h2>Experience Snapshot</h2>
        </div>
        <div className="cards">
          {experience.slice(0, 4).map((role) => (
            <article
              key={role.id}
              className={`card ${role.isCurrent ? "current" : ""}`}
            >
              <h3>{role.title}</h3>
              <p className="sub">
                {role.company} | {formatPeriod(role.startDate, role.endDate)}
              </p>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
