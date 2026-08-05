# Website Blueprint - Step 3

## Objective

Define a content-first blueprint for a modern, interactive portfolio website that:
- Uses the data folder as the single source of truth.
- Prioritizes recruiter and hiring manager conversion.
- Preserves technical credibility with architecture depth.
- Scales to future blog publishing.

## Primary Audience

1. Hiring managers evaluating architecture leadership fit.
2. Recruiters scanning for role alignment and impact metrics.
3. Engineering leaders validating technical depth and execution scale.

## Success Criteria

1. Visitor can understand positioning in under 15 seconds.
2. Visitor sees measurable impact in first screen and supporting sections.
3. Visitor has clear actions: contact, LinkedIn, resume download, projects.
4. Content updates happen via data files only, without template rewrites.

## Information Architecture

## Route Map

1. / (Home)
2. /projects (Architecture case studies)
3. /experience (Expanded timeline)
4. /skills (Capability matrix)
5. /about (Narrative profile and leadership philosophy)
6. /blog (Article listing, future-ready)
7. /blog/{slug} (Article detail, future-ready)

## Global Navigation

- Brand: Ravin Vasudev
- Links: Home, Projects, Experience, Skills, About, Blog
- Utility actions: Download Resume, Connect on LinkedIn

## Home Page Blueprint

## Section 1: Hero (Above the Fold)

Purpose:
- Establish executive positioning and trust quickly.

Content source:
- data/profile.json

Fields used:
- name
- headline
- summary[0]
- location
- cta

UI behavior:
- Primary action button: Download Resume
- Secondary action button: Connect on LinkedIn
- Tertiary text link: Explore Technical Articles
- Lightweight entrance animation for headline and CTA group.

## Section 2: Impact Metrics Strip

Purpose:
- Show quantifiable outcomes immediately.

Content source:
- data/achievements.json

Fields used:
- type containing Impact Metric, Scale Metric, Performance Metric
- title
- value

UI behavior:
- Horizontal metric cards on desktop.
- Swipeable or stacked cards on mobile.
- Number-forward typography with short context label.

## Section 3: Career Highlights

Purpose:
- Present short, high-signal achievements.

Content source:
- data/profile.json

Fields used:
- careerHighlights

UI behavior:
- 2-column checklist on desktop.
- Single-column list on mobile.
- Staggered reveal animation with low motion intensity.

## Section 4: Featured Projects

Purpose:
- Demonstrate architecture thinking through concrete case studies.

Content source:
- data/projects.json

Fields used:
- name
- domain
- role
- problem
- solution
- impact
- tech

UI behavior:
- Card-based layout with clear Problem -> Solution -> Impact flow.
- Expandable details panel for architecture and tech stack.
- Link to /projects for full details.

## Section 5: Experience Timeline Snapshot

Purpose:
- Show progression and current role context.

Content source:
- data/experience.json

Fields used:
- company
- title
- startDate
- endDate
- isCurrent
- summary
- metrics

UI behavior:
- Vertical timeline with date markers.
- Current role highlighted by accent color and label.
- Link to /experience for full bullet-level view.

## Section 6: Skills and Capability Matrix

Purpose:
- Make skill depth scannable and role-matched.

Content source:
- data/skills.json

Fields used:
- category
- skills

UI behavior:
- Category cards with tag groups.
- Optional quick filters: Architecture, Platform, App, Reliability, Leadership.

## Section 7: Awards and Recognition

Purpose:
- Reinforce leadership credibility.

Content source:
- data/achievements.json

Fields used:
- type = Award
- title
- organization
- timeframe
- description

UI behavior:
- Compact badge cards with organization and year range.

## Section 8: Contact and CTA Footer

Purpose:
- Maximize conversion.

Content source:
- data/profile.json

Fields used:
- contact
- cta

UI behavior:
- Strong closing prompt.
- Action buttons repeated for resume and LinkedIn.

## Secondary Pages Blueprint

## /projects

Purpose:
- Full architecture portfolio.

Data source:
- data/projects.json

Layout:
- Project index at top with quick chips by domain.
- Individual project sections using Problem, Solution, Architecture, Tech, Impact.
- Optional visual architecture block for top 2 projects.

## /experience

Purpose:
- Full professional timeline for detail-oriented readers.

Data source:
- data/experience.json

Layout:
- Reverse chronological timeline.
- Collapsible highlights and technology tags.
- Metrics surfaced in each role card.

## /skills

Purpose:
- Detailed capability matrix useful for recruiter role matching.

Data source:
- data/skills.json

Layout:
- Category-first grouping.
- Search/filter across tags.

## /about

Purpose:
- Narrative leadership profile and working style.

Data sources:
- data/profile.json
- data/education.json

Layout:
- Long-form summary.
- Leadership principles block.
- Education and background section.

## /blog and /blog/{slug}

Purpose:
- Support thought leadership growth.

Current status:
- Blueprint only in this step.

Future source:
- content/posts/*.mdx with frontmatter.

## Design Direction

Visual theme:
- Executive modern with architectural tone.
- Palette direction: graphite, slate, and cyan accents.
- Background: layered gradients with subtle grid texture.

Typography direction:
- Heading family: Sora or Space Grotesk.
- Body family: Source Sans 3.
- Technical labels and metric numerals: JetBrains Mono.

Motion direction:
- Page-load reveal for hero and metric cards.
- Scroll-triggered fade-up for section blocks.
- Minimal hover lift on project cards and CTA buttons.

Accessibility:
- Semantic landmarks: main, header, nav, section, footer.
- Keyboard focus states on all interactive controls.
- Contrast targets aligned with WCAG AA.

## Data Contract Guidance

To keep rendering stable, each UI section should gracefully handle missing fields.

1. If metrics are unavailable, hide metric chips and keep summary visible.
2. If project architecture list is empty, show only problem, solution, and impact.
3. If education graduationYear is null, render institution and degree without year.

## Content Governance Workflow

1. Update content in data JSON files first.
2. Keep naming stable for ids and categories.
3. Reuse existing categories before creating new ones.
4. Avoid hardcoded profile facts in templates.
5. Review pages in mobile, tablet, and desktop breakpoints before publishing.

## Step 3 Deliverable Summary

This blueprint finalizes:
1. Site structure and route strategy.
2. Section-level content mapping from each JSON file.
3. Interaction and motion behavior for modern UX.
4. Recruiter-focused conversion flow and repeat CTAs.
5. Future-ready blog route plan.
