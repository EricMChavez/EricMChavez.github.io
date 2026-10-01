import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects
    .filter((project) => !project.comingSoon)
    .map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.name} | Eric Chavez`;
  const images = project.preview
    ? [{ url: project.preview.src, alt: project.preview.alt }]
    : [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Eric Chavez - Software Engineer",
        },
      ];

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      type: "article",
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: images.map((image) => image.url),
    },
  };
}

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
