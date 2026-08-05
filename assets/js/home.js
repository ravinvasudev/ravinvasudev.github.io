async function renderHome() {
  try {
    const [profile, projects, experience, achievements] = await Promise.all([
      fetchJson("data/profile.json"),
      fetchJson("data/projects.json"),
      fetchJson("data/experience.json"),
      fetchJson("data/achievements.json"),
    ]);

    const hero = document.getElementById("hero");
    hero.innerHTML = `
      <h1>${profile.name}</h1>
      <p class="headline">${profile.headline}</p>
      <p class="summary">${profile.summary[0]}</p>
      <p class="hero-meta">${profile.location.city}, ${profile.location.region}, ${profile.location.country} | ${profile.totalExperience}</p>
      <div class="cta-row">
        <a class="btn" href="Ravin%20Vasudev%20-%20Master%20Resume.md" target="_blank" rel="noopener">${profile.cta.primary}</a>
        <a class="btn-ghost" href="${profile.contact.linkedin}" target="_blank" rel="noopener">${profile.cta.secondary}</a>
        <a class="btn-ghost" href="blog.html">${profile.cta.tertiary}</a>
      </div>
    `;

    const metricItems = achievements
      .filter((item) => item.type !== "Award")
      .slice(0, 6);
    const metrics = document.getElementById("metrics");
    metrics.innerHTML = metricItems
      .map(
        (item) => `
        <article class="card">
          <div class="metric-value">${item.value || item.title}</div>
          <div class="metric-title">${item.title}</div>
        </article>
      `,
      )
      .join("");

    const highlights = document.getElementById("highlights");
    highlights.innerHTML = `<ul class="list-clean">${profile.careerHighlights
      .map((line) => `<li>${line}</li>`)
      .join("")}</ul>`;

    const featuredProjects = document.getElementById("featured-projects");
    featuredProjects.innerHTML = projects
      .slice(0, 3)
      .map(
        (project) => `
        <article class="card">
          <h3>${project.name}</h3>
          <p class="sub">${project.role} | ${project.domain}</p>
          <p>${project.problem}</p>
          <p><strong>Solution:</strong> ${project.solution}</p>
          <ul class="list-clean">${project.impact.map((impact) => `<li>${impact}</li>`).join("")}</ul>
          <div class="tag-list">${project.tech
            .slice(0, 8)
            .map((tech) => `<span class="tag">${tech}</span>`)
            .join("")}</div>
        </article>
      `,
      )
      .join("");

    const timeline = document.getElementById("timeline");
    timeline.innerHTML = experience
      .slice(0, 4)
      .map(
        (role) => `
        <article class="card ${role.isCurrent ? "current" : ""}">
          <h3>${role.title}</h3>
          <p class="sub">${role.company} | ${formatRoleDate(role.startDate, role.endDate)}</p>
          <p>${role.summary}</p>
        </article>
      `,
      )
      .join("");
  } catch (error) {
    showError("home-root", `Content could not be loaded. ${error.message}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell("home");
  renderHome();
});
