import { identity } from "@/data/identity";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" data-section="testimonials" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What colleagues say"
            subtitle="From recommendations on LinkedIn."
          />
        </ScrollReveal>
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={(index % 2) * 0.08}>
              <figure className="flex h-full flex-col border-t border-border pt-6">
                <span className="font-display text-5xl leading-none text-accent" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 font-display text-lg leading-relaxed text-text-primary">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <a
                    href={t.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-sm font-medium text-text-primary"
                  >
                    {t.name}
                  </a>
                  <p className="label-mono mt-1">
                    {t.title}, {t.company}
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-12 text-sm">
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-accent"
            >
              Read the full recommendations on LinkedIn
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
