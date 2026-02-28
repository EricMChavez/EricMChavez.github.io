import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skills } from "@/data/skills";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  tools: "Tools",
  platforms: "Platforms",
};

const categoryOrder = ["languages", "frameworks", "tools", "platforms"] as const;

export function Skills() {
  return (
    <section id="skills" data-section="skills" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading title="Skills" />
        </ScrollReveal>
        <div className="grid gap-10 sm:grid-cols-2">
          {categoryOrder.map((category, catIndex) => {
            const categorySkills = skills.filter(
              (s) => s.category === category
            );
            if (categorySkills.length === 0) return null;

            return (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-text-primary">
                    {categoryLabels[category]}
                  </h3>
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-text-secondary">
                          {skill.name}
                        </span>
                        <SkillBar proficiency={skill.proficiency} />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
