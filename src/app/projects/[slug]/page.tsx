import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects
    .filter((project) => !project.comingSoon)
    .map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Content } = await import(
      `@/content/projects/${slug}.mdx`
    );
    return <Content />;
  } catch {
    notFound();
  }
}
