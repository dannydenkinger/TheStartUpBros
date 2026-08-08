import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { ogImage, siteUrl } from "@/lib/metadata";

const pageUrl = `${siteUrl}/tools`;

export const metadata: Metadata = {
  title: "Free MVP Planning Tools",
  description:
    "Free tools for startup founders planning an MVP: prioritize scope, estimate development effort, and turn product decisions into a clearer launch plan.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Free MVP Planning Tools | StartUpBros",
    description:
      "Practical tools for scoping a startup MVP, estimating development effort, and planning a focused first release.",
    url: pageUrl,
    images: [ogImage],
  },
};

const tools = [
  {
    number: "01",
    name: "MVP Scope Planner",
    href: "/tools/mvp-scope",
    description:
      "Turn five product decisions into a prioritized first release, planning timeline, technical starting point, and shareable build brief.",
    output: "Build now / later roadmap",
    className: "lg:col-span-7",
  },
  {
    number: "02",
    name: "SaaS Cost Calculator",
    href: "/tools/saas-cost",
    description:
      "Select the systems your SaaS needs and get a practical estimate of development effort and overall complexity.",
    output: "Scope and timeline estimate",
    className: "lg:col-span-5",
  },
] as const;

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "StartUpBros MVP Planning Tools",
  itemListElement: tools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.name,
    url: `${siteUrl}${tool.href}`,
  })),
};

export default function ToolsPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <div className="min-h-screen bg-background">
        <section className="px-6 pb-12 pt-12 md:px-10 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-[1600px]">
            <AnimateIn variant="fadeUp">
              <div className="badge-pill text-micro-label mb-6">
                <span aria-hidden className="label-dot" />
                <span className="lowercase">Founder toolkit</span>
              </div>
              <div className="grid items-end gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                <h1 className="text-display max-w-[820px]">
                  Make the product decisions that <span className="accent-word">move a build forward.</span>
                </h1>
                <p className="text-body-lg max-w-[560px] lg:pb-1">
                  Practical planning tools for founders who need a clearer MVP,
                  not another generic startup worksheet.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 lg:grid-cols-12">
            {tools.map((tool, index) => (
              <AnimateIn
                key={tool.name}
                variant="fadeUp"
                delay={index * 0.08}
                className={tool.className}
              >
                <Link
                  href={tool.href}
                  className="group flex min-h-[360px] flex-col rounded-[24px] bg-card p-6 transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-(--surface-card-hover) active:translate-y-px sm:p-8 md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {tool.number}
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground">
                      {tool.output}
                    </span>
                  </div>
                  <div className="mt-auto pt-16">
                    <h2 className="text-h1 max-w-[620px]">{tool.name}</h2>
                    <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted-foreground">
                      {tool.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-foreground">
                      Open tool
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <AnimateIn variant="fadeUp">
              <div>
                <p className="text-micro-label text-muted-foreground mb-3">
                  Built from real delivery work
                </p>
                <h2 className="text-h1">Useful before the first meeting.</h2>
              </div>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.08}>
              <p className="text-body-lg max-w-[760px]">
                These tools use the same questions that shape an actual build:
                who the product serves, what outcome matters, which systems are
                essential, and what can wait. Use the result on your own or bring
                it into a strategy call.
              </p>
            </AnimateIn>
          </div>
        </section>
      </div>
      <FinalCTA index={null} />
    </>
  );
}
