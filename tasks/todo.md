# Startup Bros — Build Progress

## Phase 0: Project Scaffold
- [x] Create Next.js project (TypeScript, Tailwind, App Router, src dir)
- [x] Install framer-motion, next-mdx-remote, gray-matter
- [x] Init Shadcn/UI
- [x] Add Shadcn components (button, card, input, textarea, badge, dropdown-menu, navigation-menu, sheet, separator)
- [x] Create tasks/todo.md and tasks/lessons.md
- [x] Directory structure created

## Phase 1: Design System Foundation
- [x] globals.css — dark-mode CSS custom properties + glass utilities
- [x] lib/animations.ts — 3 Framer Motion presets
- [x] lib/metadata.ts — shared metadata defaults
- [x] Shared components: GlassCard, SectionHeading, AnimateIn, GlowEffect, CTAButton, BentoGrid, BentoItem

## Phase 2: Navigation + Layout Shell
- [x] data/navigation.ts — typed nav structure
- [x] Navbar.tsx — sticky, frosted glass, responsive, services dropdown
- [x] MobileMenu.tsx — Shadcn Sheet
- [x] Footer.tsx
- [x] app/layout.tsx — wire fonts, metadata, Navbar + Footer

## Phase 3: Landing Page
- [x] Hero.tsx — display headline, subtitle, 2 CTAs, glow background
- [x] ValueProps.tsx — 6 value props in bento glass cards
- [x] ServicesPreview.tsx — 5 service teaser cards
- [x] Testimonials.tsx — 3 social proof quotes
- [x] FinalCTA.tsx — full-width CTA band
- [x] Compose in app/page.tsx

## Phase 4: Services Page
- [x] data/services.ts — 5 categories with icons, descriptions, features
- [x] ServiceCard + ServiceGrid
- [x] app/services/page.tsx

## Phase 5: Portfolio Page
- [x] data/portfolio.ts — 6 projects with device types
- [x] DeviceMockup (CSS-only MacBook/iPhone frames)
- [x] PortfolioItem + PortfolioGrid (masonry)
- [x] app/portfolio/page.tsx

## Phase 6: Blog/Case Studies
- [x] BlogCard component
- [x] Blog listing page + [slug] page with MDXRemote
- [x] Sample MDX post: "From Idea to MVP in 14 Days"

## Phase 7: Contact/Booking
- [x] BookingForm — name, email, company, budget, description + validation
- [x] app/contact/page.tsx — form + scope-based pricing disclaimer

## Phase 8: Polish & Performance
- [x] Sitemap (dynamic, includes blog posts)
- [x] robots.txt
- [x] Page-level metadata on every route
- [x] Custom 404 page
- [x] Build verified — all routes static, zero errors
- [ ] Lighthouse audit (requires dev server)
- [ ] Responsive verification (visual)
  - [ ] Connect contact form to real endpoint
  - [ ] Add real portfolio images
  - [ ] Add OG image

## Phase 9: Match Bricx Labs styling and copy
  - [x] Update `src/components/landing/Hero.tsx` copy
  - [x] Update `src/components/landing/ClientLogos.tsx` copy
  - [x] Update `src/components/landing/ValueProps.tsx` copy and services
  - [x] Update `src/components/landing/CaseStudies.tsx` heading
  - [x] Update `src/components/landing/Testimonials.tsx` heading
  - [x] Update `src/components/landing/FinalCTA.tsx` heading

## Phase 10: Match Typography and Titles
  - [x] Update `src/app/globals.css` headings to use Sans-Serif and tight letter spacing

## Phase 11: Match Color Palette (Monochrome)
  - [x] Replace `#04d98b` green accents with `#ffffff` and `#242424` monochrome variables in `globals.css`
  - [x] Update badge classes to use pure white, grey border, and slight shadow inline with Bricx Labs CSS

## Phase 12: Global Navigation Layout
  - [x] Create `src/components/shared/Header.tsx` replicating Bricx Labs top navigation
  - [x] Implement hover states, the Mega-menu for Industries, and the mobile responsive drawer
  - [x] Add Header to `layout.tsx`

## Phase 13: Build Remaining Routes
  - [x] Setup `src/app/portfolio/page.tsx` (Case Studies)
  - [x] Setup `src/app/industries/[slug]/page.tsx` (Dynamic Industry pages)
  - [x] Setup `src/app/resources/page.tsx`
  - [x] Setup `src/app/contact/page.tsx` (Strategy Call)
## Phase 14: Subpages Construction
  - [x] Reconstruct `/portfolio` hero with expert badges and precise typography
  - [x] Build `CaseStudiesGrid.tsx` with filter bar and 2-column 80px gap architecture
  - [x] Construct the `/industries/[slug]` route using `Marquee` and `GlassBlogCard` for curated features
  - [x] Construct the `/resources` route using a 2-column grid of `GlassBlogCard` components
  - [x] Ensure all pages use the Unsplash placeholder images provided by the user

## Phase 15: Individual Case Study Page Template
  - [x] Construct `src/app/portfolio/[slug]/page.tsx` dynamic route
  - [x] Build the specific Case Study Hero header (Pill badges, H1 display, subtitle)
  - [x] Implement the `Context & Outcomes` 2-column meta grid with border dividers
  - [x] Build a generic `CaseStudyShowcase` bento block component for the main visual flow
  - [x] Use Unsplash images and wire up the `FinalCTA` at the bottom
