import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { GalleryImage } from "./GalleryImage";

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
          <GalleryImage image={image} sizes="(min-width: 768px) 768px, 100vw" />
          {image.caption && (
            <figcaption className="label-mono">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
