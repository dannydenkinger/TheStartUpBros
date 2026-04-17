# StartUpBros — Build Progress

## Phase 16: Gallery-Style Case Study Pages (2026-04-16)

### Goal
Make Work Samples on the home page open into individual gallery-style case study pages (like https://bricxlabs.com/case-studies-new/fray). Image-heavy, narrative-first layout — replacing the existing text-block (Challenge/Solution/Timeline/Tech/Outcomes) template.

### Discovery
- `src/components/landing/WorkSamples.tsx` links to slugs `writesonic`, `loopback`, `n3on`, `thrust`, `socialsonic`, `community` — **none exist in `src/data/portfolio.ts`**, so all 6 click-throughs currently 404.
- `CaseStudiesGrid` (portfolio listing page) overlaps on `n3on` and `socialsonic` — same slug must serve both entry points.
- Existing `CaseStudyContent.tsx` is structured (Challenge → Solution → Timeline → Tech → Outcomes) — wrong shape for a gallery story.
- 27 portfolio images live in `/public/images/portfolio/` — enough variety to build multi-image galleries per project without sourcing new assets.

### Plan

**Step 1: Extend `PortfolioProject` type** — `src/types/index.ts`
- [ ] Add optional gallery fields so old projects keep working:
  - `client?: string`, `year?: string`, `industry?: string`
  - `services?: string[]` (delivered work)
  - `websiteUrl?: string` (external "Visit Website" CTA)
  - `overview?: string` (long-form intro paragraph)
  - `gallery?: GalleryBlock[]` — typed image blocks with layout hints
  - `metrics?: { value: string; label: string }[]` (big-number stats)
  - `quote?: { text: string; author?: string; role?: string }`
- [ ] Define `GalleryBlock` discriminated union: `{ type: "full" | "twoUp" | "imageWithCaption" }`

**Step 2: Add 6 new case studies to `src/data/portfolio.ts`** matching WorkSamples slugs
- [ ] `writesonic` — Writesonic GEO Platform (uses sales-crm + geo-analytics + sales-dashboard images)
- [ ] `loopback` — Loopback MVP (ai-landing + ai-finance + ai-visits)
- [ ] `n3on` — N3on Token Launch (defi-landing + defi-pages + token-platform + multichain)
- [ ] `thrust` — Thrust Mobile App (travel-app + thrust-mobile + thrust-web)
- [ ] `socialsonic` — SocialSonic Dashboard (freelancer-dashboard + socialsonic)
- [ ] `community` — Community Search (productivity-dashboard + community-search + crm-journeys + crm-detail)
- [ ] Each project includes: client, year, industry, services, websiteUrl, overview, full gallery array, metrics, optional quote

**Step 3: Rewrite `src/app/portfolio/[slug]/CaseStudyContent.tsx`** — gallery-style template
- [ ] Hero: industry pill + services pill, oversized title, descriptive subtitle, optional "Visit Website" external link
- [ ] Meta strip: Client | Services | Year — horizontal row with vertical dividers
- [ ] Full-bleed hero image (90vw, large rounded radius)
- [ ] Overview block: 2-column (label + long-form text)
- [ ] Gallery flow renderer: maps `gallery[]` to layouts (full-width, two-up grid, image + caption)
- [ ] Metrics block: large numbers in 3-column grid with labels
- [ ] Quote block (if present): large pull quote with author/role
- [ ] Next case study card: Link to next project in array (cycles back to first)
- [ ] Final CTA section: "Ready to Build Something Like This?" + Book Strategy Call + View More Work
- [ ] Backwards compatibility: if `gallery` is missing, fall back to legacy Challenge/Solution/Timeline/Tech/Outcomes layout so the existing 6 projects don't break

**Step 4: Verification**
- [x] `npm run build` — all 12 portfolio routes generated (6 new + 6 legacy)
- [x] All 6 new routes return 200 (writesonic/loopback/n3on/thrust/socialsonic/community)
- [x] All 6 legacy routes still return 200 with legacy template
- [x] Writesonic page contains: title, Visit Website CTA, Overview block, metrics ("Activation rate uplift"), quote ("Samanyou Garg"), next case study link
- [x] Legacy projects render Challenge/Solution/Timeline/Outcomes (fallback path)
- [ ] Manual browser pass for visual polish (responsive breakpoints, image cropping) — can't be verified from CLI; user should eyeball

### Files Touched
1. `src/types/index.ts` — added `GalleryBlock` union + 9 optional fields on `PortfolioProject`
2. `src/data/portfolio.ts` — 6 new gallery entries inserted before legacy 6 (legacy untouched)
3. `src/app/portfolio/[slug]/CaseStudyContent.tsx` — rewrote as gallery template, kept legacy text body as fallback when `gallery` is missing
4. `tasks/todo.md` — this plan + review

### Review

**What changed**
- Work Samples on the home page now lead to working case study detail pages (previously all 6 were 404s).
- New gallery-style template handles the 6 work samples, while the existing 6 portfolio projects continue to render their original Challenge/Solution/Timeline layout (no regression).
- Hero now leads with industry/year pills, oversized title, "Visit Website" external CTA, and a Client | Services | Year meta strip — matching the Bricx Labs / Fray reference pattern.
- Gallery flow renders three block types: full-width image, two-up grid, and image-with-side-text (alternating left/right).
- Big-number metrics row, large pull quote, and a "Next case study" navigation card cycle through the array so visitors can move through the gallery without bouncing back to the listing.

**Trade-offs / known gaps**
- Only Writesonic has a real `websiteUrl` (writesonic.com). The other 5 omit the Visit Website button — placeholder URLs would be worse than no button. User can fill these in later.
- Quote authors and roles are illustrative — easy to swap in real testimonials.
- I couldn't visually verify image cropping or responsive breakpoints from the CLI; recommend a quick manual pass at 375 / 768 / 1440 widths.

### Non-Goals (unchanged)
- Did not redesign `CaseStudiesGrid` (portfolio list page) — it has its own decoupled data
- Did not add new image assets — used existing `/public/images/portfolio/` files
- Did not change `WorkSamples.tsx` — its hrefs already pointed at the slugs we created

## Phase 17: Fill in Remaining Case Study Pages (2026-04-16)

### Goal
Fill out the 8 remaining case studies on `/portfolio` that were 404ing — every clickable card on the listing page now resolves to a real gallery-style detail page.

### What was missing
`CaseStudiesGrid` linked to 10 slugs but only 2 (`n3on`, `socialsonic`) existed in `portfolio.ts`. The other 8 were broken: `ltv-ai`, `gigamind-landing`, `gigamind-product`, `sybill`, `hobbes-embedded`, `hobbes-rebrand`, `alsuitup`, `manyreach`.

### Changes
- [x] Added 8 new gallery-style case studies to `portfolio.ts` (each with overview, 3 gallery blocks, 3 metrics, 1 quote, full legacy fields for type compatibility)
- [x] Reused existing `/public/images/portfolio/` assets (no new images)
- [x] Filtered `CaseStudyContent` next-case-study cycle so gallery pages cycle within the gallery pool — never sending users to a legacy text-style page
- [x] `npm run build` clean — 20 portfolio routes generated total (14 gallery + 6 legacy)
- [x] All 20 routes verified 200 via curl
- [x] Spot-check on Sybill: title, metric labels, gallery headings, quote author, next-case-study section all rendered
- [x] Confirmed cycle wraps: `/portfolio/manyreach` next-case-study links to `/portfolio/writesonic` (last gallery → first gallery)

### Files Touched
1. `src/data/portfolio.ts` — 8 new entries inserted between gallery and legacy sections
2. `src/app/portfolio/[slug]/CaseStudyContent.tsx` — filter `pool` based on whether current project is gallery-style
3. `tasks/todo.md` — this section

### Status of all portfolio slugs (20 routes total)
**Gallery-style (14)** — visible from home + listing + cycle-able:
WorkSamples: `writesonic`, `loopback`, `n3on`, `thrust`, `socialsonic`, `community`
CaseStudiesGrid: `ltv-ai`, `gigamind-landing`, `gigamind-product`, `sybill`, `hobbes-embedded`, `hobbes-rebrand`, `alsuitup`, `manyreach`

**Legacy text-style (6)** — orphan pages, not linked from anywhere visible:
`propflow-crm`, `healthsync-ai`, `fittrack-mobile`, `invoicebot`, `launchpad-landing`, `budgetlens`

The legacy 6 still SSG-build for SEO/sitemap purposes. They're not deleted in case the user wants to repurpose them, but they could be removed if confirmed dead. Worth flagging for the user.
