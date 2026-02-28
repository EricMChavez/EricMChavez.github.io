import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
