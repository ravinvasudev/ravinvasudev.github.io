function renderMetrics(metrics) {
  if (!metrics || metrics.length === 0) {
    return "";
  }
  return `<div class="tag-list">${metrics
    .map(
      (metric) => `<span class="tag">${metric.label}: ${metric.value}</span>`,
    )
    .join("")}</div>`;
}

async function renderExperiencePage() {
  try {
    const [experience, profile] = await Promise.all([
      fetchJson("data/experience.json"),
      fetchJson("data/profile.json"),
    ]);

    const hero = document.getElementById("experience-hero");
    hero.innerHTML = `
      <h1>${profile.name}</h1>
      <p class="headline">Professional Experience</p>
      <p class="summary">Leadership progression from software engineering to principal-level cloud and platform architecture.</p>
    `;

    const timeline = document.getElementById("experience-list");
    timeline.innerHTML = experience
      .map(
        (role) => `
        <article class="card ${role.isCurrent ? "current" : ""}">
          <h3>${role.title}</h3>
          <p class="sub">${role.company} | ${role.location} | ${formatRoleDate(role.startDate, role.endDate)}</p>
          <p>${role.summary}</p>
          <ul class="list-clean">${role.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
          ${renderMetrics(role.metrics)}
          <div class="tag-list">${role.tech.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
        </article>
      `,
      )
      .join("");
  } catch (error) {
    showError(
      "experience-root",
      `Experience content could not be loaded. ${error.message}`,
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell("experience");
  renderExperiencePage();
});
