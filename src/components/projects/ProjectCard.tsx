import Image from "next/image";
import { ExternalLink, ArrowRight, Github } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "h-full",
        project.featured && "border-accent/20",
        project.comingSoon && "opacity-70"
      )}
    >
      <div className="flex h-full flex-col gap-4">
        {project.preview && (
          <div className="relative -mx-2 -mt-2 aspect-video overflow-hidden rounded-lg border border-border bg-background">
            <Image
              src={project.preview.src}
              alt={project.preview.alt}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover object-top"
            />
          </div>
        )}
        {(project.featured || project.label) && (
          <span className="text-xs font-medium tracking-wide text-accent uppercase">
            {project.featured ? "Featured Project" : project.label}
          </span>
        )}
        <h3 className="text-xl font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {!project.comingSoon && (
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {project.url && (
              <Button
                variant="primary"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </Button>
            )}
            {project.repo && (
              <Button
                variant="secondary"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Source
              </Button>
            )}
            <Button variant="secondary" href={`/projects/${project.slug}`}>
              Case Study
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
        {project.comingSoon && (
          <p className="pt-2 text-sm font-medium text-text-secondary">
            Coming Soon
          </p>
        )}
      </div>
    </Card>
  );
}
