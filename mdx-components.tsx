import type { MDXComponents } from "mdx/types";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/projects/Callout";
import { Pipeline } from "@/components/projects/Pipeline";
import { ProjectEmbed } from "@/components/projects/ProjectEmbed";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Stats } from "@/components/projects/Stats";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Badge,
    Callout,
    Pipeline,
    ProjectEmbed,
    ProjectGallery,
    Stats,
    ...components,
  };
}
