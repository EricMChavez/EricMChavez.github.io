import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skills } from "@/data/skills";
import type { Skill } from "@/data/types";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  tools: "Tools",
  platforms: "Platforms",
};

const categoryOrder = ["languages", "frameworks", "tools", "platforms"] as const;

const proficiencyRank: Record<Skill["proficiency"], number> = {
  expert: 0,
  advanced: 1,
  intermediate: 2,
  beginner: 3,
};

export function Skills() {
  return (
    <section id="skills" data-section="skills" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading title="Skills" />
        </ScrollReveal>
        <div className="grid gap-10 sm:grid-cols-2">
          {categoryOrder.map((category, catIndex) => {
            const categorySkills = skills
              .filter((s) => s.category === category)
              .sort(
                (a, b) =>
                  proficiencyRank[a.proficiency] - proficiencyRank[b.proficiency]
              );
            if (categorySkills.length === 0) return null;

            return (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-text-primary">
                    {categoryLabels[category]}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <li key={skill.name}>
                        <Badge>{skill.name}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
