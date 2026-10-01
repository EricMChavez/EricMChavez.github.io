import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { identity } from "@/data/identity";

export function Contact() {
  return (
    <section id="contact" data-section="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading
            title="Get in Touch"
            subtitle={`Let's build something together. ${identity.region} · ${identity.availability}.`}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto flex max-w-md flex-col items-center gap-4">
            <Button href={`mailto:${identity.email}`}>
              <Mail className="h-4 w-4" />
              {identity.email}
            </Button>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="secondary"
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>
            <Button
              variant="ghost"
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
    </section>
  );
}
