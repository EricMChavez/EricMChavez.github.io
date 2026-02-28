import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "WaveLength",
    slug: "wavelength",
    description:
      "A puzzle game built on a custom TypeScript game engine where players wire together processing nodes to transform waveforms into target outputs. Inspired by signal chains in Digital Audio Workstations. Built entirely with AI-assisted development in 11 days.",
    url: "https://ericmchavez.github.io/WaveLength",
    repo: "https://github.com/EricMChavez/WaveLength",
    technologies: ["TypeScript", "Canvas API", "Custom Game Engine", "Claude Code"],
    highlights: [
      "Built a custom game engine and 6 working puzzles in 11 days using AI-assisted development",
      "Engineered waveform graphing, processing, and validation systems from scratch",
      "Designed a node-based editor for player-built signal processing chains",
      "Implemented custom chip system allowing players to abstract and recursively call their own node logic chains",
      "Built consistent move and zoom animations to communicate abstraction depth",
      "LinkedIn showcase post gained 178 likes and 29 comments",
    ],
    featured: true,
    comingSoon: false,
  },
  {
    name: "Chronicle",
    slug: "chronicle",
    description:
      "A community-driven reading companion where users upload ebooks and generate progress-locked wiki entries — like a codex in a video game. Uses BYOK AI integration so users process books with their own API keys.",
    url: null,
    repo: null,
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Auth.js",
      "Docker",
      "Playwright",
    ],
    highlights: ["In development — not yet ready to showcase"],
    featured: false,
    comingSoon: true,
  },
];
