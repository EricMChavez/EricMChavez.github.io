interface SectionHeadingProps {
  /** Short mono label above the heading, e.g. "Selected work" */
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="label-mono flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-title font-semibold tracking-tight text-balance text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
