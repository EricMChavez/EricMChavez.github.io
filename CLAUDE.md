# Portfolio Site - Claude Code Instructions

## Project

Personal portfolio site for Eric Chavez. Next.js 16 (App Router), TypeScript strict, Tailwind CSS, Framer Motion.

## Commands

- `pnpm dev` — local dev server
- `pnpm build` — production build (static export)
- `pnpm lint` — ESLint
- `pnpm type-check` — TypeScript compiler check (no emit)

Deployed to GitHub Pages (https://ericmchavez.github.io) by `.github/workflows/deploy.yml` on every push to `main`. The repo is `EricMChavez/EricMChavez.github.io`; WaveLength lives separately at `/WaveLength`.

## Architecture

- **App Router** with React Server Components by default. Use `'use client'` only for interactive components (theme toggle, mobile menu, scroll animations).
- **Static export** — `output: 'export'` in `next.config.ts`. No API routes, no server-side rendering.
- **Content** — Profile data in `src/data/*.ts` (typed objects). Project case studies in `src/content/projects/*.mdx`.
- **Styling** — Tailwind utility classes. CSS custom properties in `globals.css` for color palette theming. No inline styles.
- **Animation** — Framer Motion only. Always wrap in `prefers-reduced-motion` check. Use the `ScrollReveal` component for scroll-triggered entrances.

## Conventions

- Components: PascalCase files, one component per file, co-located types
- Data files: camelCase exports, all fields typed with interfaces
- Hooks: `use` prefix, one hook per file in `src/hooks/`
- Images: `next/image` with static imports, always provide `alt` text
- Accessibility: Semantic HTML, proper heading hierarchy (one `h1` per page), ARIA labels where needed, visible focus indicators, skip-to-content link
- CSS: Mobile-first responsive (min-width breakpoints). Use Tailwind's `dark:` variant for dark mode styles.

## Content Updates

To add a new project:
1. Add metadata to `src/data/projects.ts`
2. Create `src/content/projects/[slug].mdx`
3. Add preview image to `public/images/projects/`

## Quality Targets

- Lighthouse: 90+ all categories
- WCAG: AA compliance
- TypeScript: Strict mode, no `any`
- Zero ESLint warnings in CI
