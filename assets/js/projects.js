function projectCard(project) {
  return `
    <article class="card">
      <h3>${project.name}</h3>
      <p class="sub">${project.role} | ${project.timeframe} | ${project.domain}</p>
      <p><strong>Problem:</strong> ${project.problem}</p>
      <p><strong>Solution:</strong> ${project.solution}</p>
      <p class="sub">Architecture</p>
      <ul class="list-clean">${project.architecture.map((item) => `<li>${item}</li>`).join("")}</ul>
      <p class="sub">Impact</p>
      <ul class="list-clean">${project.impact.map((item) => `<li>${item}</li>`).join("")}</ul>
      <div class="tag-list">${project.tech.map((tech) => `<span class="tag">${tech}</span>`).join("")}</div>
    </article>
  `;
}

async function renderProjects() {
  try {
    const [projects, profile] = await Promise.all([
      fetchJson("data/projects.json"),
      fetchJson("data/profile.json"),
    ]);

    const hero = document.getElementById("projects-hero");
    hero.innerHTML = `
      <h1>${profile.name}</h1>
      <p class="headline">Architecture Case Studies</p>
      <p class="summary">High-impact work across EV, energy, telecom, and distributed systems modernization.</p>
    `;

    const domains = [
      "All",
      ...new Set(projects.map((project) => project.domain)),
    ];
    const filters = document.getElementById("project-filters");
    const list = document.getElementById("project-list");

    let activeDomain = "All";

    function paintFilters() {
      filters.innerHTML = domains
        .map(
          (domain) =>
            `<button class="filter-btn ${activeDomain === domain ? "active" : ""}" data-domain="${domain}">${domain}</button>`,
        )
        .join("");
    }

    function paintList() {
      const filtered =
        activeDomain === "All"
          ? projects
          : projects.filter((project) => project.domain === activeDomain);
      list.innerHTML = filtered.map(projectCard).join("");
    }

    filters.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-domain]");
      if (!button) {
        return;
      }
      activeDomain = button.dataset.domain;
      paintFilters();
      paintList();
    });

    paintFilters();
    paintList();
  } catch (error) {
    showError(
      "projects-root",
      `Projects content could not be loaded. ${error.message}`,
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell("projects");
  renderProjects();
});
