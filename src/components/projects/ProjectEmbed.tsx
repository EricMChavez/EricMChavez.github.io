import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectEmbedProps {
  src: string;
  title: string;
}

// A launch button rather than an iframe: the embedded game needs more room
// than the case-study column gives it, so it opens in its own tab.
export function ProjectEmbed({ src, title }: ProjectEmbedProps) {
  return (
    <div className="not-prose my-8">
      <Button href={src} target="_blank" rel="noopener noreferrer">
        Play {title}
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </Button>
    </div>
  );
}
