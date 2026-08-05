import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { ogImage, siteUrl } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/JsonLd";
import { ServicePageContent } from "./ServicePageContent";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    return {
      title: service.title,
      description: service.longDescription,
      alternates: { canonical: `${siteUrl}/services/${slug}` },
      openGraph: {
        title: `${service.title} | StartUpBros`,
        description: service.longDescription,
        url: `${siteUrl}/services/${slug}`,
        images: [ogImage],
      },
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      name: "StartUpBros",
      url: siteUrl,
    },
    areaServed: "Worldwide",
    url: `${siteUrl}/services/${slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServicePageContent service={service} />
    </>
  );
}
