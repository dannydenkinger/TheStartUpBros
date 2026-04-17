import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { JsonLd } from "@/components/shared/JsonLd";
import { CaseStudyContent } from "./CaseStudyContent";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Case Study Not Found" };
    return {
      title: `${project.title} | StartUpBros`,
      description: project.description,
      openGraph: {
        title: `${project.title} — Case Study | StartUpBros`,
        description: project.description,
        url: `https://startupbros.dev/portfolio/${slug}`,
        images: [{ url: project.image }],
      },
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Organization",
      name: "StartUpBros",
      url: "https://startupbros.dev",
    },
    url: `https://startupbros.dev/portfolio/${slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <CaseStudyContent project={project} />
    </>
  );
}
