import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { education } from "@/data/education";

export function About() {
  return (
    <section id="about" data-section="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading title="About" />
        </ScrollReveal>
        <div className="mx-auto max-w-3xl space-y-5 text-text-secondary leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>
              I specialize in building shared UI component libraries and design systems at scale, writing
              clean TypeScript and shipping well-scoped work that teams can depend on.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              My path to software started in music production. I studied audio engineering at
              Full Sail University and spent years arranging tracks in a DAW. I discovered that
              what I loved about music was the same thing I love about software: the way
              interconnected systems create something greater than the sum of their parts.
              The instruments started collecting dust.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p>
              After a coding bootcamp where I graduated top of my cohort, I spent nearly four
              years building design system components at Expedia Group, collaborating
              cross-platform with designers and engineers across web, iOS, and Android. Now
              I&apos;m building with AI-assisted development tools and looking for the next
              team where I can make an impact.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mx-auto mt-12 max-w-3xl">
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.institution} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-medium text-text-primary">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-sm text-text-secondary">{edu.institution}</p>
                    {edu.honors.length > 0 && (
                      <p className="text-sm text-accent">
                        {edu.honors.join(" · ")}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary whitespace-nowrap">
                    {edu.start} – {edu.end}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
