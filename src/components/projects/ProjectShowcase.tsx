import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProjectShowcaseProps {
  project: Project;
  /** Puts the image on the right instead of the left */
  flip?: boolean;
}

export function ProjectShowcase({ project, flip = false }: ProjectShowcaseProps) {
  const caseStudy = `/projects/${project.slug}`;

  return (
    <article
      data-accent={project.accent}
      className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
    >
      {project.preview && (
        <Link
          href={caseStudy}
          className={cn("block md:col-span-7", flip && "md:order-2")}
          aria-label={`${project.name} case study`}
          tabIndex={-1}
        >
          <ViewTransition name={`project-cover-${project.slug}`}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-300 group-hover:border-accent">
              <Image
                src={project.preview.src}
                alt={project.preview.alt}
                fill
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
              />
            </div>
          </ViewTransition>
        </Link>
      )}

      <div className="md:col-span-5">
        <p className="label-mono flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {project.featured ? "Featured project" : project.label}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          <Link href={caseStudy} className="transition-colors hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="mt-4 leading-relaxed text-text-secondary">{project.description}</p>

        <dl className="mt-6 grid gap-4 border-t border-border pt-5">
          <div>
            <dt className="label-mono">Result</dt>
            <dd className="mt-1 text-text-primary">{project.outcome}</dd>
          </div>
          <div>
            <dt className="label-mono">Built with</dt>
            <dd className="mt-1 font-mono text-sm text-text-secondary">
              {project.technologies.join(" · ")}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={caseStudy}>
            Read the case study
            <ArrowRight className="h-4 w-4 transition-transform motion-safe:group-hover/button:translate-x-0.5" />
          </Button>
          {project.url && (
            <Button variant="secondary" href={project.url} target="_blank" rel="noopener noreferrer">
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
      </div>
    </article>
  );
}
