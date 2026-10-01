interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  items: Stat[];
}

/** A row of headline numbers, e.g. test counts or commit totals */
export function Stats({ items }: StatsProps) {
  return (
    <dl className="not-prose my-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col-reverse gap-1 bg-surface p-4">
          <dt className="label-mono">{item.label}</dt>
          <dd className="font-display text-3xl font-semibold tracking-tight text-text-primary tabular-nums">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
