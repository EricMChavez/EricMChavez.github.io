import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SignalScope } from "@/components/ui/SignalScope";
import { identity } from "@/data/identity";

export function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center px-6 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <ScrollReveal>
            <p className="label-mono">
              {identity.title} · {identity.region}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="mt-5 font-display text-display font-semibold tracking-tight text-text-primary">
              {identity.name}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
              {identity.tagline}
            </p>
            <p className="label-mono mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-2 text-text-primary">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {identity.availability}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button href="#projects">
                  <ArrowDown className="h-4 w-4 transition-transform motion-safe:group-hover/button:translate-y-0.5" />
                  View my work
                </Button>
              </Magnetic>
              <Button
                variant="secondary"
                href="/Eric-Chavez-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <SignalScope />
        </ScrollReveal>
      </div>
    </section>
  );
}
