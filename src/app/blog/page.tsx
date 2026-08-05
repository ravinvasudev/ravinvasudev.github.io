import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <section className="hero">
        <h1>Technical Writing and Architecture Notes</h1>
        <p className="hero-title">Blog Platform</p>
        <p className="hero-summary">
          This section is reserved for upcoming technical articles, architecture
          deep-dives, and platform engineering notes.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/">
            Back to Portfolio
          </Link>
          <a
            className="btn-outline"
            href="https://www.linkedin.com/in/ravinvasudev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on LinkedIn
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Planned Topics</h2>
        <div className="cards">
          <article className="card">
            <h3>Cloud Governance in CCoE</h3>
            <p className="sub">Architecture Governance</p>
            <p>
              Frameworks and operating models for enterprise cloud
              standardization.
            </p>
          </article>
          <article className="card">
            <h3>Platform Reliability Patterns</h3>
            <p className="sub">Observability and SRE</p>
            <p>
              Design approaches for telemetry, incident response, and resilient
              service operations.
            </p>
          </article>
          <article className="card">
            <h3>GitOps and DevSecOps at Scale</h3>
            <p className="sub">Delivery Excellence</p>
            <p>
              Practical rollout strategies for secure, repeatable, and
              high-velocity deployments.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
