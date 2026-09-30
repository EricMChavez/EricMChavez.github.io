import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    company: "Expedia Group",
    title: "Front End Engineer II, Design System Platform",
    start: "Mar 2022",
    end: "Jan 2026",
    location: "Seattle, WA",
    summary:
      "Built and maintained React/TypeScript components in the Expedia Group Design System (EGDS), the shared UI layer every Expedia Group brand, including Expedia and Vrbo, builds its web experiences on. Rotated between brand-team support, maintenance, and feature pitches within agile teams of 3-5.",
    accomplishments: [
      "Worked closely on core EGDS components including the modal, calendar, and seat selector, where layout, state, and keyboard access all have to hold up at once",
      "As a designated Accessibility Champion, brought library components up to WCAG standards so every consuming brand inherited accessible defaults",
      "Built paired GitHub Actions workflows that published a temporary EGDS build and ran it against the largest consumer's full test suite, catching regressions our own tests missed — designed as an advisory signal so flaky consumer tests never eroded trust",
      "Built a Storybook playground plugin enabling users to build, save, and share interactive code snippets — delivered in 3 days using AI-assisted development",
      "Integrated a cascading design token system enabling customer theming, inheritance, and overrides across the component library",
      "Embedded with brand teams on their sprints; unblocked Vrbo's crypto payment option with a team-owned component, then worked with head designers to promote it into the core library",
      "Implemented test coverage checks in CI enforcing an 80% threshold on all PRs, and built a Figma plugin to import token values and align designs to the EGDS specification",
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
