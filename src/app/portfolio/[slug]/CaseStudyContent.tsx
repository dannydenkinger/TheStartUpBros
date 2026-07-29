"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="pt-16 md:pt-24 pb-12">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <AnimateIn variant="fadeUp">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.industry && (
                <span className="badge-pill">{project.industry}</span>
              )}
              {project.year && (
                <span className="badge-pill">{project.year}</span>
              )}
              {!project.industry &&
                project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="badge-pill">
                    {tag}
                  </span>
                ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.08}>
            <h1 className="text-h1 text-foreground mb-8 max-w-[900px]">
              {project.title}
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.16}>
            <p className="text-body-lg text-muted-foreground max-w-[680px] mb-10">
              {project.description}
            </p>
          </AnimateIn>

          {project.websiteUrl && (
            <AnimateIn variant="fadeUp" delay={0.22}>
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-secondary inline-flex items-center gap-2"
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
            </AnimateIn>
          )}
        </div>
      </section>

      {/* ─── Meta strip (Client | Services | Year) ─────────────────── */}
      {(project.client || project.services || project.year) && (
        <section className="pb-12">
          <div className="mx-auto max-w-[1360px] px-6 md:px-10">
            <AnimateIn variant="fadeUp" delay={0.05}>
              <div className="max-w-[680px]">
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
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ─── Hero plate ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1360px] px-6 md:px-10 mb-20 md:mb-28">
        <AnimateIn variant="scaleIn" delay={0.1}>
          <Plate caption={project.slug} fig="01" shadow>
            <div className="relative aspect-[16/10] md:aspect-[2.2/1] w-full rounded-[4px] overflow-hidden">
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
      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <AnimateIn>
            <p className="text-micro-label text-muted-foreground mb-6">
              Next case study
            </p>
          </AnimateIn>
          <AnimateIn delay={0.06}>
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-6 border-y border-border py-6"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap">
                NEXT / {pad(nextIndex + 1)}
              </span>
              <h3 className="flex-1 font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.01em] text-foreground/20 group-hover:text-foreground transition-colors duration-300">
                {nextProject.title}
              </h3>
              <div className="hidden md:block w-[180px] shrink-0 aspect-[4/3] rounded-md border border-border overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="relative w-full h-full"
                  style={getWrapperStyle(nextProject.image)}
                >
                  <Image
                    src={nextProject.image}
                    alt={nextProject.title}
                    fill
                    sizes="180px"
                    className="object-cover"
                    style={getImageStyle(nextProject.image)}
                  />
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <AnimateIn>
            <div className="max-w-[680px]">
              <h2 className="text-h1 text-foreground mb-5">
                Ready to <span className="accent-word">Build</span> Something
                Like This?
              </h2>
              <p className="text-body-lg mb-10">
                Book a free strategy call. We&apos;ll scope your project and map
                out the fastest path to launch.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
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
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-[1360px] px-6 md:px-10">
            <div className="grid grid-cols-12 gap-6">
              <AnimateIn className="col-span-12 lg:col-span-3">
                <p className="text-micro-label text-muted-foreground">
                  Overview
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
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-[1360px] px-6 md:px-10 flex flex-col gap-16 md:gap-24">
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
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1360px] px-6 md:px-10">
            <AnimateIn>
              <div className="border-t border-border pt-6 mb-12">
                <p className="text-micro-label text-muted-foreground">
                  The Outcome in Numbers
                </p>
              </div>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {project.metrics.map((metric, i) => (
                <AnimateIn key={metric.label} delay={i * 0.08}>
                  <div className="border-t border-border pt-6">
                    <p className="font-display text-[clamp(3rem,6.5vw,5.5rem)] leading-none tracking-[-0.015em] tabular-nums text-foreground mb-3 break-words">
                      {metric.value}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
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
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-[1360px] px-6 md:px-10">
            <AnimateIn>
              <figure className="border-y border-border py-12 md:py-16">
                <blockquote className="font-display italic text-[clamp(2rem,3.2vw,2.5rem)] leading-[1.25] tracking-[-0.01em] text-foreground max-w-[900px]">
                  &ldquo;{project.quote.text}&rdquo;
                </blockquote>
                {(project.quote.author || project.quote.role) && (
                  <figcaption className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                    {project.quote.author}
                    {project.quote.author && project.quote.role && " — "}
                    {project.quote.role}
                  </figcaption>
                )}
              </figure>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Tech stack + outcomes (compact) */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <AnimateIn>
            <div className="border-t border-border pt-6 mb-6">
              <p className="text-micro-label text-muted-foreground">
                Tech Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="badge-pill">
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="border-t border-border pt-6 mb-3">
              <p className="text-micro-label text-muted-foreground">
                Highlights
              </p>
            </div>
            <ul>
              {project.outcomes.map((outcome, i) => (
                <li
                  key={outcome}
                  className="flex items-baseline gap-3 py-3 border-b border-border/60"
                >
                  <span className="font-mono text-xs tracking-[0.04em] text-muted-foreground">
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
        <div className="flex flex-col gap-3">
          <Plate caption={slug} fig={fig} shadow>
            <div className="relative aspect-[16/10] w-full rounded-[4px] overflow-hidden">
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
          {block.caption && (
            <p className="text-caption text-muted-foreground max-w-[680px]">
              {block.caption}
            </p>
          )}
        </div>
      </AnimateIn>
    );
  }

  if (block.type === "twoUp") {
    return (
      <AnimateIn variant="fadeUp" delay={Math.min(index * 0.04, 0.2)}>
        <div className="flex flex-col gap-3">
          <Plate caption={slug} fig={fig} shadow>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              {block.images.map((img, i) => (
                <div
                  key={`${img.src}-${i}`}
                  className="relative aspect-[4/3] w-full rounded-[4px] overflow-hidden"
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
          {block.caption && (
            <p className="text-caption text-muted-foreground max-w-[680px]">
              {block.caption}
            </p>
          )}
        </div>
      </AnimateIn>
    );
  }

  // imageWithCaption — image + side text
  const imageOnLeft = block.align !== "right";
  return (
    <AnimateIn variant="fadeUp" delay={Math.min(index * 0.04, 0.2)}>
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
          imageOnLeft ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        <div className="md:col-span-7">
          <Plate caption={slug} fig={fig} shadow>
            <div className="relative aspect-[4/3] w-full rounded-[4px] overflow-hidden">
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
            <h3 className="font-display text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-[-0.01em] text-foreground mb-5">
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

// ─── Spec row (dot-leader meta) ───────────────────────────────────────────
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3 py-3 border-b border-border/60">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap">
        {label}
      </p>
      <span
        aria-hidden
        className="flex-1 border-b border-dotted border-muted-foreground/40 -translate-y-[3px]"
      />
      <p className="text-[15px] font-medium text-foreground text-right">
        {value}
      </p>
    </div>
  );
}
