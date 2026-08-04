"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CountUp } from "@/components/shared/CountUp";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Plate } from "@/components/shared/Plate";
import { projects } from "@/data/portfolio";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";
import type { GalleryBlock, PortfolioProject } from "@/types";

const pad = (n: number) => String(n).padStart(2, "0");

export function CaseStudyContent({ project }: { project: PortfolioProject }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];
  const hasMeta = project.client || project.services || project.year;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ─── Hero — label / display title / lede + meta specs ──────── */}
      <section className="pt-12 md:pt-24 pb-10 md:pb-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <AnimateIn variant="fadeUp">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
              <p className="badge-pill text-micro-label">
                <span aria-hidden className="label-dot" />
                <span className="lowercase">
                  {project.industry ?? project.tags.slice(0, 3).join(" · ")}
                </span>
              </p>
              {project.year && (
                <span className="text-[13px] text-muted-foreground tabular-nums">
                  {project.year}
                </span>
              )}
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.08}>
            <h1 className="text-display max-md:text-[2.75rem] max-md:leading-[1.1] text-foreground max-w-[1100px]">
              {project.title}
            </h1>
          </AnimateIn>

          <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-y-10 mt-8 md:mt-14">
            <AnimateIn
              variant="fadeUp"
              delay={0.16}
              className="col-span-12 lg:col-span-6"
            >
              <p className="text-body-lg text-muted-foreground max-w-[680px]">
                {project.description}
              </p>
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-secondary inline-flex items-center gap-2 mt-6 -ml-3"
                >
                  Visit Website
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
            </AnimateIn>

            {hasMeta && (
              <AnimateIn
                variant="fadeUp"
                delay={0.22}
                className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end"
              >
                <dl>
                  {project.client && (
                    <SpecRow label="Client" value={project.client} />
                  )}
                  {project.services && (
                    <SpecRow
                      label="Services"
                      value={project.services.join(" · ")}
                    />
                  )}
                  {project.year && <SpecRow label="Year" value={project.year} />}
                </dl>
              </AnimateIn>
            )}
          </div>
        </div>
      </section>

      {/* ─── Hero plate ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1600px] px-6 md:px-10 mb-14 md:mb-28">
        <AnimateIn variant="scaleIn" delay={0.1}>
          <Plate caption={project.slug} fig="01">
            <div className="relative aspect-[16/10] md:aspect-[2.2/1] w-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={getWrapperStyle(project.image)}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} hero`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1360px"
                  style={getImageStyle(project.image)}
                />
              </div>
            </div>
          </Plate>
        </AnimateIn>
      </section>

      <GalleryStyleBody project={project} />

      {/* ─── Next case study (ghost rail) ──────────────────────────── */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <AnimateIn>
            <p className="badge-pill text-micro-label mb-6">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">Next case study</span>
            </p>
          </AnimateIn>
          <AnimateIn delay={0.06}>
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-10 border-y border-border py-7 md:py-8"
            >
              <span className="text-xs font-medium tabular-nums text-muted-foreground whitespace-nowrap lowercase">
                NEXT / {pad(nextIndex + 1)}
              </span>
              <h3 className="flex-1 text-[clamp(1.75rem,3.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.025em] text-foreground/20 max-md:text-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1">
                {nextProject.title}
              </h3>
              <div className="hidden md:block w-[200px] shrink-0 aspect-[4/3] rounded-[14px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="relative w-full h-full"
                  style={getWrapperStyle(nextProject.image)}
                >
                  <Image
                    src={nextProject.image}
                    alt={nextProject.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                    style={getImageStyle(nextProject.image)}
                  />
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Final CTA — black grain band, landing language ────────── */}
      <section className="band grain relative">
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-32">
          <AnimateIn>
            <div className="grid grid-cols-12 gap-6">
              <h2 className="col-span-12 lg:col-span-7 text-display">
                Ready to <span className="accent-word">Build</span> Something
                Like This?
              </h2>
              <p className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg">
                Book a free strategy call. We&apos;ll scope your project and map
                out the fastest path to launch.
              </p>
              <div className="col-span-12 mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <MagneticButton>
                  <CTAButton href="/strategy-call" variant="primary">
                    Book Strategy Call
                  </CTAButton>
                </MagneticButton>
                <CTAButton href="/portfolio" variant="secondary">
                  View More Work
                </CTAButton>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}

// ─── Gallery-style body ───────────────────────────────────────────────────
function GalleryStyleBody({ project }: { project: PortfolioProject }) {
  return (
    <>
      {/* Overview */}
      {project.overview && (
        <section className="pb-12 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid grid-cols-12 gap-6">
              <AnimateIn className="col-span-12 lg:col-span-3">
                <p className="badge-pill text-micro-label">
                  <span aria-hidden className="label-dot" />
                  <span className="lowercase">Overview</span>
                </p>
              </AnimateIn>
              <AnimateIn delay={0.08} className="col-span-12 lg:col-span-8">
                <p className="text-[18px] md:text-[21px] text-foreground leading-[1.6] tracking-[-0.005em]">
                  {project.overview}
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>
      )}

      {/* Gallery flow */}
      {project.gallery && (
        <section className="pb-12 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col gap-12 md:gap-24">
            {project.gallery.map((block, i) => (
              <GalleryBlockRenderer
                key={i}
                block={block}
                index={i}
                slug={project.slug}
              />
            ))}
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="py-12 md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <AnimateIn>
              <p className="badge-pill text-micro-label mb-8 md:mb-12">
                <span aria-hidden className="label-dot" />
                <span className="lowercase">The Outcome in Numbers</span>
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-10">
              {project.metrics.map((metric, i) => (
                <AnimateIn key={metric.label} delay={i * 0.08}>
                  <div className="border-t border-border pt-6 md:pt-8">
                    <p className="text-[clamp(2.75rem,4.5vw,4rem)] font-medium leading-none tracking-[-0.03em] tabular-nums text-foreground mb-4 break-words">
                      <CountUp value={metric.value} />
                    </p>
                    <p className="text-caption text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      {project.quote && (
        <section className="pb-12 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <AnimateIn>
              <figure className="relative overflow-hidden rounded-[20px] bg-card p-8 md:p-14">
                <span aria-hidden className="label-dot mb-8 md:mb-10 block" />
                <blockquote className="text-[clamp(1.5rem,2.8vw,2.375rem)] font-medium leading-[1.3] tracking-[-0.02em] text-foreground max-w-[1050px]">
                  &ldquo;{project.quote.text}&rdquo;
                </blockquote>
                {(project.quote.author || project.quote.role) && (
                  <figcaption className="mt-8 md:mt-10 flex flex-wrap items-baseline gap-x-2 text-[15px]">
                    {project.quote.author && (
                      <span className="font-medium text-foreground">
                        {project.quote.author}
                      </span>
                    )}
                    {project.quote.author && project.quote.role && (
                      <span aria-hidden className="text-muted-foreground">
                        —
                      </span>
                    )}
                    {project.quote.role && (
                      <span className="text-muted-foreground">
                        {project.quote.role}
                      </span>
                    )}
                  </figcaption>
                )}
              </figure>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Tech stack + outcomes (compact) */}
      <section className="pb-12 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-y-12">
          <AnimateIn className="md:col-span-5 lg:col-span-4">
            <p className="badge-pill text-micro-label mb-6">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">Tech Stack</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-card px-4 py-2 text-[13px] font-medium leading-[1.3] text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08} className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
            <p className="badge-pill text-micro-label mb-3">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">Highlights</span>
            </p>
            <ul>
              {project.outcomes.map((outcome, i) => (
                <li
                  key={outcome}
                  className="flex items-baseline gap-3 py-3.5 border-b border-border/60 last:border-b-0"
                >
                  <span className="text-xs font-medium tabular-nums text-muted-foreground">
                    {pad(i + 1)}
                  </span>
                  <span className="flex-1 text-[15px] text-foreground leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

// ─── Gallery block renderer ──────────────────────────────────────────────
function GalleryBlockRenderer({
  block,
  index,
  slug,
}: {
  block: GalleryBlock;
  index: number;
  slug: string;
}) {
  const fig = pad(index + 2);

  if (block.type === "full") {
    return (
      <AnimateIn variant="fadeUp" delay={Math.min(index * 0.04, 0.2)}>
        <div className="flex flex-col">
          <Plate>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={getWrapperStyle(block.image)}
              >
                <Image
                  src={block.image}
                  alt={block.alt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1360px"
                  style={getImageStyle(block.image)}
                />
              </div>
            </div>
          </Plate>
          <FigCaption caption={block.caption} slug={slug} fig={fig} />
        </div>
      </AnimateIn>
    );
  }

  if (block.type === "twoUp") {
    return (
      <AnimateIn variant="fadeUp" delay={Math.min(index * 0.04, 0.2)}>
        <div className="flex flex-col">
          <Plate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              {block.images.map((img, i) => (
                <div
                  key={`${img.src}-${i}`}
                  className="relative aspect-[4/3] w-full overflow-hidden"
                >
                  <div
                    className="absolute inset-0"
                    style={getWrapperStyle(img.src)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={getImageStyle(img.src)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Plate>
          <FigCaption caption={block.caption} slug={slug} fig={fig} />
        </div>
      </AnimateIn>
    );
  }

  // imageWithCaption — image + side text
  const imageOnLeft = block.align !== "right";
  return (
    <AnimateIn variant="fadeUp" delay={Math.min(index * 0.04, 0.2)}>
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center ${
          imageOnLeft ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        <div className="md:col-span-7">
          <Plate caption={slug} fig={fig}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={getWrapperStyle(block.image)}
              >
                <Image
                  src={block.image}
                  alt={block.alt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  style={getImageStyle(block.image)}
                />
              </div>
            </div>
          </Plate>
        </div>
        <div className="md:col-span-5">
          {block.heading && (
            <h3 className="text-[1.5rem] md:text-[1.875rem] font-medium leading-[1.2] tracking-[-0.02em] text-foreground mb-5">
              {block.heading}
            </h3>
          )}
          <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.6]">
            {block.body}
          </p>
        </div>
      </div>
    </AnimateIn>
  );
}

// ─── Single quiet caption line — caption left, figure number right ──────
function FigCaption({
  caption,
  slug,
  fig,
}: {
  caption?: string;
  slug: string;
  fig: string;
}) {
  return (
    <div className="mt-3 flex items-baseline justify-between gap-6 text-xs text-muted-foreground">
      <span className="min-w-0 max-w-[680px]">{caption ?? slug}</span>
      <span className="ml-auto whitespace-nowrap">FIG. {fig}</span>
    </div>
  );
}

// ─── Spec row (quiet spec-sheet meta) ────────────────────────────────────
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-1 py-3.5 border-b border-border/60 first:pt-0 last:border-b-0 last:pb-0">
      <dt className="text-caption text-muted-foreground shrink-0">{label}</dt>
      <dd className="text-[15px] font-medium text-foreground text-right max-md:text-left">
        {value}
      </dd>
    </div>
  );
}
