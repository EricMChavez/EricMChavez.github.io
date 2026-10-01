import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" data-section="experience" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built things that matter"
          />
        </ScrollReveal>
        <ol className="grid gap-14">
          {experience.map((job) => (
            <li key={job.company}>
              <ScrollReveal className="grid gap-4 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-3">
                  <p className="label-mono text-text-primary">
                    {job.start} – {job.end}
                  </p>
                  <p className="label-mono mt-1">{job.location}</p>
                </div>
                <div className="relative border-l border-border pl-6 md:col-span-9">
                  <span
                    className="absolute top-2 -left-[4.5px] h-2 w-2 rounded-full bg-accent ring-4 ring-surface"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
                    {job.title}
                  </h3>
                  <p className="mt-1 font-medium text-accent">{job.company}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">{job.summary}</p>
                  <ul className="mt-5 grid max-w-2xl gap-2.5">
                    {job.accomplishments.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                        <span className="mt-2 h-px w-3 shrink-0 bg-signal" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-xs text-text-secondary">
                    {job.technologies.join(" · ")}
                  </p>
                  {job.caseStudy && (
                    <Link
                      href={job.caseStudy}
                      className="link-draw mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent"
                    >
                      Read the case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
