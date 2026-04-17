"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { projects } from "@/data/portfolio";
import { getImageStyle } from "@/lib/imagePosition";
import type { GalleryBlock, PortfolioProject } from "@/types";

export function CaseStudyContent({ project }: { project: PortfolioProject }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 pt-[120px] pb-12">
        <div className="mx-auto max-w-[1100px]">
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
            <h1 className="text-[44px] md:text-[72px] lg:text-[88px] font-medium leading-[1.02] tracking-[-0.035em] text-foreground mb-8 max-w-[1000px]">
              {project.title}
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.16}>
            <p className="text-[17px] md:text-[22px] text-muted-foreground leading-[1.45] max-w-[760px] mb-10">
              {project.description}
            </p>
          </AnimateIn>

          {project.websiteUrl && (
            <AnimateIn variant="fadeUp" delay={0.22}>
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-primary inline-flex items-center gap-2"
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
        <section className="px-6 lg:px-10 pb-12">
          <div className="mx-auto max-w-[1100px]">
            <AnimateIn variant="fadeUp" delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-8 border-t border-b border-border">
                {project.client && (
                  <MetaCell label="Client" value={project.client} />
                )}
                {project.services && (
                  <MetaCell
                    label="Services"
                    value={project.services.join(" · ")}
                    bordered
                  />
                )}
                {project.year && (
                  <MetaCell label="Year" value={project.year} bordered />
                )}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ─── Hero image ────────────────────────────────────────────── */}
      <section className="px-6 md:px-0 w-full md:w-[92vw] max-w-none mx-auto mb-20 md:mb-32">
        <AnimateIn variant="scaleIn" delay={0.1}>
          <div className="relative aspect-[16/10] md:aspect-[2.2/1] w-full rounded-[24px] md:rounded-[36px] overflow-hidden bg-card border border-border">
            <Image
              src={project.image}
              alt={`${project.title} hero`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 92vw"
              style={getImageStyle(project.image)}
            />
          </div>
        </AnimateIn>
      </section>

      <GalleryStyleBody project={project} />

      {/* ─── Next case study ───────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[1100px]">
          <AnimateIn>
            <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              Next case study
            </p>
          </AnimateIn>
          <AnimateIn delay={0.06}>
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex flex-col md:flex-row md:items-end gap-8 md:gap-12"
            >
              <div className="relative w-full md:w-[55%] aspect-[16/10] rounded-[20px] md:rounded-[28px] overflow-hidden bg-card border border-border">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  style={getImageStyle(nextProject.image)}
                />
              </div>
              <div className="flex-1">
                {nextProject.industry && (
                  <span className="badge-pill mb-4 inline-flex">
                    {nextProject.industry}
                  </span>
                )}
                <h3 className="text-[32px] md:text-[48px] font-medium leading-[1.05] tracking-[-0.03em] text-foreground group-hover:text-foreground/70 transition-colors">
                  {nextProject.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-[14px] text-muted-foreground group-hover:text-foreground transition-colors">
                  View case study
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[680px] text-center">
          <AnimateIn>
            <h2 className="text-h1 text-foreground mb-5">
              Ready to <span style={{ color: 'var(--accent-brand)' }}>Build</span> Something Like This?
            </h2>
            <p className="text-body-lg mb-10">
              Book a free strategy call. We&apos;ll scope your project and map
              out the fastest path to launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticButton>
                <div style={{ borderRadius: 'inherit', boxShadow: '0 0 20px var(--accent-brand-glow), 0 0 60px var(--accent-brand-soft)' }}>
                  <CTAButton href="/strategy-call" variant="primary">
                    Book Strategy Call
                  </CTAButton>
                </div>
              </MagneticButton>
              <CTAButton href="/portfolio" variant="secondary">
                View More Work
              </CTAButton>
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
        <section className="px-6 lg:px-10 pb-16 md:pb-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              <AnimateIn className="md:w-[28%]">
                <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                  Overview
                </p>
              </AnimateIn>
              <AnimateIn delay={0.08} className="md:w-[72%]">
                <p className="text-[18px] md:text-[22px] text-foreground leading-[1.5] tracking-[-0.01em]">
                  {project.overview}
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>
      )}

      {/* Gallery flow */}
      {project.gallery && (
        <section className="px-6 lg:px-10 pb-16 md:pb-24">
          <div className="mx-auto max-w-[1280px] flex flex-col gap-16 md:gap-24">
            {project.gallery.map((block, i) => (
              <GalleryBlockRenderer key={i} block={block} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
          <div className="mx-auto max-w-[1100px]">
            <AnimateIn>
              <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-12 text-center">
                The Outcome in Numbers
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {project.metrics.map((metric, i) => (
                <AnimateIn key={metric.label} delay={i * 0.08}>
                  <div className="text-center md:px-8">
                    <p className="text-[56px] md:text-[88px] font-medium tracking-[-0.04em] leading-none text-foreground mb-3">
                      {metric.value}
                    </p>
                    <p className="text-[14px] text-muted-foreground">
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
        <section className="px-6 lg:px-10 py-20 md:py-32 border-t border-border">
          <div className="mx-auto max-w-[900px] text-center">
            <AnimateIn>
              <p className="text-[26px] md:text-[40px] font-medium leading-[1.25] tracking-[-0.02em] text-foreground mb-8">
                &ldquo;{project.quote.text}&rdquo;
              </p>
            </AnimateIn>
            {(project.quote.author || project.quote.role) && (
              <AnimateIn delay={0.06}>
                <div className="flex flex-col items-center gap-1">
                  {project.quote.author && (
                    <p className="text-[15px] font-medium text-foreground">
                      {project.quote.author}
                    </p>
                  )}
                  {project.quote.role && (
                    <p className="text-[14px] text-muted-foreground">
                      {project.quote.role}
                    </p>
                  )}
                </div>
              </AnimateIn>
            )}
          </div>
        </section>
      )}

      {/* Tech stack + outcomes (compact) */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <AnimateIn>
            <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="badge-pill">
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              Highlights
            </p>
            <ul className="space-y-3">
              {project.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-[15px] text-foreground leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {outcome}
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
}: {
  block: GalleryBlock;
  index: number;
}) {
  if (block.type === "full") {
    return (
      <AnimateIn variant="fadeUp" delay={Math.min(index * 0.04, 0.2)}>
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[16/10] w-full rounded-[20px] md:rounded-[28px] overflow-hidden bg-card border border-border">
            <Image
              src={block.image}
              alt={block.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
              style={getImageStyle(block.image)}
            />
          </div>
          {block.caption && (
            <p className="text-[14px] text-muted-foreground max-w-[680px] mx-auto text-center">
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
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {block.images.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative aspect-[4/3] w-full rounded-[20px] md:rounded-[24px] overflow-hidden bg-card border border-border"
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
            ))}
          </div>
          {block.caption && (
            <p className="text-[14px] text-muted-foreground max-w-[680px] mx-auto text-center">
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
          <div className="relative aspect-[4/3] w-full rounded-[20px] md:rounded-[24px] overflow-hidden bg-card border border-border">
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
        <div className="md:col-span-5">
          {block.heading && (
            <h3 className="text-[26px] md:text-[36px] font-medium leading-[1.15] tracking-[-0.025em] text-foreground mb-5">
              {block.heading}
            </h3>
          )}
          <p className="text-[16px] md:text-[18px] text-muted-foreground leading-[1.55]">
            {block.body}
          </p>
        </div>
      </div>
    </AnimateIn>
  );
}

// ─── Meta cell ────────────────────────────────────────────────────────────
function MetaCell({
  label,
  value,
  bordered = false,
}: {
  label: string;
  value: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        bordered ? "md:pl-8 md:border-l md:border-border" : ""
      }`}
    >
      <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="text-[16px] md:text-[18px] font-medium text-foreground">
        {value}
      </p>
    </div>
  );
}
