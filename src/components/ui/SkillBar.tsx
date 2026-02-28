import { cn } from "@/lib/utils";

interface SkillBarProps {
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

const levels = ["beginner", "intermediate", "advanced", "expert"] as const;

export function SkillBar({ proficiency }: SkillBarProps) {
  const filledCount = levels.indexOf(proficiency) + 1;

  return (
    <div className="flex gap-1" aria-label={`Proficiency: ${proficiency}`}>
      {levels.map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-1.5 w-4 rounded-full",
            i < filledCount ? "bg-accent" : "bg-border"
          )}
        />
      ))}
    </div>
  );
}
