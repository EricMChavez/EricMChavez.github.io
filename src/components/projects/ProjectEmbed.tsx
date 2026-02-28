"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface ProjectEmbedProps {
  src: string;
  title: string;
}

export function ProjectEmbed({ src, title }: ProjectEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="my-8">
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
            </div>
          )}
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 h-full w-full"
            onLoad={() => setLoaded(true)}
            allow="fullscreen"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-text-secondary">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent hover:text-accent-hover"
        >
          Open in new tab
          <ExternalLink className="h-3 w-3" />
        </a>
      </p>
    </div>
  );
}
