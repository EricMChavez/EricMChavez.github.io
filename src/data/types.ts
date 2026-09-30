export interface Experience {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  accomplishments: string[];
  technologies: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string | null;
  repo: string | null;
  /** Short context label shown on the card, e.g. "Private client work" */
  label: string | null;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  comingSoon: boolean;
  preview: ProjectImage | null;
  gallery: ProjectImage[];
}

export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools" | "platforms";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  years: number | null;
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  honors: string[];
}

export interface Interest {
  name: string;
  description: string;
  icon: "printer" | "cooking" | "hiking" | "music" | "game";
}

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}
