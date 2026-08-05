# Website Blueprint

## Objective

Define a production grade system blueprint for a high performance, highly interactive portfolio and technical platform (ravinvasudev.com & blog.ravinvasudev.com).

This blueprint establishes a clear architectural separation between structured career data and presentation layers, ensuring the system functions as an optimized engineering showcase tailored for executive recruiters, hiring managers, and technical leaders.

## System Pillars & Success Criteria

### 1. The 15-Second Executive Value Rule

The landing page must immediately communicate an elite engineering trajectory (19+ years of experience, per `profile.totalExperience`) transitioning from core Software Development to Systems Architecture, Cloud Architecture, and Cloud Center of Excellence (CCoE) leadership.

### 2. Metric Driven Layout Hierarchy

Surfaces quantifiable business outcomes (e.g., infrastructure cost efficiency, deployment velocity upgrades, scalability metrics) above the fold, providing immediate proof of impact before detailed text scanning begins.

### 3. Strict Separation of Concerns

Zero hardcoded professional history or profile details within layout views. Content scales seamlessly through TypeScript data models and local MDX files, eliminating future component compilation for resume updates.

## Global Design System & Tailored Theme

### Color Palette Architecture

Designed to project an elite, enterprise grade architectural aesthetic while ensuring optimal legibility.

Plaintext

```text
├── canvas        : #030712 (Deep neutral grid canvas)
├── surface       : #0A192F (Novantis Deep Royal Navy container)
├── surface-raised: #0F2440 (Elevated card layer)
├── cobalt        : #2563EB (Novantis Electric Cobalt interactive accent)
├── cobalt-soft   : #3B82F6 (Hover and link accent)
├── gold          : #D4AF37 (Novantis Warm Champagne Gold, metrics only)
├── ink           : #F9FAFB (High contrast white-smoke typography)
├── muted         : #9CA3AF (Low strain technical gray typography)
└── hairline      : rgba(148, 163, 184, 0.16) (Universal border color)
```

These are registered as semantic Tailwind color names in `tailwind.config.ts`. Reference them by name, never by raw hex value. Reusable class compositions (`.shell`, `.surface-card`, `.kicker`, `.metric-value`, `.chip`) live in the `@layer components` block of `src/app/globals.css`.

### Typography System

- **Headings**: `Space Grotesk` (structured, modern geometric engineering feel), exposed as `font-heading`
- **Body & Copy**: `Inter` (high legibility, clean text tracking), exposed as `font-body`
- **Metrics & System Tokens**: `JetBrains Mono` (monospaced alignment for technical credibility), exposed as `font-mono`

All three load through `next/font/google` in `src/app/layout.tsx` and bind to the `--font-heading`, `--font-body`, and `--font-mono` CSS variables consumed by `tailwind.config.ts`.

### Accessibility & Motion Strategy

- **Accessibility**: Full compliance with WCAG AA contrast ratios, mandatory aria landmarks (`<nav>`, `<main>`, `<section>`), and structured keyboard focus rings (`focus-visible:ring-2`).
- **Formatting Constraints**: No em dashes in text, copy, or UI frameworks. Use colons, hyphens, or parenthetical breaks to maintain structural clarity.
- **Micro-interactions**: Hardware accelerated entry transitions via Framer Motion. Zero layout shift (CLS) during viewport rendering.

## Routing & Subdomain Architecture

Plaintext

```text
ravinvasudev.com/
├── /                           # Executive Portfolio Landing Page (single route)
├── /#impact                    # Enterprise Impact Strip
├── /#projects                  # Architecture Case Studies & System Deep-Dives
├── /#experience                # Comprehensive Career Timeline (Metric-Forward)
├── /#skills                    # Core Capability & Platform Matrix
├── /#writing                   # Featured Technical Articles
├── /#about                     # Executive Narrative, Recognition & Education
└── /#contact                   # High Conversion Outreach Card

/blog
├── /blog                       # Technical Blog Directory (search + tag filtering)
├── /blog/[slug]                # High Density Technical MDX Article View
├── /feed.xml                   # Dynamic RSS Feed for Automatic Social Cross-Posting
├── /sitemap.xml                # Dynamic sitemap covering static routes and every post
├── /robots.txt                 # Crawler directives
└── /opengraph-image            # Dynamic social card (edge runtime)
```

`blog.ravinvasudev.com` is a future option, not current state. `/blog` is the canonical blog path today; pointing the subdomain at it requires adding a host rewrite before the hostname can be used.

## Core Directory & Component Blueprint

Plaintext

```text
src/
├── app/                        # Next.js App Router (Server Components Default)
│   ├── layout.tsx              # Root Layout (fonts, metadata, Person JSON-LD, skip link)
│   ├── page.tsx                # Main Executive Landing Page
│   ├── not-found.tsx           # 404 view
│   ├── opengraph-image.tsx     # Dynamic social card via next/og
│   ├── feed.xml/               # RSS Syndication Engine (LinkedIn/Social hooks)
│   └── blog/                   # Blog directory + [slug] article view
├── components/                 # Atomic Architecture Components
│   ├── ui/                     # button-link, badge-list, section-heading, reveal
│   ├── layout/                 # site-header (mobile menu), site-footer
│   ├── sections/               # hero, impact-strip, case-studies, experience-timeline,
│   │                           # skills-matrix, latest-writing, about, contact-cta
│   └── blog/                   # post-directory (search + tags), share-links
├── content/                    # Blog Assets Engine
│   └── posts/                  # Local MDX Files (.mdx with structured frontmatter)
├── data/                       # Structured Single Source of Truth Data Files
│   ├── profile.ts              # Bio, positioning, narrative, philosophy, socials, resume URL
│   ├── experience.ts           # Work history plus the exported `impactMetrics` array
│   ├── projects.ts             # Case studies plus the derived `featuredProjects` export
│   ├── skills.ts               # Categorized Technical Matrix (AWS, EKS, IaC)
│   ├── credentials.ts          # Awards / recognition and education
│   └── site.ts                 # siteConfig (URLs, description) and primaryNav
├── lib/                        # cn (class merge), date (formatting), posts (MDX loader)
└── types/                      # Explicit TypeScript Interfaces (Strong Type Layer)
```

## Main Portfolio View (Home Page Blueprint)

### Section 1: Hero Layer (Above the Fold)

- **Purpose**: Immediate conversion and high tier career positioning.
- **Data Source**: `src/data/profile.ts` plus the first three entries of `impactMetrics`
- **UI Blueprint**:

  - Left column: staggered Framer Motion entry covering the positioning statement, recruiter summary, and an inline three-metric bar rendered in Champagne Gold.
  - Right column: a layered "System Layers" card (Governance, Platform, Infrastructure, Services) acting as the minimalist tech stack visual, followed by industry chips.
  - Action Elements: primary CTA to download the resume, outline CTA to LinkedIn, and a ghost link to the technical articles. A scroll cue anchors down to `#impact`.

### Section 2: Enterprise Impact Strip

- **Purpose**: Prove career capacity instantly using concrete data points.
- **Data Source**: `impactMetrics` exported from `src/data/experience.ts`
- **UI Blueprint**:

  - Six-column grid on desktop viewports that degrades to a horizontally scrollable, snap-aligned track on mobile.
  - Uses oversized `JetBrains Mono` values colored in **Novantis Champagne Gold (`#D4AF37`)** for years of experience, service estate size, velocity gains, and infrastructure efficiency, each paired with a supporting description.

### Section 3: Architecture & System Case Studies

- **Purpose**: Build deep technical authority with engineering leaders via concrete examples.
- **Data Source**: `src/data/projects.ts`
- **UI Blueprint**:

  - Two-column grid rendering every case study, with `featured` entries marked by a gold badge.
  - Card layouts are strictly divided into a clear narrative flow: **Problem Statement $\rightarrow$ Engineering Solution $\rightarrow$ Measurable Technical/Business Impact**.
  - Technology chips map the platform layer (e.g., `AWS`, `EKS`, `Terraform`, `OpenTofu`). A "View architecture" toggle expands the `architecture` array into a monospaced topology breakdown, wired with `aria-expanded` and `aria-controls`.

### Section 4: Experience Timeline Snapshot

- **Purpose**: Clear professional pathing for scanning recruiters.
- **Data Source**: `src/data/experience.ts`
- **UI Blueprint**:

  - Clean vertical timeline rendering the complete role history inline. There is no separate experience page, so no "view full timeline" link is required.
  - The current Cloud Architect CCoE position is styled with a **Novantis Electric Cobalt (`#2563EB`)** rail, border, and glow treatment.
  - Each entry surfaces the core focus summary, gold metric pills, deliverable bullets, and a technology chip row.

### Section 5: Technical Capability Matrix

- **Purpose**: Streamline automated candidate screening and technical verification.
- **Data Source**: `src/data/skills.ts`
- **UI Blueprint**:

  - Modular group blocks divided by operational focus (e.g., Cloud Infrastructure & IaC, Platform Systems, System Architecture, Core Software Engineering, Leadership & CCoE Governance).
  - Features an interactive category toggle to filter skill badges instantly based on the specific tracking discipline.

### Section 6: Latest Writing

- **Purpose**: Demonstrate current thought leadership without leaving the landing page.
- **Data Source**: `getFeaturedPosts()` from `src/lib/posts.ts`, backed by `src/content/posts/`
- **UI Blueprint**:

  - Two featured articles with publish date, reading time, summary, and tag chips.
  - Falls back to the most recent posts when no article is flagged `featured`, and the section collapses entirely when no posts exist.
  - A secondary action links through to the full `/blog` directory.

### Section 7: Executive Narrative & Credentials

- **Purpose**: Give hiring managers the career arc, operating principles, and verification signals in one pass.
- **Data Source**: `src/data/profile.ts` (narrative, leadership philosophy) and `src/data/credentials.ts` (recognition, education)
- **UI Blueprint**:

  - Primary column carries the narrative paragraphs followed by gold-bulleted leadership principles.
  - Sidebar stacks a Recognition card and an Education card, each collapsing when its source array is empty.

### Section 8: High Conversion Footer

- **Purpose**: Final conversion capture for recruiters exiting the page view.
- **Data Source**: `src/data/profile.ts`
- **UI Blueprint**:

  - A bold, dark surface card (`#0A192F`) with a cobalt radial wash, containing an executive outreach prompt.
  - Repeats primary action components side by side: direct email link, LinkedIn connection channel, and the resume asset download.
  - The site footer below it repeats primary navigation plus icon links for email, LinkedIn, GitHub, and the RSS feed.

## Secondary Views & Syndication Systems

### /#projects (Complete Architecture Portfolio)

- Displays the full roster of enterprise implementations. Depth is reached through the per-card architecture expansion rather than a category filter menu.
- System diagrams can be added alongside architectural breakdowns as static assets in `public/`.

### /#experience (Deep Professional History)

- An un-collapsed, comprehensive timeline tracking all career roles and engineering contributions.
- Surfaces technology chips and metric pills for each position held.

### /blog & /blog/[slug] (Thought Leadership Hub)

- Content-first layout using the Tailwind `@tailwindcss/typography` plugin (`prose prose-invert`).
- The directory view is a client component providing full-text search across titles and summaries plus single-select tag filtering.
- Articles are `.mdx` files read with `gray-matter` and rendered through `next-mdx-remote/rsc`, statically generated via `generateStaticParams`.
- Each article emits `BlogPosting` JSON-LD and includes LinkedIn and Twitter/X share actions.

### /feed.xml (Automated Social Syndication Engine)

- A statically generated route emitting standards-compliant RSS 2.0 with `dc:creator`, an `atom:link` self reference, and one `category` element per tag.
- Extracts frontmatter variables (`title`, `summary`, `publishedAt`, `canonicalUrl`, `tags`) so webhook platforms (Zapier, Make, n8n) can detect updates and trigger automated cross-posting.

## Data Model Contract Specification

To prevent build breaking issues during automated rendering, use explicit TypeScript type constraints. These mirror `src/types/index.ts`; treat that file as authoritative if the two ever diverge.

TypeScript

```ts
export interface Profile {
  name: string;
  title: string;
  location: string;
  totalExperience: string;
  positioningStatement: string;
  recruiterSummary: string;
  narrative: string[];
  leadershipPhilosophy: string[];
  industries: string[];
  resumeUrl: string;
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  coreFocus: string;
  highlights: string[];
  metrics: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  timeframe: string;
  domain: string;
  role: string;
  problem: string;
  solution: string;
  impact: string[];
  architecture: string[];
  techStack: string[];
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  focus: string;
  skills: string[];
}

export interface PostFrontmatter {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  canonicalUrl: string;
  featured: boolean;
}
```

`Achievement`, `EducationItem`, `SocialLinks`, `Post`, `PostWithContent`, and `NavItem` are also defined in `src/types/index.ts`.

## Content Governance & System Workflow

1. **Data Priority Execution**: Any modification to career achievements, professional roles, or technical skill matrices must occur strictly within the matching file inside `src/data/`. Component UI structures must remain clean code presentations.
2. **Defensive Design Fallbacks**: Components must be structured to check for missing array entries gracefully (e.g., if a project has no metric entries, the container collapses automatically without throwing a rendering error).
3. **Cross-Device Validation**: Layout changes must be verified across mobile (375px), tablet (768px), and standard desktop viewports before code transitions to the main production branch on Vercel.
4. **Build Validation**: `npm run typecheck`, `npm run lint`, and `npm run build` must all pass. Delete `.next/` first if stale generated route types produce phantom errors.
