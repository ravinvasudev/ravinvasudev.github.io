async function renderAboutPage() {
  try {
    const [profile, education, achievements] = await Promise.all([
      fetchJson("data/profile.json"),
      fetchJson("data/education.json"),
      fetchJson("data/achievements.json"),
    ]);

    const hero = document.getElementById("about-hero");
    hero.innerHTML = `
      <h1>${profile.name}</h1>
      <p class="headline">About and Leadership Profile</p>
      <p class="summary">${profile.summary.join(" ")}</p>
      <div class="hero-meta">${profile.location.city}, ${profile.location.region}, ${profile.location.country}</div>
    `;

    const highlights = document.getElementById("about-highlights");
    highlights.innerHTML = `<ul class="list-clean">${profile.careerHighlights
      .slice(0, 6)
      .map((line) => `<li>${line}</li>`)
      .join("")}</ul>`;

    const awards = achievements.filter((item) => item.type === "Award");
    const awardsHost = document.getElementById("about-awards");
    awardsHost.innerHTML = awards
      .map(
        (award) => `
      <article class="card">
        <h3>${award.title}</h3>
        <p class="sub">${award.organization} | ${award.timeframe}</p>
        <p>${award.description}</p>
      </article>
    `,
      )
      .join("");

    const educationHost = document.getElementById("about-education");
    educationHost.innerHTML = education
      .map((item) => {
        const year = item.graduationYear ? ` | ${item.graduationYear}` : "";
        return `<article class="card"><h3>${item.degree}</h3><p class="sub">${item.institution}, ${item.location}${year}</p></article>`;
      })
      .join("");

    const contact = document.getElementById("about-contact");
    contact.innerHTML = `
      <a class="btn" href="mailto:${profile.contact.email}">Email</a>
      <a class="btn-ghost" href="${profile.contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    `;
  } catch (error) {
    showError(
      "about-root",
      `About content could not be loaded. ${error.message}`,
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderShell("about");
  renderAboutPage();
});
