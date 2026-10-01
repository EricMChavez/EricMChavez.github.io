import Image from "next/image";
import { ChefHat, Gamepad2, Mountain, Music, Printer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { education } from "@/data/education";
import { identity } from "@/data/identity";
import { interests } from "@/data/interests";
import { skills } from "@/data/skills";
import type { Interest, Skill } from "@/data/types";

const interestIcons: Record<Interest["icon"], LucideIcon> = {
  printer: Printer,
  cooking: ChefHat,
  hiking: Mountain,
  music: Music,
  game: Gamepad2,
};

const skillGroups: { category: Skill["category"]; label: string }[] = [
  { category: "languages", label: "Languages" },
  { category: "frameworks", label: "Frameworks & libraries" },
  { category: "tools", label: "Tools" },
  { category: "platforms", label: "Platforms" },
];

const proficiencyRank: Record<Skill["proficiency"], number> = {
  expert: 0,
  advanced: 1,
  intermediate: 2,
  beginner: 3,
};

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="label-mono border-b border-border pb-2 text-text-primary">{children}</h3>
  );
}

export function About() {
  return (
    <section id="about" data-section="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading eyebrow="About" title="From signal chains to software" />
        </ScrollReveal>

        {/* DOM order is photo, story, sidebar so phones read top to bottom;
            from lg the photo and sidebar share the right-hand column */}
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12">
          <ScrollReveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <figure className="max-w-sm">
              <Image
                src="/images/about/headshot.webp"
                alt="Eric Chavez in a beanie and glasses, standing in a mossy forest of ferns and fallen logs"
                width={900}
                height={600}
                sizes="(min-width: 640px) 384px, 100vw"
                className="h-auto w-full rounded-lg border border-border"
              />
              <figcaption className="label-mono mt-3">
                {identity.name} · {identity.region}
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed text-text-secondary">
              <p>
                I specialize in building shared UI component libraries and design systems at scale, writing
                clean TypeScript and shipping well-scoped work that teams can depend on.
              </p>
              <p>
                My path to software started in music production. I studied audio engineering at
                Full Sail University and spent years arranging tracks in a DAW. I discovered that
                what I loved about music was the same thing I love about software: the way
                interconnected systems create something greater than the sum of their parts.
                The instruments started collecting dust.
              </p>
              <p>
                After a coding bootcamp where I graduated top of my cohort, I spent nearly four
                years building design system components at Expedia Group, collaborating
                cross-platform with designers and engineers across web, iOS, and Android. Now
                I&apos;m building with AI-assisted development tools and looking for the next
                team where I can make an impact.
              </p>
            </div>

            <div className="mt-14">
              <SubHeading>Off the clock</SubHeading>
              <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                {interests.map((interest) => {
                  const Icon = interestIcons[interest.icon];
                  return (
                    <li key={interest.name} className="flex gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-text-primary">{interest.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                          {interest.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="grid content-start gap-12 lg:col-span-5 lg:col-start-8 lg:row-start-2">
            <div>
              <SubHeading>Toolkit</SubHeading>
              <dl className="mt-5 grid gap-5">
                {skillGroups.map(({ category, label }) => (
                  <div key={category}>
                    <dt className="label-mono">{label}</dt>
                    <dd className="mt-1.5 font-mono text-sm leading-relaxed text-text-primary">
                      {skills
                        .filter((skill) => skill.category === category)
                        .sort((a, b) => proficiencyRank[a.proficiency] - proficiencyRank[b.proficiency])
                        .map((skill) => skill.name)
                        .join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <SubHeading>Education</SubHeading>
              <ul className="mt-5 grid gap-5">
                {education.map((edu) => (
                  <li key={edu.institution}>
                    <p className="label-mono">
                      {edu.start} – {edu.end}
                    </p>
                    <p className="mt-1 font-medium text-text-primary">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-sm text-text-secondary">{edu.institution}</p>
                    {edu.honors.length > 0 && (
                      <p className="mt-1 text-sm text-accent">{edu.honors.join(" · ")}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
