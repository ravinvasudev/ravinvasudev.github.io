const SITE_NAV = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "Projects", href: "projects.html", key: "projects" },
  { label: "Experience", href: "experience.html", key: "experience" },
  { label: "Skills", href: "skills.html", key: "skills" },
  { label: "About", href: "about.html", key: "about" },
  { label: "Blog", href: "blog.html", key: "blog" },
];

function formatMonth(dateText) {
  if (!dateText) {
    return "Present";
  }
  const [year, month] = dateText.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function formatRoleDate(startDate, endDate) {
  return `${formatMonth(startDate)} - ${formatMonth(endDate)}`;
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}. Status ${response.status}`);
  }
  return response.json();
}

function renderShell(pageKey) {
  const nav = document.getElementById("site-nav");
  const year = document.getElementById("year");

  if (nav) {
    nav.innerHTML = SITE_NAV.map((item) => {
      const activeClass = item.key === pageKey ? "active" : "";
      return `<a class="${activeClass}" href="${item.href}">${item.label}</a>`;
    }).join("");
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function showError(containerId, message) {
  const host = document.getElementById(containerId);
  if (!host) {
    return;
  }
  host.innerHTML = `<div class="error-box">${message}</div>`;
}
