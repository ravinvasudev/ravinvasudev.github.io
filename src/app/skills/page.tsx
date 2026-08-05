import { Hero } from "../../components/sections/hero";
import { Tags } from "../../components/ui/tags";
import { getProfile, getSkills } from "../../lib/content";

export default async function SkillsPage() {
  const [profile, skills] = await Promise.all([getProfile(), getSkills()]);

  return (
    <>
      <Hero
        name={profile.name}
        title="Core Capabilities"
        summary="A capability matrix spanning architecture, platform engineering, distributed systems, reliability, and leadership."
      />

      <section className="section">
        <h2>Skills Matrix</h2>
        <div className="cards">
          {skills.map((group) => (
            <article key={group.category} className="card">
              <h3>{group.category}</h3>
              <Tags items={group.skills} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
