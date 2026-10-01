interface CalloutProps {
  children: React.ReactNode;
}

/** A pull quote for the one idea a reader should leave a case study with */
export function Callout({ children }: CalloutProps) {
  return (
    <aside className="not-prose my-12 border-l-2 border-accent py-1 pl-6">
      <p className="font-display text-2xl leading-snug font-medium text-balance text-text-primary sm:text-3xl">
        {children}
      </p>
    </aside>
  );
}
