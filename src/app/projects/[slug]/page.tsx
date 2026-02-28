import { notFound } from "next/navigation";

const slugs = ["wavelength", "chronicle"] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
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
