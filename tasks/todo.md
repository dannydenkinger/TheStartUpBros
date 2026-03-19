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

## V1.0 Transformation (2026-03-18)

### Phase T1: Branding Cleanup (BRICX → Startup Bros)
  - [x] Rename `.badge-bricx` → `.badge-pill` in globals.css
  - [x] Update all `.badge-bricx` consumers (portfolio, FinalCTA, CaseStudies, ValueProps)
  - [x] Fix portfolio metadata: `"Case Studies | BRICX"` → `"Case Studies | Startup Bros"`
  - [x] Replace all `BRICX` text references in Header, FAQ, Testimonials, Industries
  - [x] Verified: `grep -ri "bricx" src/` returns zero results

### Phase T2: Dark Mode Theme Transformation
  - [x] CSS Variables — dark palette (#0a0a0b bg, #ededed fg, rgba glass cards)
  - [x] Glassmorphism cards — backdrop-filter, translucent borders
  - [x] Buttons & badges — inverted primary (white bg/dark text), translucent secondary
  - [x] Typography — all heading colors → #ededed, body/caption → #8a8a8a
  - [x] Component sweep — all hardcoded light colors updated (~25 files)
  - [x] Verified: zero `bg-white`, `#f9f9f9`, `#262626`, `#e3e3e3` in .tsx files

### Phase T3: Enhanced Framer Motion
  - [x] Updated animation ease curve to `[0.16, 1, 0.3, 1]`
  - [x] Stagger delay increased to 0.1s
  - [x] BentoItem hover animation (scale + border glow via motion.div)
  - [x] MagneticButton component (mouse-tracking translate with spring physics)
  - [x] ServiceGrid stagger animation with viewport trigger
  - [x] MagneticButton wrapped around Hero + FinalCTA primary CTAs

### Phase T4: SEO — Siloed Service Pages + JSON-LD
  - [x] Extended Service type with slug, longDescription, useCases, techStack, deliverables
  - [x] Extended services data with slugs and rich content per service
  - [x] Created `src/app/services/[slug]/page.tsx` with generateStaticParams + generateMetadata
  - [x] Created `src/components/shared/JsonLd.tsx` (reusable server component)
  - [x] Added Organization JSON-LD to homepage
  - [x] Added ProfessionalService JSON-LD to service pages
  - [x] Added CreativeWork JSON-LD to portfolio case study pages
  - [x] Updated navigation.ts — service dropdown hrefs → `/services/[slug]`
  - [x] Updated Footer.tsx — service links → real routes
  - [x] Updated sitemap.ts — added service + tools routes

### Phase T5: SaaS Cost Calculator
  - [x] Created `/tools/saas-cost` page with unique metadata
  - [x] Created SaaSCostCalculator client component with 8 feature toggles
  - [x] Each toggle = glassmorphism card with icon + label + estimated days
  - [x] Output: total days, complexity tier (Simple/Standard/Complex), CTA
  - [x] WebApplication JSON-LD schema
  - [x] Smooth layout animations with AnimatePresence

### Phase T6: Portfolio Case Study Template
  - [x] Extended PortfolioProject type with slug, challenge, solution, timeline, techStack, outcomes
  - [x] Extended portfolio data with rich content for all 6 projects
  - [x] Restructured template: Hero → Challenge → Solution → Timeline → Tech Stack → Outcomes → CTA
  - [x] Added generateStaticParams + generateMetadata from portfolio data
  - [x] CreativeWork JSON-LD on each case study

### Phase T7: Final Verification
  - [x] `npm run build` — zero errors, all 23 pages generated
  - [x] All 5 service pages statically generated
  - [x] All 6 portfolio case study pages statically generated
  - [x] SaaS cost calculator page generated
  - [x] JSON-LD on homepage, service pages, portfolio pages, and calculator
  - [x] Full grep audit — zero BRICX references, zero light-mode colors
