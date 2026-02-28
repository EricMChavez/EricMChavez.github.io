import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" data-section="experience" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="Where I've built things that matter."
          />
        </ScrollReveal>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <ScrollReveal key={job.company} delay={index * 0.1}>
              <Card>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {job.title}
                    </h3>
                    <p className="text-accent">{job.company}</p>
                  </div>
                  <p className="text-sm text-text-secondary whitespace-nowrap">
                    {job.start} – {job.end} · {job.location}
                  </p>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{job.summary}</p>
                <ul className="mt-4 space-y-2">
                  {job.accomplishments.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
