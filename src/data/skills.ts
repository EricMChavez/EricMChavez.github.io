import type { Skill } from "./types";

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "languages", proficiency: "expert", years: 4 },
  { name: "JavaScript", category: "languages", proficiency: "advanced", years: 7 },
  { name: "HTML/CSS", category: "languages", proficiency: "advanced", years: 7 },

  // Frameworks & Libraries
  { name: "React", category: "frameworks", proficiency: "expert", years: 7 },
  { name: "Next.js", category: "frameworks", proficiency: "intermediate", years: null },
  { name: "Node.js", category: "frameworks", proficiency: "advanced", years: 6 },
  { name: "Redux", category: "frameworks", proficiency: "advanced", years: null },
  { name: "Storybook", category: "frameworks", proficiency: "expert", years: 4 },
  { name: "GraphQL", category: "frameworks", proficiency: "intermediate", years: null },
  { name: "Tailwind CSS", category: "frameworks", proficiency: "intermediate", years: null },
  { name: "Sass/SCSS", category: "frameworks", proficiency: "advanced", years: null },
  { name: "Framer Motion", category: "frameworks", proficiency: "intermediate", years: null },
  { name: "Jest", category: "frameworks", proficiency: "advanced", years: null },
  { name: "Express", category: "frameworks", proficiency: "intermediate", years: null },

  // Tools
  { name: "Git / GitHub", category: "tools", proficiency: "advanced", years: 7 },
  { name: "GitHub Actions", category: "tools", proficiency: "advanced", years: null },
  { name: "Figma", category: "tools", proficiency: "intermediate", years: null },

  // Platforms
  { name: "AWS (S3, Lambda)", category: "platforms", proficiency: "intermediate", years: null },
  { name: "MongoDB", category: "platforms", proficiency: "intermediate", years: null },
  { name: "Vercel", category: "platforms", proficiency: "intermediate", years: null },
];
