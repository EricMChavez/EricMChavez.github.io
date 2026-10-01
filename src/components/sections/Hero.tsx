import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { identity } from "@/data/identity";

export function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <ScrollReveal>
        <p className="mb-4 text-sm font-medium tracking-wide text-accent uppercase">
          {identity.title}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
          {identity.name}
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="mt-6 max-w-xl text-lg text-text-secondary">
          {identity.tagline}
        </p>
        <p className="mt-3 text-sm text-text-secondary">
          {identity.region} · {identity.availability}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects">
            <ArrowDown className="h-4 w-4" />
            View My Work
          </Button>
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
    </section>
  );
}
