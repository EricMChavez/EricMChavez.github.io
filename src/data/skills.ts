import type { Skill } from "./types";

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "languages", proficiency: "expert" },
  { name: "JavaScript", category: "languages", proficiency: "advanced" },
  { name: "HTML/CSS", category: "languages", proficiency: "advanced" },

  // Frameworks & Libraries
  { name: "React", category: "frameworks", proficiency: "expert" },
  { name: "Next.js", category: "frameworks", proficiency: "intermediate" },
  { name: "Node.js", category: "frameworks", proficiency: "advanced" },
  { name: "Redux", category: "frameworks", proficiency: "advanced" },
  { name: "Storybook", category: "frameworks", proficiency: "expert" },
  { name: "GraphQL", category: "frameworks", proficiency: "intermediate" },
  { name: "Tailwind CSS", category: "frameworks", proficiency: "intermediate" },
  { name: "Sass/SCSS", category: "frameworks", proficiency: "advanced" },
  { name: "Framer Motion", category: "frameworks", proficiency: "intermediate" },
  { name: "Jest", category: "frameworks", proficiency: "advanced" },
  { name: "Express", category: "frameworks", proficiency: "intermediate" },
  { name: "Zustand", category: "frameworks", proficiency: "advanced" },
  { name: "Electron", category: "frameworks", proficiency: "intermediate" },
  { name: "Canvas API", category: "frameworks", proficiency: "advanced" },
  { name: "Vitest", category: "frameworks", proficiency: "intermediate" },
  { name: "Playwright", category: "frameworks", proficiency: "intermediate" },

  // Tools
  { name: "Git / GitHub", category: "tools", proficiency: "advanced" },
  { name: "GitHub Actions", category: "tools", proficiency: "advanced" },
  { name: "Figma", category: "tools", proficiency: "intermediate" },
  { name: "Claude Code", category: "tools", proficiency: "expert" },

  // Platforms
  { name: "AWS (S3, Lambda)", category: "platforms", proficiency: "intermediate" },
  { name: "MongoDB", category: "platforms", proficiency: "intermediate" },
  { name: "PostgreSQL / Supabase", category: "platforms", proficiency: "intermediate" },
  { name: "SQLite", category: "platforms", proficiency: "intermediate" },
  { name: "Vercel", category: "platforms", proficiency: "intermediate" },
];
