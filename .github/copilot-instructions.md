# GitHub Copilot Custom Instructions: Portfolio Website

## 1. Executive Summary & Goal

This project is the complete redesign and modern rebuild of Ravin Vasudev's professional portfolio and technical platform (ravinvasudev.com & blog.ravinvasudev.com).

- **Primary Goal**: Create a slick, modern, highly interactive, fast, and responsive portfolio highlighting 19+ years of experience in Enterprise Software Development, Cloud Architecture, Systems Architecture, and Cloud Center of Excellence (CCoE) leadership. Serve as the authoritative focal point of Ravin's career for hiring managers, recruiters, and prospective leaders.
- **Key Objective**: Maintain strict separation between UI components and professional content so that updating career records, projects, and skills in the future requires modifying only structured data files without altering component logic.
- **Recruiter & Executive Focus**: Highlight high-impact achievements, measurable metrics, downloadable resources, quick contact CTAs, and technical architecture case studies.
- **Content & Blog Platform**: Architecture must support a high-volume blog (`blog.ravinvasudev.com` or `/blog` route) to regularly publish technical articles, thoughts, and industry insights.
- **Future-Proof Maintenance**: Maintain a strict boundary between UI components, career data, and editorial posts so that updating work history or publishing new articles requires editing data/content files only without modifying component code.

---

## 2. Core Tech Stack

These are the versions actually installed. Do not introduce alternatives without an explicit request.

- **Framework**: Next.js 14 (App Router, React Server Components by default)
- **Language**: TypeScript 5.9 (strict mode, `noEmit`)
- **Styling**: Tailwind CSS 3.4 with the `@tailwindcss/typography` plugin for MDX article styling
- **Class Composition**: `clsx` + `tailwind-merge`, wrapped by the `cn` helper in `src/lib/cn.ts`
- **Animations**: Framer Motion (hero entry, card layout transitions, scroll reveals)
- **Icons**: Lucide React (`lucide-react`)
- **Content Engine**: Local `.mdx` files parsed with `gray-matter` and rendered with `next-mdx-remote/rsc`. Contentlayer is not used.
- **Syndication & Social Automation**:
  - Dynamic RSS 2.0 feed at `src/app/feed.xml/route.ts` (includes `dc:creator`, `atom:link` self reference, and per-post `category` entries) for webhook-driven cross-posting via Zapier, Make, or n8n.
  - Dynamic OpenGraph image at `src/app/opengraph-image.tsx` using the built-in `next/og` `ImageResponse`. This route runs on the edge runtime because `@vercel/og` fails to resolve its bundled font path during Windows prerendering.
  - Structured JSON-LD: `Person` schema in the root layout, `BlogPosting` schema on each article page.
- **Analytics & SEO**: Next.js Metadata API with `metadataBase`, title templates, canonical URLs, dynamic `sitemap.ts`, and `robots.ts`.
- **Deployment**: Vercel, custom domain `ravinvasudev.com`.
  - The repository still contains a `CNAME` file from the previous GitHub Pages site. The current build relies on server-rendered routes (the OpenGraph image), so a static export cannot serve the site as-is.
  - `blog.ravinvasudev.com` is not wired up yet. `/blog` is the canonical blog route today; a subdomain rewrite would need to be added before that hostname is used.

---

## 3. Project Architecture & Directory Structure

Always follow this directory layout when creating, extending, or refactoring files:

```text
├── src/
│   ├── app/                        # Next.js App Router routes
│   │   ├── layout.tsx              # Fonts, global metadata, Person JSON-LD, header/footer, skip link
│   │   ├── page.tsx                # Executive portfolio landing page (composes all sections)
│   │   ├── not-found.tsx           # 404 view
│   │   ├── opengraph-image.tsx     # Dynamic OG card (edge runtime)
│   │   ├── globals.css             # Tailwind layers + design tokens + component classes
│   │   ├── blog/
│   │   │   ├── page.tsx            # Article directory (server) delegating to the client filter UI
│   │   │   └── [slug]/page.tsx     # Article view: MDX render, share links, BlogPosting JSON-LD
│   │   ├── feed.xml/route.ts       # RSS 2.0 generator
│   │   ├── sitemap.ts              # Dynamic sitemap (static routes + every post)
│   │   └── robots.ts               # Crawler directives
│   ├── components/
│   │   ├── ui/                     # button-link, badge-list, section-heading, reveal
│   │   ├── layout/                 # site-header (mobile menu), site-footer
│   │   ├── sections/               # hero, impact-strip, case-studies, experience-timeline,
│   │   │                           # skills-matrix, latest-writing, about, contact-cta
│   │   └── blog/                   # post-directory (search + tag filter), share-links
│   ├── content/
│   │   └── posts/                  # `.mdx` articles with typed frontmatter
│   ├── data/                       # SINGLE SOURCE OF TRUTH
│   │   ├── profile.ts              # Bio, positioning, narrative, philosophy, socials, resume URL
│   │   ├── experience.ts           # Career history plus the exported `impactMetrics` array
│   │   ├── projects.ts             # Case studies plus the derived `featuredProjects` export
│   │   ├── skills.ts               # Categorized capability matrix
│   │   ├── credentials.ts          # Awards/recognition and education
│   │   └── site.ts                 # `siteConfig` (URLs, description) and `primaryNav`
│   ├── lib/                        # cn (class merge), date (period + post formatting), posts (MDX loader)
│   └── types/                      # Explicit interfaces for every data and content shape
└── public/                         # Static assets (downloadable resume, diagrams, banners)
```

The legacy root-level `data/*.json` files and the old jQuery `assets/` directory were removed during the rebuild. Do not reintroduce them.

---

## 4. Single Source of Truth Strategy (Content Maintainability)

To ensure easy maintenance going forward:

- **Never hardcode personal details or career experience inside React components.**
- **Career & Profile Data**: Store inside `src/data/*.ts` as typed `const` exports. Components must never hardcode company names, role dates, metrics, or bio text.
- **Navigation and site URLs** live in `src/data/site.ts`, not in the header or footer components.
- Types must be defined in `src/types/index.ts`. Current contracts: `Profile`, `SocialLinks`, `Metric`, `ExperienceItem`, `ProjectItem`, `SkillCategory`, `Achievement`, `EducationItem`, `PostFrontmatter`, `Post`, `PostWithContent`, `NavItem`.
- **Blog Posts**: Store inside `src/content/posts/` as `.mdx` or `.md` files. Every post must include typed frontmatter:
  - `title`: string
  - `publishedAt`: string (ISO date)
  - `summary`: string (used for social media posts and preview text)
  - `tags`: string[]
  - `canonicalUrl`: string
  - `featured`: boolean (to feature key articles directly on the portfolio homepage)

---

## 5. Recruiter UX & Professional Branding Guidelines

- **Design Aesthetic**: Minimalist, architectural executive dark theme. Reconciles the Novantis parent brand identity with corporate-level recruiter readability.
- **Design Tokens**: Use the semantic Tailwind color names defined in `tailwind.config.ts` rather than raw hex values.
  - `canvas` (#030712) page background, `surface` (#0A192F) and `surface-raised` (#0F2440) for layered cards
  - `ink` (#F9FAFB) primary text, `muted` (#9CA3AF) secondary text, `hairline` for all borders
  - `cobalt` / `cobalt-soft` for interactive accents and the current-role treatment
  - `gold` (#D4AF37) is reserved exclusively for metrics, numerical achievements, and elite badges. Never use it for body copy or standard buttons.
- **Shared component classes** live in the `@layer components` block of `src/app/globals.css`: `.shell`, `.surface-card`, `.kicker`, `.metric-value`, `.chip`. Reuse them instead of re-deriving the same utility stacks.
- **Typography**: `Space Grotesk` for headings (`font-heading`), `Inter` for body copy (`font-body`), `JetBrains Mono` for metrics and technical tokens (`font-mono`). All three are loaded via `next/font/google` in the root layout.
- **Micro-interactions**: Soft card scaling, clean viewport fading, and smooth internal scrolling using Framer Motion.
- **Formatting Rule**: Do not use em dashes in text, copy, or UI content. Use colons, hyphens, or parenthetical phrases instead.

* **Accessibility**: Standard semantic HTML tags (`<main>`, `<article>`, `<header>`), WCAG AA color contrast, and complete keyboard navigation.
* **Executive Call-to-Actions (CTAs)**: Include clear action buttons in the hero section ("Download Resume PDF", "Connect on LinkedIn", "Explore Technical Articles").
* **Impact-First Experience Section**: Structure work history around outcomes and metrics (e.g., cost savings, scalability benchmarks, infrastructure automation velocity) rather than simple task lists.

## 6. Social Syndication & Cross-Posting Support

- **Automated Social Publishing**: The dynamic RSS feed (`/feed.xml`) must publish valid RSS 2.0 XML containing complete post metadata, allowing external automation services (Zapier, Make, n8n) to detect new posts and share them automatically on LinkedIn.
- **LinkedIn Card Optimization**: Ensure dynamic meta tags (`og:title`, `og:description`, `og:image`, `og:url`) are set for every post so shared links appear formatted on social media.

---

## 7. Development Rules for Copilot

When generating, suggesting, or refactoring code, always adhere to these rules:

| Category                | Guidelines                                                                                                                                                       |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TypeScript**          | Always define explicit types or interfaces. Avoid `any`. Define props interfaces for every React component.                                                      |
| **Imports**             | No path aliases are configured. Use relative imports (`../../data/profile`). Do not add `baseUrl` or `paths` to `tsconfig.json`.                                 |
| **Routing**             | `experimental.typedRoutes` is intentionally disabled so navigation hrefs can stay data-driven strings in `src/data/site.ts`. Do not re-enable it.                |
| **Tailwind CSS**        | Use utility classes logically. Group layout, spacing, typography, and interactive classes cleanly. Use the `cn` helper from `src/lib/cn.ts` for dynamic classes. |
| **Next.js Components**  | Default to React Server Components (RSC). Add `'use client'` only when state, event handlers, or Framer Motion hooks are necessary.                              |
| **Defensive Rendering** | Sections and lists must return `null` or collapse when their source array is empty, so removing data never breaks a render.                                      |
| **Accessibility**       | Interactive filters need `aria-pressed`/`aria-selected`, expandable panels need `aria-expanded` and `aria-controls`, and icon-only controls need `aria-label`.   |
| **Performance**         | Use `next/image` for images with explicit dimensions and proper `alt` tags. Use `next/font` for web font optimization.                                           |
| **Code Quality**        | Write concise, self-documenting code. Keep components modular and focused on a single responsibility.                                                            |
| **Validation**          | Run `npm run typecheck`, `npm run lint`, and `npm run build` before considering a change done. Clear `.next/` first if stale route types cause phantom errors.   |

---

## 8. Profile Context for AI Code Generation

When writing placeholder content, component mocks, or resume summary code, use the following real profile background:

- **Name**: Ravin Vasudev
- **Current Title**: Cloud Architect (CCoE) | Systems Architect
- **Location**: Fredericton, New Brunswick, Canada
- **Experience Level**: 19+ years in Enterprise Software Engineering, System Architecture, and Cloud Infrastructure
- **Industries**: Electric Vehicle, Energy, Telecommunications, Financial Services
- **Specializations**: Cloud Center of Excellence (CCoE), AWS, Kubernetes (EKS), Terraform / OpenTofu (IaC), Microservices, CI/CD Pipelines (GitLab, GitHub Actions), Cost Optimization, High Availability Systems Design.
- **Tone**: Authoritative yet accessible, engineering-focused, structured, and modern.

Always read the live values from `src/data/profile.ts` rather than repeating them from this file.

---

## 9. Copilot Workflow Directives

- When asked to build a new section, first verify if corresponding types exist in `src/types/index.ts` and data exists in `src/data/`.
- The landing page is a single route. New portfolio sections are composed into `src/app/page.tsx` and reached through anchors (`/#projects`, `/#experience`, `/#skills`, `/#about`). Do not add standalone pages for content that belongs on the landing page.
- New landing sections that should appear in navigation must be added to `primaryNav` in `src/data/site.ts`.
- New blog posts are `.mdx` files in `src/content/posts/`. They flow automatically into the blog directory, homepage feature strip, RSS feed, and sitemap. No code changes are required to publish.
- When updating layout components, verify responsive design across mobile (375px), tablet (768px), and desktop (1024px+) viewports.
- Provide clear explanations alongside code blocks when introducing new patterns or libraries.
