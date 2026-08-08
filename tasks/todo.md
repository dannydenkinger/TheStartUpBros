# StartUpBros — Build Progress

## Phase 19: Redesign v3 — "VIOLET SIGNAL" (2026-08-03, branch: redesign-v3)

### Goal
Owner-directed pivot from the v2 editorial "INK & INDEX" system to a modern product-studio
language modeled on desses.co (owner reference): dark grainy violet-gradient hero screen
inset on a light studio-gray page, white rounded-[20px] shadow cards, black full-bleed
bands (principles context, FinalCTA, footer), electric blurple #5B4DFF accent, Inter Tight
type, pill buttons and chips. Branched from redesign-v2 so both designs remain comparable;
all v2 preservation rules and bug fixes carried forward.

### What changed
- globals.css: full token rewrite (light "STUDIO GRAY" default / dark "SIGNAL BLACK",
  --band-* vars), same legacy class names remapped (pills back, chips, lifted cards),
  .band/.on-band/.grain utilities, hero-float keyframes
- layout.tsx: Inter Tight replaces Instrument Serif/Sans (JetBrains Mono kept, de-emphasized)
- Hero: dark rounded-[24px] inset screen with pure-CSS blurred violet ribbon + film grain,
  two-tone headline, StatusStrip, stack ticker at screen bottom
- Header/Footer: light translucent bar + pills; black band footer with giant baseline-cropped
  "StartUpBros." wordmark (blurple period)
- SectionHeader/StatusStrip/Plate restyled in place (same props — v2 numbering survives
  inside chips as "01 · LABEL")
- Every page re-skinned: services card grids, portfolio ledger → desses-style stacked
  showcase media cards, case-study monograph with blurple metrics, white-card FAQ,
  black-band FinalCTA, v3 form fields (rounded-xl, blurple focus ring)

### Verification
Production build clean (29 routes, tsc clean); screenshot sweep 11 light + 5 dark + 3
mobile; dark theme reads as its own designed theme; mobile DOM verified clean at 390px
(the "duplicated content" in tall full-page captures is the known >16384px capture
artifact — see lessons.md). Known pre-existing issues from v2 remain flagged unchanged
(/portfolio/k-project dead link, blog date UTC off-by-one, "StartUp Bros Blog" spelling,
/contact empty dir + unmounted BookingForm/ContactFormModal).

## Phase 18: Redesign v2 — Full Visual Overhaul (2026-07-28, branch: redesign-v2)

### Goal
Overhaul the visual design to a distinctly premium, editorial-grade level while preserving all
meaning: copy, routes, SEO/metadata, forms, MDX blog pipeline, data files, and functionality.

### Plan
- [x] Create `redesign-v2` branch off main
- [ ] Map the current site (parallel readers: landing, services, portfolio, blog, contact/tools, chrome)
- [ ] Screenshot current site for before/after reference
- [ ] Design direction: 3 candidate directions → judge panel → synthesized design spec
- [ ] Foundation pass: tokens/globals.css, typography scale, Header, Footer, shared primitives
- [ ] Parallel page passes: landing sections, services, portfolio/gallery, blog, contact/tools/misc
- [ ] Verify: `next build` clean, screenshot every route, fix regressions
- [ ] Review section

### Constraints
- Keep all copy verbatim unless a design pattern requires trivial truncation
- Keep routes, sitemap, JsonLd, metadata, API contract of /api/contact untouched
- Keep dark + light themes working (next-themes)
- Tailwind v4 CSS-first tokens; framer-motion for motion
- Simplicity first: restyle components in place, don't fork parallel component trees

### Review (completed 2026-07-29)

**Direction: INK & INDEX** — editorial-studio system chosen by a 3-judge panel over
technical-luxe and warm-product-studio candidates. The site is typeset, not decorated:
Instrument Serif voice + Instrument Sans body (16px) + JetBrains Mono index apparatus
(numbered section spines 01–0N, dot leaders, FIG. captions, micro-labels), warm bone-paper
light theme / warm ink dark theme, one signal-orange accent rendered as serif-italic
accent words. Pills, glassmorphism, glows, hover lifts, and centered layouts abolished;
2px radii, hairline rules, asymmetric 12-col grid. Full spec: DESIGN_SPEC.md (session scratchpad).

**What changed** (~45 files): globals.css token+class rewrite (legacy class names kept,
bodies rewritten); fonts swapped Geist→Instrument Serif/Sans+JetBrains Mono; Header (one
full-width bar), Footer (giant baseline-cropped wordmark); new shared primitives
SectionHeader / StatusStrip / Plate; MagneticButton neutered; every page restyled —
portfolio is now a full-width ledger with hover reveal plates, case studies are editorial
monographs with FIG-captioned plates + giant serif metrics, services render as ruled
tables, blog cards are border-top list items with underline-sweep titles.

**Deliberate fixes shipped**: service cells now link to detail pages; ContactFormModal
email bug fixed (collected no email → every submission 400'd while showing "Thank you";
now has an email field and sends all collected fields — source values unchanged); blog
cards use frontmatter authors (fake-persona defaults removed); Unsplash fallback replaced
with generated serif cover; button-in-anchor removed; portfolio ledger derives from
data/portfolio.ts (duplicated array deleted); prose neutral-* colors → tokens (dark-mode
blog fixed); numbered spine made continuous per page via props/counters.

**Verification**: production build clean (29 routes); all routes 200; 3-critic screenshot
review (art direction, dark parity, mobile QA) → 3 blockers + 8 polish items found, all
fixed and re-verified light+dark, desktop+mobile. Critic verdicts: "legitimately
godly.website material", dark mode "a genuinely designed theme".

**Known issues left as-is (pre-existing, flagged not changed)**: /industries/ai and
services data link to /portfolio/k-project which 404s; "StartUp Bros Blog" spelling in
post metadata; blog dates render one day early (UTC-midnight parse); legacy text-style
portfolio fallback pages restyled only lightly. Dead code (unused ui components,
navigation.ts, ProcessSteps, ServicesPreview, BlogCard deleted where safe) mostly left
untouched for a follow-up cleanup.

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

---

## Analytics: Vercel Web Analytics, Speed Insights, and GA4

### Context
No analytics of any kind were installed. Added Vercel's two products plus GA4
(`G-XVP6P5LNXE`), all mounted in `src/app/layout.tsx`.

### Changes
- [x] `@vercel/analytics` — `<Analytics />`, traffic and pageviews
- [x] `@vercel/speed-insights` — `<SpeedInsights />`, real-user Core Web Vitals
- [x] GA4 via a local `GoogleAnalytics` component, gated to production builds
- [x] Verified in headless Chrome with beacons intercepted and answered `204`,
      so no test data reached either property

### The SPA pageview problem (the non-obvious part)
Google's copy-paste snippet assumes full page loads. This site is a SPA, so
navigation is a `history.pushState`. gtag's history listener fires on the
pushState — *before* React commits the route — so the hit carries the outgoing
page's URL and title. Measured against the stock install:

    nav -> /portfolio    NO BEACON
    nav -> /services     page_view  dl=/portfolio   <- previous page

Every page that matters for search (`/services/*`, `/portfolio/*`,
`/industries/*`) is reached this way, so traffic landed on the wrong rows.

Fix: `send_page_view: false` on the config, and emit each pageview from an
effect keyed on `usePathname()`. The hit is then built after the commit, when
`location` and `document.title` describe the page actually on screen. Verified
correct on initial load, on each client-side navigation, and on browser back.

Rejected `@next/third-parties/google`: fires `config` once on mount, no
route-change handling, no way to pass `send_page_view`.

Pageviews are keyed on pathname only — deliberately *not* `useSearchParams()`,
which forces a Suspense boundary and would deopt statically-rendered pages to
dynamic. Query-string-only changes won't fire a pageview; nothing navigates
that way today.

### OPEN — required in the GA4 dashboard, not in code
`send_page_view: false` suppresses the config pageview but NOT the history
listener, which still emits a stale duplicate. Raw capture after the fix:

    #4 POST /g/collect  en=page_view  dl=.../services   <- stale duplicate
    #5 POST /g/collect  en=page_view  dl=.../blog       <- correct

- [ ] GA4 → Admin → Data streams → web stream → Enhanced measurement → ⚙ →
      uncheck **"Page changes based on browser history events"**

Until that is unchecked, internal navigation is counted roughly twice. There is
no client-side override for this setting; patching gtag internals to suppress
it would be fragile, so the supported stream setting is the right fix.

### Files Touched
1. `src/app/layout.tsx` — three components mounted; GA gated on `NODE_ENV`
2. `src/components/shared/GoogleAnalytics.tsx` — new
3. `package.json` — added `@vercel/analytics`, `@vercel/speed-insights`
4. `tasks/todo.md` — this section

### Notes
- Ad blockers block all three scripts. Testing from a browser with uBlock shows
  zero traffic and reads as broken.
- Vercel's script refuses to send from headless/webdriver sessions by design, so
  a headless check can prove it loads but never that a beacon sends.
- GA measurement ID is hardcoded, not an env var — it ships in the client bundle
  either way, and hardcoding means it can't vanish because an env var went unset.
- EEA consent mode not configured; schema declares `areaServed: United States`.
  Revisit if EU clients come on.

---

## Analytics: conversion tracking + preview-deploy gate

### Changes
- [x] `src/lib/analytics.ts` (new) — `trackLead(source)` fires GA4 `generate_lead`
- [x] Wired into all three forms, firing only on a confirmed `res.ok`
- [x] GA gate switched from `NODE_ENV` to `VERCEL_ENV === "production"`

### Why fire on res.ok, not on the success panel
`ContactFormModal` and `StrategyCallContent` render "Thank you!" unconditionally
— the fetch is wrapped in a try/catch that swallows failures. Keying the event
off the visible success state would report conversions the inbox never received,
so both now check `res.ok` before tracking. UI behaviour left as-is.

### Why VERCEL_ENV, not NODE_ENV
Vercel builds preview deploys in production mode, so a `NODE_ENV` check still
let every branch preview report into the live property. Verified:

    VERCEL_ENV=preview     build -> 0 occurrences of the measurement ID
    VERCEL_ENV=production  build -> 2

Undefined off-platform, so a local `next start` stays silent too.

### Bug found and fixed during verification
`page_path` is a reserved GA4 parameter name — a custom value under it is
silently dropped. The beacon transmitted `ep.page_path=null` while the gtag call
clearly contained the path. Renamed to `lead_page`. Verified transmitted:

    /strategy-call   generate_lead  location="Strategy call page"  lead_page="/strategy-call"
    contact modal    generate_lead  location="Contact modal"       lead_page="/"

Note GA4 batches custom events rather than sending them immediately — a capture
window that only waits a few seconds will miss them. Forcing a `visibilitychange`
flush is what made them observable.

### OPEN — dashboard follow-up
- [ ] GA4 → Admin → Events → mark `generate_lead` as a **key event** (only
      appears after the first real submission lands)
- [ ] Optional: register `lead_page`, `form_location`, `form_source` as custom
      dimensions so they're reportable, not just present on the event

### FLAGGED — not fixed, needs a decision
1. **`/api/contact` does not send email.** It validates, `console.log`s, and
   returns `{ok:true}`. Every lead submitted through the site is lost — the
   TODO in the route still says to swap in Resend/Formspree. Conversion
   tracking will now faithfully report leads that nobody receives.
2. **`BookingForm.tsx` is orphaned** — nothing imports it and there is no
   `/contact` route. Instrumented anyway so it works if wired up.
3. Both modal and strategy-call forms show "Thank you!" even when the POST
   fails, so a user whose submission errored believes it went through.

---

## Contact form: reliable Web3Forms delivery

### Context
`/api/contact` validated, `console.log`ed and returned `{ok:true}` — every lead
submitted through the site was discarded. Both live forms then showed
"Thank you!" regardless, so a failed submission was indistinguishable from a
delivered one.

### Changes
- [x] Web3Forms form created for the approved StartUpBros business inbox
- [x] Browser-side form helper sends submissions directly to Web3Forms, as
      required by its free plan
- [x] Public Web3Forms form ID lives in the site code, so delivery does not
      depend on access to the hosting account
- [x] Required name and email fields are validated before submission
- [x] Honeypot submissions accepted quietly without sending downstream
- [x] Source page, original landing page, referrer, and UTM values included
- [x] Forms show a failure notice (`role="alert"`) instead of false success
- [x] `generate_lead` fires only after Web3Forms confirms delivery

### Configuration
Web3Forms marks its form access key as public. The approved form ID is stored in
the shared contact helper, while account ownership and inbox access remain with
Danny.

### Verified locally
    changed contact files        -> lint passes
    production build             -> passes
    invalid email                -> rejected before provider call
    populated honeypot           -> accepted without provider call

### Verified end to end
    strategy-call browser submit -> success confirmation shown
    Web3Forms provider           -> submission accepted
    StartUpBros Gmail inbox      -> matching inquiry received

### OPEN
- [ ] `BookingForm.tsx` still orphaned — no `/contact` route imports it.
