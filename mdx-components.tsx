import type { MDXComponents } from "mdx/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectEmbed } from "@/components/projects/ProjectEmbed";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Badge,
    ProjectEmbed,
    ...components,
  };
}
