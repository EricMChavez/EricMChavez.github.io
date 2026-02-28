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

export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string | null;
  repo: string | null;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  comingSoon: boolean;
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
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}
