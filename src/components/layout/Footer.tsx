import { Github, Linkedin, Mail } from "lucide-react";
import { identity } from "@/data/identity";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} {identity.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
