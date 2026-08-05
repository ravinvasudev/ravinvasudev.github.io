# GitHub Copilot Custom Instructions: Portfolio Website

## 1. Executive Summary & Goal

This project is the complete redesign and modern rebuild of Ravin Vasudev's professional portfolio and technical platform (ravinvasudev.com & blog.ravinvasudev.com).

- **Primary Goal**: Create a slick, modern, highly interactive, fast, and responsive portfolio highlighting ~20 years of experience in Enterprise Software Development, Cloud Architecture, Systems Architecture, and Cloud Center of Excellence (CCoE) leadership. Serve as the authoritative focal point of Ravin's career for hiring managers, recruiters, and prospective leaders.
- **Key Objective**: Maintain strict separation between UI components and professional content so that updating career records, projects, and skills in the future requires modifying only structured data files without altering component logic.
- **Recruiter & Executive Focus**: Highlight high-impact achievements, measurable metrics, downloadable resources, quick contact CTAs, and technical architecture case studies.
- **Content & Blog Platform**: Architecture must support a high-volume blog (`blog.ravinvasudev.com` or `/blog` route) to regularly publish technical articles, thoughts, and industry insights.
- **Future-Proof Maintenance**: Maintain a strict boundary between UI components, career data, and editorial posts so that updating work history or publishing new articles requires editing data/content files only without modifying component code.

---

## 2. Core Tech Stack

- **Framework**: Next.js (App Router using React Server Components where applicable)
- **Language**: TypeScript (Strict type checking enabled)
- **Styling**: Tailwind CSS v3+ / v4 with `@tailwindcss/typography` plugin for markdown styling
- **Animations**: Framer Motion (for smooth transitions and subtle micro-interactions)
- **Icons**: Lucide React (`lucide-react`)
- **Content Engine**: Local MDX or Contentlayer for structured blog publishing and metadata extraction
- **Syndication & Social Automation**:
  - Dynamic RSS/Atom feed endpoint (`src/app/feed.xml/route.ts`) enabling automated social media cross-posting to LinkedIn, Twitter/X, and Dev.to via webhooks (e.g., Zapier, Make, n8n).
  - Dynamic OpenGraph image generation (`@vercel/og`) for rich link cards on LinkedIn.
  - Structured JSON-LD metadata (`Person`, `ProfilePage`, `BlogPosting`) for optimal SEO and recruiter visibility.
  - **Deployment**: Vercel (configured for custom domain `ravinvasudev.com` and subdomain routing for `blog.ravinvasudev.com`)
- **Analytics & SEO**: Next.js metadata API, OpenGraph image generation, structured JSON-LD data

---

## 3. Project Architecture & Directory Structure

Always follow this directory layout when creating, extending, or refactoring files:

```text
├── src/
│   ├── app/                    # Next.js App Router routes
│   │   ├── layout.tsx          # Root layout with fonts, structured SEO data, metadata
│   │   ├── page.tsx            # Executive Portfolio landing page
│   │   ├── blog/               # Blog routes (accessible directly or via blog.ravinvasudev.com rewrite)
│   │   │   ├── page.tsx        # Article directory, tag filtering, search
│   │   │   └── [slug]/page.tsx # Individual blog post layout
│   │   ├── feed.xml/route.ts   # Dynamic RSS feed generator for LinkedIn/Social syndication
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Crawler directives
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # Atomic UI elements (Buttons, Badges, Modals, Callout boxes)
│   │   ├── layout/             # Header, Navbar, Footer, Subdomain Navigation
│   │   ├── sections/           # Landing sections (Hero, Impact Timeline, Architecture Showcase, Skills)
│   │   └── blog/               # Article renderer, Code Highlighting, Share to LinkedIn buttons
│   ├── content/                # Editorial content engine
│   │   └── posts/              # MDX files containing blog posts and architecture deep-dives
│   ├── data/                   # Data sources (SINGLE SOURCE OF TRUTH for career data)
│   │   ├── profile.ts          # Bio, contact channels, social URLs, recruiter summary
│   │   ├── experience.ts       # Detailed career history & key engineering achievements
│   │   ├── projects.ts         # High-impact architecture projects & cloud implementations
│   │   └── skills.ts           # Categorized skill matrix (AWS, EKS, Terraform, CCoE, etc.)
│   ├── lib/                    # Utilities (MDX parsing, RSS generator, Tailwind merge `cn`)
│   └── types/                  # TypeScript types for Profile, Experience, and Blog Post Frontmatter
└── public/                     # Static files (Resume markdown, architecture diagrams, social banners)
```

---

## 4. Single Source of Truth Strategy (Content Maintainability)

To ensure easy maintenance going forward:

- **Never hardcode personal details or career experience inside React components.**
- **Career & Profile Data**: Store inside src/data/\*.ts. Components must never hardcode company names, role dates, or bio text.
- Types must be clearly defined in `src/types/index.ts` (e.g., `ExperienceItem`, `ProjectItem`, `SkillCategory`).
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
- **Color Palette Application**:
  - Main Background: Deep rich canvas with section cards layered in Navy.
  - Typography: Crisp high-contrast main text paired with muted slate layout.
  - Strategic Highlights: Champagne Gold is reserved exclusively for system metrics, numerical engineering achievements, and elite badges. Do not use gold for large text block elements or standard buttons.
- **Typography**: Clean sans-serif primary fonts (e.g., Inter, Geist) paired with monospace fonts for technical stats or architecture parameters.
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

| Category               | Guidelines                                                                                                                                                           |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TypeScript**         | Always define explicit types or interfaces. Avoid `any`. Define props interfaces for every React component.                                                          |
| **Tailwind CSS**       | Use utility classes logically. Group layout, spacing, typography, and interactive classes cleanly. Use `clsx` or `tailwind-merge` (`cn` helper) for dynamic classes. |
| **Next.js Components** | Default to React Server Components (RSC). Add `'use client'` only when state, event handlers, or Framer Motion hooks are necessary.                                  |
| **Performance**        | Use `next/image` for images with explicit dimensions and proper `alt` tags. Use `next/font` for web font optimization.                                               |
| **Code Quality**       | Write concise, self-documenting code. Keep components modular and focused on a single responsibility.                                                                |

---

## 8. Profile Context for AI Code Generation

When writing placeholder content, component mocks, or resume summary code, use the following real profile background:

- **Name**: Ravin Vasudev
- **Title**: Cloud Architect / Systems Architect / Senior Solutions Architect
- **Experience Level**: ~20 Years in Enterprise Software Engineering, System Architecture, and Cloud Infrastructure
- **Specializations**: Cloud Center of Excellence (CCoE), AWS, Kubernetes (EKS), Terraform / OpenTofu (IaC), Microservices, CI/CD Pipelines (GitLab, GitHub Actions), Cost Optimization, High Availability Systems Design.
- **Tone**: Authoritative yet accessible, engineering-focused, structured, and modern.

---

## 9. Copilot Workflow Directives

- When asked to build a new section, first verify if corresponding types exist in `src/types/index.ts` and data exists in `src/data/`.
- When updating layout components, verify responsive design across mobile (375px), tablet (768px), and desktop (1024px+) viewports.
- Provide clear explanations alongside code blocks when introducing new patterns or libraries.
