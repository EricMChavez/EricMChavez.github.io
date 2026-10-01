import { Quote } from "lucide-react";
import { identity } from "@/data/identity";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" data-section="testimonials" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading
            title="Testimonials"
            subtitle="From colleagues' recommendations on LinkedIn."
          />
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 0.1}>
              <Card>
                <Quote className="mb-3 h-6 w-6 text-accent/40" />
                <blockquote className="text-sm text-text-secondary leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-medium text-text-primary">
                    <a
                      href={t.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent hover:underline"
                    >
                      {t.name}
                    </a>
                  </p>
                  <p className="text-xs text-text-secondary">
                    {t.title}, {t.company}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-8 text-center text-sm">
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Read the full recommendations on LinkedIn
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
