import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border bg-surface px-2 py-1 font-mono text-label font-medium tracking-wide text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
