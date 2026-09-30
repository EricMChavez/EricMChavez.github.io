import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" data-section="projects" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            subtitle="Things I've built to learn, create, and ship."
          />
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={index * 0.1}
              className={project.featured ? "md:col-span-2" : undefined}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
