import { Hero } from "../../components/sections/hero";
import { getAchievements, getEducation, getProfile } from "../../lib/content";

export default async function AboutPage() {
  const [profile, achievements, education] = await Promise.all([
    getProfile(),
    getAchievements(),
    getEducation(),
  ]);

  const awards = achievements.filter((item) => item.type === "Award");

  return (
    <>
      <Hero
        name={profile.name}
        title="About and Leadership Profile"
        summary={profile.summary.join(" ")}
        meta={`${profile.location.city}, ${profile.location.region}, ${profile.location.country}`}
      />

      <section className="section">
        <h2>Career Highlights</h2>
        <article className="card">
          <ul className="list">
            {profile.careerHighlights.slice(0, 6).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <h2>Awards</h2>
        <div className="cards">
          {awards.map((award) => (
            <article key={award.id} className="card">
              <h3>{award.title}</h3>
              <p className="sub">
                {award.organization} | {award.timeframe}
              </p>
              <p>{award.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="cards">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.institution}`}
              className="card"
            >
              <h3>{item.degree}</h3>
              <p className="sub">
                {item.institution}, {item.location}
                {item.graduationYear ? ` | ${item.graduationYear}` : ""}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Connect</h2>
        <div className="cta-row">
          <a className="btn" href={`mailto:${profile.contact.email}`}>
            Email
          </a>
          <a
            className="btn-outline"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
