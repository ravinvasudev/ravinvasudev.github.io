# Portfolio Content Data Map

This folder is the structured source of truth for portfolio content extracted from the master resume.

## Files

- profile.json: Name, headline, location, contact details, executive summary, career highlights, and CTA labels.
- experience.json: Chronological role history with summaries, bullets, technologies, and role-level metrics.
- projects.json: Architecture case studies with problem, solution, architecture approach, technology stack, and impact.
- skills.json: Categorized skills for capability sections and skill matrix visualizations.
- achievements.json: Awards and measurable outcomes for impact-focused sections.
- education.json: Academic background.

## Recommended Section Mapping

- Hero and Intro: profile.json
- Career Highlights strip: profile.json -> careerHighlights
- Experience timeline: experience.json
- Architecture case studies: projects.json
- Skills matrix: skills.json
- Achievements and metrics cards: achievements.json
- Education footer block: education.json

## Notes

- Dates use YYYY-MM where possible for easy sorting.
- Current roles use endDate = null and isCurrent = true.
- Keep updates in these files, not in HTML component markup, to preserve maintainability.
