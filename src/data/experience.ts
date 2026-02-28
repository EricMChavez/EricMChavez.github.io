import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    company: "Expedia Group",
    title: "Front End Engineer II",
    start: "Mar 2022",
    end: "Jan 2026",
    location: "Seattle, WA",
    summary:
      "Built and maintained shared UI component libraries for Expedia Group's Design System (EGDS), serving all Expedia Group brands. Rotated between customer support, maintenance, and feature pitches within agile teams of 3-5.",
    accomplishments: [
      "Built a Storybook playground plugin enabling users to build, save, and share interactive code snippets — delivered in 3 days using AI-assisted development",
      "Led migration of component documentation to Storybook, improving developer experience for all Expedia Group brand teams",
      "Integrated a cascading design token system enabling customer theming, inheritance, and overrides across the component library",
      "Built GitHub Actions workflows to automate testing by deploying branches and running them against the largest customer repo's test suite",
      "Implemented test coverage checks in CI pipeline enforcing 80% threshold on all PRs",
      "Built a Figma plugin to import token values and align designs to the EGDS specification",
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
