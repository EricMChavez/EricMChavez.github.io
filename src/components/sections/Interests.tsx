import { ChefHat, Gamepad2, Mountain, Music, Printer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { interests } from "@/data/interests";
import type { Interest } from "@/data/types";

const icons: Record<Interest["icon"], LucideIcon> = {
  printer: Printer,
  cooking: ChefHat,
  hiking: Mountain,
  music: Music,
  game: Gamepad2,
};

export function Interests() {
  return (
    <section id="interests" data-section="interests" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading
            title="Off the Clock"
            subtitle="What I'm into when I'm not shipping."
          />
        </ScrollReveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => {
            const Icon = icons[interest.icon];
            return (
              <li key={interest.name}>
                <ScrollReveal delay={index * 0.05} className="h-full">
                  <div className="flex h-full gap-4 rounded-xl border border-border bg-surface p-5">
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-text-primary">{interest.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
