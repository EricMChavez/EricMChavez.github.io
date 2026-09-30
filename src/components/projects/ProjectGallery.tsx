import Image from "next/image";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  slug: string;
}

export function ProjectGallery({ slug }: ProjectGalleryProps) {
  const project = projects.find((p) => p.slug === slug);
  if (!project || project.gallery.length === 0) return null;

  const isPortrait = (width: number, height: number) => height > width;

  return (
    <div className="not-prose my-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {project.gallery.map((image) => (
        <figure
          key={image.src}
          className={cn(
            "flex flex-col gap-2",
            !isPortrait(image.width, image.height) && "col-span-2 sm:col-span-3"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full rounded-lg border border-border"
          />
          {image.caption && (
            <figcaption className="text-center text-sm text-text-secondary">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
