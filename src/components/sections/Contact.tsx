import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { identity } from "@/data/identity";

export function Contact() {
  return (
    <section id="contact" data-section="contact" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="label-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-display font-semibold tracking-tight text-balance text-text-primary">
            Let&apos;s build something together.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            {identity.region} · {identity.availability}.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button href={`mailto:${identity.email}`}>
                <Mail className="h-4 w-4" />
                {identity.email}
              </Button>
            </Magnetic>
            <Button variant="secondary" href={identity.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="secondary" href={identity.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button variant="ghost" href="/Eric-Chavez-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
