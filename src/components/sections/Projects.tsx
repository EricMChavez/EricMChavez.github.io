import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" data-section="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Things I've built"
            subtitle="A game, a client product and an app my family uses every day."
          />
        </ScrollReveal>
        <div className="grid gap-20 md:gap-28">
          {projects
            .filter((project) => !project.comingSoon)
            .map((project, index) => (
              <ScrollReveal key={project.slug}>
                <ProjectShowcase project={project} flip={index % 2 === 1} />
              </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
}
