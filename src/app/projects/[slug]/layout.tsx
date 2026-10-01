import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main id="main-content" data-accent={project.accent} className="pt-24 pb-24">
      <header className="mx-auto max-w-5xl px-6">
        <Link
          href="/#projects"
          className="link-draw inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
        <p className="label-mono mt-10 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {project.featured ? "Featured project" : project.label} · Case study
        </p>
        <h1 className="mt-3 font-display text-display font-semibold tracking-tight text-text-primary">
          {project.name}
        </h1>
        <div className="mt-6 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="label-mono">Result</p>
            <p className="mt-1 text-text-primary">{project.outcome}</p>
          </div>
          {(project.url || project.repo) && (
            <div className="flex flex-wrap gap-3">
              {project.url && (
                <Button href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View live
                </Button>
              )}
              {project.repo && (
                <Button variant="secondary" href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Source
                </Button>
              )}
            </div>
          )}
        </div>
        {project.preview && (
          <ViewTransition name={`project-cover-${project.slug}`}>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src={project.preview.src}
                alt={project.preview.alt}
                fill
                priority
                sizes="(min-width: 1024px) 976px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </ViewTransition>
        )}
      </header>

      <div className="mx-auto mt-14 max-w-3xl px-6">
        <article className="prose max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-text-primary prose-h2:mt-16 prose-h2:text-3xl prose-p:text-text-secondary prose-a:text-accent hover:prose-a:text-accent-hover prose-strong:text-text-primary prose-li:text-text-secondary prose-li:marker:text-accent prose-hr:border-border prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none [&>p:first-child]:text-xl [&>p:first-child]:leading-relaxed [&>p:first-child]:text-text-primary">
          {children}
        </article>
      </div>
    </main>
  );
}
