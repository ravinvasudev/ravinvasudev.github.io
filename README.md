# Ravin Vasudev Portfolio (Next.js)

This repository now includes a Next.js App Router implementation for a modern multi-page portfolio.

## Development

1. Install dependencies:
   npm install
2. Run locally:
   npm run dev
3. Open:
   http://localhost:3000

## Content Source of Truth

Structured content is loaded from root data JSON files:
- data/profile.json
- data/experience.json
- data/projects.json
- data/skills.json
- data/achievements.json
- data/education.json

UI components read this data through typed loaders in src/lib/content.ts.

## Migration Note

Legacy static HTML files remain in place for now. The Next.js app is the forward path.
