async function renderSkillsPage() {
  try {
    const [skills, profile] = await Promise.all([
      fetchJson("data/skills.json"),
      fetchJson("data/profile.json"),
    ]);

    const hero = document.getElementById("skills-hero");
    hero.innerHTML = `
      <h1>${profile.name}</h1>
      <p class="headline">Core Capabilities</p>
      <p class="summary">A capability matrix spanning architecture, platform engineering, distributed systems, reliability, and leadership.</p>
    `;

    const host = document.getElementById("skills-grid");
    host.innerHTML = skills
      .map(
        (group) => `
        <article class="card">
          <h3>${group.category}</h3>
          <div class="tag-list">${group.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
        </article>
      `,
      )
      .join("");
  } catch (error) {
    showError(
      "skills-root",
      `Skills content could not be loaded. ${error.message}`,
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell("skills");
  renderSkillsPage();
});
