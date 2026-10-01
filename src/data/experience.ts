import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    company: "Contract, private client",
    title: "Software Engineer",
    start: "Apr 2026",
    end: "Jul 2026",
    location: "Remote",
    summary:
      "Designed and built Tabula solo, a desktop app that turns hand-edited CSV routines into repeatable, auditable workflows. Shipped to the client as a Windows installer, now in beta.",
    accomplishments: [
      "Built a typed rule language with a visual block editor, three-valued logic, and per-row traces that explain every changed value",
      "Made every export replayable: snapshots, engine version, and a SHA-256 hash, with tests proving replays reproduce the original output",
      "Shipped with about 810 unit tests and about 60 Playwright scenarios that drive the real Electron app",
      "Kept a numbered decision log of 60+ entries through a mid-project pivot from single-purpose tool to general rule engine",
    ],
    technologies: ["Electron", "React", "TypeScript", "SQLite", "Zustand", "Playwright", "Claude Code"],
    caseStudy: "/projects/tabula",
  },
  {
    company: "Expedia Group",
    title: "Front End Engineer II, Design System Platform",
    start: "Mar 2022",
    end: "Jan 2026",
    location: "Seattle, WA",
    summary:
      "Built and maintained React/TypeScript components in the Expedia Group Design System (EGDS), the shared UI layer every Expedia Group brand, including Expedia and Vrbo, builds its web experiences on. Rotated between brand-team support, maintenance, and feature pitches within agile teams of 3-5.",
    accomplishments: [
      "Built and maintained core EGDS components, including the modal, calendar, and seat selector, where layout, state, and keyboard access all have to hold up at once",
      "As a designated Accessibility Champion, brought library components up to WCAG standards so every consuming brand inherited accessible defaults",
      "Built paired GitHub Actions workflows that ran a temporary EGDS build against the largest consumer's full test suite, catching regressions our own tests missed. Kept the signal advisory so flaky consumer tests never eroded trust",
      "Integrated a cascading design token system for customer theming, inheritance, and overrides, and built a Figma plugin that imports token values to keep designs aligned with the EGDS spec",
      "Built a Storybook playground plugin for building, saving, and sharing interactive code snippets, delivered in 3 days with AI-assisted development",
      "Embedded with brand teams on their sprints; unblocked Vrbo's crypto payment option with a team-owned component, then worked with head designers to promote it into the core library",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "GraphQL",
      "GitHub Actions",
      "Figma",
      "Node.js",
      "CSS/SCSS",
      "Design Tokens",
      "WCAG/A11y",
      "Claude Code",
    ],
  },
  {
    company: "Hubsharp Solutions",
    title: "Associate Software Engineer",
    start: "Apr 2020",
    end: "Nov 2020",
    location: "Austin, TX",
    summary:
      "Software consulting role building and rebuilding applications for various clients. Worked across the full stack with API integrations, cloud storage, and database management.",
    accomplishments: [
      "Integrated Plaid API for bank onboarding, enabling secure financial account linking",
      "Rebuilt an inventory management application from PHP/Laravel to Node/Express",
      "Implemented secure file storage using AWS S3",
      "Managed MongoDB databases across multiple client projects",
    ],
    technologies: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "AWS S3",
      "PHP",
      "Laravel",
    ],
  },
];
