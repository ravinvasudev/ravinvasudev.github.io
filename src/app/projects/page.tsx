import { Hero } from "../../components/sections/hero";
import { Tags } from "../../components/ui/tags";
import { getProfile, getProjects } from "../../lib/content";

export default async function ProjectsPage() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()]);

  return (
    <>
      <Hero
        name={profile.name}
        title="Architecture Case Studies"
        summary="High-impact work across EV, energy, telecom, and distributed systems modernization."
      />

      <section className="section">
        <h2>Projects</h2>
        <div className="cards">
          {projects.map((project) => (
            <article key={project.id} className="card">
              <h3>{project.name}</h3>
              <p className="sub">
                {project.role} | {project.timeframe} | {project.domain}
              </p>
              <p>
                <strong>Problem:</strong> {project.problem}
              </p>
              <p>
                <strong>Solution:</strong> {project.solution}
              </p>
              <p className="sub">Architecture</p>
              <ul className="list">
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="sub">Impact</p>
              <ul className="list">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Tags items={project.tech} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
