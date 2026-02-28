import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
        <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent hover:prose-a:text-accent-hover prose-strong:text-text-primary prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
          {children}
        </article>
      </div>
    </main>
  );
}
