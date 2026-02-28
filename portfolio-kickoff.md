# Portfolio Site Kickoff

> Copy this file to a new repo and use it with Claude Code to build the site.
> Source data lives in the `resume` repo under `profile/`.

---

## 1. Project Overview

### Purpose

A personal portfolio site for **Eric Chavez** — a frontend/fullstack software engineer based in Kent, WA (Seattle metro). The site serves two goals:

1. **Showcase work** — give hiring managers and recruiters a richer, more interactive view of Eric's experience than a PDF resume can offer.
2. **Be a portfolio piece itself** — demonstrate Next.js, TypeScript, accessibility, performance, and design taste. The site is the first thing a reviewer will judge.

### Audience

- Engineering hiring managers evaluating frontend/fullstack candidates
- Recruiters scanning for keywords and quick-hit credibility signals
- Fellow engineers who saw the WaveLength LinkedIn post (178 likes, 29 comments) and want to learn more

### Success Criteria

- Lighthouse 90+ in all four categories (Performance, Accessibility, Best Practices, SEO)
- WCAG AA compliant
- Loads in under 2 seconds on 4G
- Clearly communicates "hire this person" within 10 seconds of landing
- Every page works without JavaScript (progressive enhancement for content)

---

## 2. Content Inventory

Every content block maps back to a source file in the resume repo (`C:\Users\emcha\OneDrive\Documents\Code\resume`).

| Section | Content | Source File |
|---------|---------|-------------|
| Hero | Name, title, one-liner, CTA buttons | `profile/identity.yaml`, `profile/summary.md` (General variant) |
| About | Bio narrative, professional photo, music-to-software arc | `profile/summary.md` (Technical variant), `profile/audio-music.md` (transferable skills only) |
| Experience | Expedia Group (primary), Hubsharp Solutions (supporting) | `profile/experience.yaml`, `profile/experience/expedia-group.md` |
| Projects | WaveLength (hero project), Chronicle (coming soon) | `profile/projects.yaml`, `profile/projects/wavelength.md` |
| Skills | Grouped by category with proficiency indicators | `profile/skills.yaml` |
| Testimonials | Quinn Goldstein, Noah Benham, Isabella Heppe | `profile/summary.md` (Raw Material section) |
| Education | Full Sail B.S., Inventive Group bootcamp | `profile/education.yaml` |
| Interests | Curated subset for humanizing detail | `profile/interests.yaml` |
| Contact | Email, LinkedIn, GitHub, resume download | `profile/identity.yaml` |
| Career Goals (internal only) | Informs site tone, not displayed | `docs/career-goals.md` |

### Content to Port

When building the site, create a `src/data/` directory with structured TypeScript files. Do NOT import YAML directly — translate the resume repo data into typed objects once. The site's data layer is decoupled from the resume repo.

---

## 3. Site Architecture

### Single-Page Scroll + Detail Pages

```
/                        → Main page (scrollable sections with anchor nav)
  #hero                  → Name, title, CTA
  #about                 → Bio + photo
  #experience            → Work history cards
  #projects              → Project cards (WaveLength featured)
  #skills                → Skill categories with proficiency
  #testimonials          → Colleague quotes
  #contact               → Links + resume download

/projects/[slug]         → Dedicated project detail pages
  /projects/wavelength   → WaveLength case study (iframe embed + deep dive)
  /projects/chronicle    → Chronicle (coming soon placeholder)
```

### Navigation

- **Desktop**: Fixed top nav bar with section anchor links. Active section highlighted on scroll (Intersection Observer).
- **Mobile**: Hamburger menu with smooth-scroll anchor links.
- **Project detail pages**: Back arrow to `/#projects`, prev/next navigation between projects.
- **Dark/light mode toggle** in nav bar (persisted to localStorage, respects `prefers-color-scheme`).

---

## 4. Feature Requirements

### MVP (Launch)

- Responsive layout (mobile-first, breakpoints at 640/768/1024/1280px)
- Dark mode / light mode toggle with system preference detection
- Smooth scroll navigation with active section indicator
- WaveLength project card with live link + case study page
- Resume PDF download button (serves `public/Eric-Chavez-Resume.pdf`)
- Contact section with email link, LinkedIn, GitHub
- Framer Motion entrance animations (fade-in on scroll, staggered lists)
- `prefers-reduced-motion` respected — disable animations when set
- Skip-to-content link
- Semantic HTML throughout (proper heading hierarchy, landmarks, ARIA where needed)
- Open Graph and Twitter Card meta tags for link previews
- Sitemap and robots.txt
- Favicon and Apple touch icon
- 404 page

### Nice-to-Have (Post-Launch)

- Blog/writing section (MDX-powered)
- Interactive skill visualization (e.g., grouped bubbles or radar chart)
- Subtle particle or waveform background animation in hero (ties to WaveLength / audio theme)
- Analytics (Vercel Analytics or Plausible)
- Contact form (email forwarding via Resend or similar)

---

## 5. Design Direction

### Brand Identity

Eric's brand sits at the intersection of **technical precision** and **creative sensibility**. The music-to-software narrative is a subtle thread, not the headline. The site should feel like a well-engineered product — clean, confident, and thoughtfully detailed.

**Keywords**: Clean, modern, confident, precise, warm (not cold/corporate).

### Color Palette

Use CSS custom properties for theming. Two modes:

**Light mode:**
- Background: `#FAFAFA` (warm off-white)
- Surface: `#FFFFFF`
- Text primary: `#1A1A2E` (deep navy-black)
- Text secondary: `#4A4A68`
- Accent: `#6366F1` (indigo-violet — ties to WaveLength purple palette)
- Accent hover: `#4F46E5`
- Border: `#E5E7EB`

**Dark mode:**
- Background: `#0F0F1A` (deep navy)
- Surface: `#1A1A2E`
- Text primary: `#F0F0F5`
- Text secondary: `#A0A0B8`
- Accent: `#818CF8` (lighter indigo for contrast)
- Accent hover: `#6366F1`
- Border: `#2A2A40`

### Typography

- **Headings**: `Inter` (clean geometric sans-serif, widely available on Google Fonts)
- **Body**: `Inter` (same family for consistency — use weight variation for hierarchy)
- **Code**: `JetBrains Mono` (monospace for any code snippets)
- Scale: Use Tailwind's default type scale. Hero heading: `text-5xl`/`text-6xl`. Section headings: `text-3xl`/`text-4xl`.

### Visual Motifs

- **Subtle waveform accent**: A decorative sine-wave SVG as a section divider or background element. Minimal and geometric — not literal audio waveforms, more like a gentle curve. Ties to WaveLength without being heavy-handed.
- **Card-based layout**: Experience, projects, and testimonials as cards with subtle shadow and hover lift.
- **Gradient accent**: Occasional indigo-to-violet gradient on CTA buttons or section highlights.
- **Generous whitespace**: Let content breathe. No cramped sections.

---

## 6. Technical Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 15 (App Router) | Strengthens a skill gap (intermediate → advanced), SSG for performance, industry standard |
| Language | TypeScript (strict mode) | Expert-level skill, demonstrates type safety discipline |
| Styling | Tailwind CSS v4 | Fast iteration, intermediate skill practice, great dark mode support |
| Animation | Framer Motion | Intermediate skill, smooth entrance/exit animations, `prefers-reduced-motion` support |
| Content | MDX (via `next-mdx-remote` or `@next/mdx`) | Project case study pages with rich formatting + embedded components |
| Deployment | Vercel | Free tier, automatic previews, custom domain, analytics |
| Domain | `ericmchavez.dev` (or similar — TBD) | Professional, memorable |
| Package manager | pnpm | Fast, disk-efficient |
| Linting | ESLint + Prettier | Standard setup via `next lint` |
| Icons | Lucide React | Lightweight, tree-shakeable |

### Key Technical Decisions

- **App Router** (not Pages Router) — uses React Server Components by default, `'use client'` only where interactivity is needed.
- **Static export** — `output: 'export'` in `next.config.ts` for fully static site. No server required.
- **No CMS** — content lives in `src/data/` as TypeScript objects and `.mdx` files. No external dependencies.
- **Image optimization** — use `next/image` with static imports. Professional headshot optimized at build time.
- **Font loading** — use `next/font/google` for zero-layout-shift font loading.

---

## 7. Repo Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml              # Lint + type-check + build on PR
├── public/
│   ├── Eric-Chavez-Resume.pdf  # Resume PDF for download
│   ├── favicon.ico
│   ├── og-image.png            # Open Graph preview image
│   └── images/
│       ├── headshot.jpg         # Professional photo
│       └── projects/
│           └── wavelength-preview.png
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (fonts, theme provider, nav, footer)
│   │   ├── page.tsx             # Main landing page (all sections)
│   │   ├── not-found.tsx        # 404 page
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx     # Project detail page (MDX rendered)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Card.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── SkillBar.tsx
│   │   │   └── ScrollReveal.tsx  # Framer Motion scroll animation wrapper
│   │   └── projects/
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectEmbed.tsx  # iframe embed for WaveLength
│   │       └── ProjectMdx.tsx    # MDX renderer with custom components
│   ├── content/
│   │   └── projects/
│   │       ├── wavelength.mdx    # WaveLength case study
│   │       └── chronicle.mdx     # Chronicle (coming soon)
│   ├── data/
│   │   ├── experience.ts         # Work history
│   │   ├── projects.ts           # Project metadata
│   │   ├── skills.ts             # Skills with proficiency levels
│   │   ├── testimonials.ts       # Colleague quotes
│   │   ├── education.ts          # Education entries
│   │   ├── interests.ts          # Selected interests
│   │   └── navigation.ts         # Nav links and section IDs
│   ├── hooks/
│   │   ├── useActiveSection.ts   # Intersection Observer for nav highlighting
│   │   └── useTheme.ts           # Dark/light mode state
│   ├── lib/
│   │   ├── mdx.ts                # MDX compilation utilities
│   │   └── utils.ts              # Shared utility functions (cn, etc.)
│   └── styles/
│       └── globals.css            # Tailwind directives, CSS custom properties, base styles
├── CLAUDE.md                      # AI-assisted development conventions (see Section 11)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .eslintrc.json
├── .prettierrc
└── README.md
```

---

## 8. Content Strategy

### Three-Act Narrative

The site tells a story in three acts as the visitor scrolls:

#### Act 1: Hook (Hero + About)

**Goal**: Within 10 seconds, the visitor knows who Eric is and wants to keep scrolling.

- **Hero**: Bold name, title ("Software Engineer"), one-liner that captures the value prop. Two CTA buttons: "View My Work" (scrolls to projects) and "Download Resume" (PDF).
- **About**: 2-3 paragraphs. The arc: music production background → discovered the same love of systems and arrangement in software → bootcamp → nearly 4 years building design systems at Expedia → now building with AI. Tone is confident and human, not stiff. Professional headshot alongside text.

**Copy guidance for About:**
- Lead with software identity, not music. "Software engineer with frontend expertise and a full-stack mindset."
- Introduce the music-to-software pivot as a 1-2 sentence anecdote, not a biography. The "arrangement" metaphor is the takeaway.
- End with forward momentum: what Eric is doing now (building with AI, looking for the next team to join).

#### Act 2: Credibility (Experience + Projects + Skills + Testimonials)

**Goal**: Build confidence that Eric can do the job.

- **Experience**: Expedia Group as the anchor. 3-5 bullet accomplishments, each with a concrete deliverable or metric. Hubsharp as a supporting entry showing full-stack breadth. Bootcamp origin story under education, not experience.
- **Projects**: WaveLength as the hero card (large, with screenshot/preview, live link, and "Read Case Study" CTA). Chronicle as a secondary "coming soon" card. Future projects slot in naturally.
- **Skills**: Grouped into categories (Languages, Frameworks, Tools, Platforms). Visual proficiency indicators (e.g., filled dots, progress bars, or badges). Don't list everything — curate to ~20 most relevant skills.
- **Testimonials**: 3 cards, one per colleague (Quinn, Noah, Isabella). Short pull-quotes (1-2 sentences each), name, title, company. Sourced from LinkedIn recommendations.

**Testimonial pull-quotes (adapt from `profile/summary.md`):**
- **Quinn Goldstein** (UX Engineer, Expedia): Highlight deep front-end understanding, clean TypeScript, strong communicator.
- **Noah Benham** (Sr UX Engineer, Expedia): Highlight dependability, attention to component quality, well-scoped PRs, calm thoughtful presence.
- **Isabella Heppe** (UX Engineer, Expedia): Highlight picking up complex systems, great collaborator, clean consistent code.

#### Act 3: Person (Interests + Contact)

**Goal**: Show the human behind the code. Make it easy to reach out.

- **Interests**: A brief, casual section. 3-4 items: AI-assisted development, 3D printing, hiking in the PNW, dog named Zuko. Light and warm.
- **Contact**: Email link, LinkedIn, GitHub. Resume PDF download. Simple CTA: "Let's build something together."

---

## 9. Project Showcase Spec

### WaveLength Deep-Dive Page (`/projects/wavelength`)

This is the most important page after the landing page. It should function as a mini case study.

**Structure:**
1. **Header**: Project name, one-line description, tech stack badges, links (Live | GitHub)
2. **Embed**: Playable iframe of WaveLength (responsive, 16:9 aspect ratio, with a "Open in new tab" fallback link). Include a brief "How to play" tooltip or collapsed instructions.
3. **Overview**: What the game is, what inspired it (DAW signal chains), why it exists (AI-assisted dev showcase).
4. **Technical Highlights**: 4-6 items with short descriptions:
   - Custom TypeScript game engine
   - Waveform graphing and signal processing systems
   - Node-based visual editor
   - Custom chip system with recursive abstraction
   - Move/zoom animation system
   - Built in 11 days with Claude Code
5. **AI Development Story**: How Eric used Claude Code — context management approach, the "AI slop is a developer problem" insight. 2-3 paragraphs.
6. **Impact**: LinkedIn post stats (178 likes, 29 comments), community response.
7. **Footer CTA**: Link back to projects section, or contact.

### Project Card Pattern

Reusable component for all projects:

```
┌─────────────────────────────────────┐
│  [Preview Image / Screenshot]       │
├─────────────────────────────────────┤
│  Project Name                       │
│  One-line description               │
│                                     │
│  [TS] [React] [Canvas API]  ← tech badges │
│                                     │
│  [View Live]  [Case Study →]        │
└─────────────────────────────────────┘
```

- Featured project (WaveLength) gets a larger card, full-width on mobile.
- Secondary projects get standard-size cards in a grid.
- "Coming soon" projects show a muted card with no links.

### Future-Proofing

The project detail page architecture (`/projects/[slug]`) with MDX content means adding new projects is just:
1. Add metadata to `src/data/projects.ts`
2. Create `src/content/projects/[slug].mdx`
3. Add a preview image to `public/images/projects/`

No component changes needed.

---

## 10. Implementation Phases

### Phase 1: Scaffold (Day 1)

- Initialize Next.js 15 with TypeScript, Tailwind, pnpm
- Set up repo structure per Section 7
- Configure ESLint, Prettier, tsconfig (strict)
- Create `CLAUDE.md` (see Section 11)
- Set up CSS custom properties for color palette (light + dark)
- Implement `ThemeToggle` with `prefers-color-scheme` detection + localStorage persistence
- Deploy empty shell to Vercel

### Phase 2: Layout + Navigation (Day 2)

- Build `Navbar` (desktop + mobile hamburger)
- Build `Footer`
- Implement smooth scroll with `useActiveSection` hook
- Skip-to-content link
- Responsive container layout
- Basic page structure with empty section shells

### Phase 3: Content Sections (Days 3-5)

- Populate `src/data/` files from resume repo data
- Build all section components: Hero, About, Experience, Projects, Skills, Testimonials, Contact
- Build reusable UI components: Card, Button, Badge, SectionHeading, SkillBar
- Add professional headshot
- Add resume PDF to `public/`
- Wire up "Download Resume" button

### Phase 4: Project Detail Pages (Days 6-7)

- Set up MDX pipeline
- Build WaveLength case study page with iframe embed
- Build Chronicle placeholder page
- Build `ProjectCard` and `ProjectEmbed` components
- Dynamic routing for `/projects/[slug]`

### Phase 5: Animation + Polish (Day 8)

- Add Framer Motion scroll-reveal animations (`ScrollReveal` wrapper)
- Implement `prefers-reduced-motion` check
- Add hover states, focus indicators, transitions
- Open Graph image + meta tags
- Favicon and Apple touch icon
- 404 page
- Lighthouse audit and fix any issues
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile testing on real devices

### Phase 6: Launch (Day 9)

- Register domain (e.g., `ericmchavez.dev`)
- Configure custom domain on Vercel
- Set up CI workflow (lint + type-check + build on PR)
- Final review pass
- Update resume repo `profile/identity.yaml` with portfolio URL
- Update LinkedIn profile with site link
- Ship it

---

## 11. CLAUDE.md Template

Copy this into the new repo's `CLAUDE.md`:

````markdown
# Portfolio Site - Claude Code Instructions

## Project

Personal portfolio site for Eric Chavez. Next.js 15 (App Router), TypeScript strict, Tailwind CSS, Framer Motion.

## Commands

- `pnpm dev` — local dev server
- `pnpm build` — production build (static export)
- `pnpm lint` — ESLint
- `pnpm type-check` — TypeScript compiler check (no emit)

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
````

---

## 12. Open Questions

Resolve these before or during development:

| # | Question | Status | Notes |
|---|----------|--------|-------|
| 1 | **Domain name** — Register `ericmchavez.dev`? | TBD | Check availability. Alternatives: `.com`, `.io`, `.me` |
| 2 | **Headshot** — Which photo to use? | Eric has a professional photo | Needs to be added to `public/images/` |
| 3 | **Testimonial permissions** — Confirm with Quinn, Noah, Isabella that quotes can be used on portfolio site | TBD | LinkedIn recommendations are public, but courtesy ask is good practice |
| 4 | **Resume PDF** — Use latest generated resume or create a portfolio-specific version? | TBD | Portfolio version could be slightly different from app-specific resumes |
| 5 | **Chronicle** — Include as "coming soon" or omit until ready? | Include as coming soon | Shows active development, future-proofs the projects section |
| 6 | **Analytics** — Vercel Analytics (free tier) or skip for MVP? | Defer to post-launch | Nice-to-have, not blocking |
| 7 | **WaveLength embed** — Does the game work well in an iframe? | Needs testing | May need to handle keyboard focus trapping, add "open in new tab" fallback |
| 8 | **OG image** — Design a custom Open Graph image or auto-generate? | TBD | Custom looks more polished for LinkedIn/Slack link previews |

---

## Quick Start

Once this doc is in a new repo:

```bash
pnpm create next-app@latest portfolio --typescript --tailwind --app --src-dir --use-pnpm
cd portfolio
# Copy CLAUDE.md from Section 11
# Copy this file as reference
# Start building Phase 1
```
