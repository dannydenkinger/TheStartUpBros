// Pan & zoom control for portfolio images.
//
//   x:    0 = left edge, 50 = center, 100 = right edge   (default 50)
//   y:    0 = top edge,  50 = center, 100 = bottom edge   (default 50)
//   zoom: 1 = normal, 1.5 = 50% zoom in, etc.             (default 1)
//
// x and y control BOTH the visible area AND the zoom focal point,
// so zooming in always centers on the part of the image you're looking at.

type ImageSettings = { x?: number; y?: number; zoom?: number };

const settingsMap: Record<string, ImageSettings> = {
  // ── EstateFlow ──────────────────────────────────────────
  "/images/portfolio/estateflow-dashboard.png": { x: 0, y: 0, zoom: 1.2 },
  "/images/portfolio/estateflow-properties.png": { x: 27, y: 31, zoom: 1.1 },
  "/images/portfolio/estateflow-tenants.png": { x: 0, y: 0, zoom: 1.92 },
  "/images/portfolio/estateflow-leasing.png": { x: 0, y: 50 },
  "/images/portfolio/estateflow-market.png": { x: 50, y: 0 },
  "/images/portfolio/estateflow-finance.png": { x: 0, y: 50 },
  "/images/portfolio/estateflow-documents.png": { x: 0, y: 50 },

  // ── Vesta CRM ───────────────────────────────────────────
  "/images/portfolio/vesta-hero.png": { x: 50, y: 0, zoom: 1.05 },
  "/images/portfolio/vesta-calendar.png": { x: 30, y: 31, zoom: 1.2 },
  "/images/portfolio/vesta-analytics.png": { x: 18, y: 99, zoom: 1.5 },
  "/images/portfolio/vesta-seo.png": { x: 18, y: 50, zoom: 1.3 },
  "/images/portfolio/vesta-login.png": { x: 24, y: 47, zoom: 1.5 },

  // ── ZoneX ───────────────────────────────────────────────
  "/images/portfolio/zonex-dashboard.webp": { x: 50, y: 0 },
  "/images/portfolio/zonex-coaching.webp": { x: 50, y: 0 },
  "/images/portfolio/zonex-film.webp": {},
  "/images/portfolio/zonex-game-data.webp": {},

  // ── SAID Technology ─────────────────────────────────────
  "/images/portfolio/said-hero-brand.png": {},
  "/images/portfolio/said-lineup.png": {},
  "/images/portfolio/said-clinical.png": {},
  "/images/portfolio/said-translation-detail.png": {},
  "/images/portfolio/said-chat-marble.png": {},
  "/images/portfolio/said-security.png": {},
  "/images/portfolio/sales-crm-perspective.webp": {},
  "/images/portfolio/sales-crm-detail.webp": {},
  "/images/portfolio/sales-crm-full.webp": {},
  "/images/portfolio/sales-dashboard.avif": {},

  // ── LOOT8 / Web3 ───────────────────────────────────────
  "/images/portfolio/defi-landing.webp": {},
  "/images/portfolio/defi-pages.webp": {},
  "/images/portfolio/token-platform.avif": {},
  "/images/portfolio/multichain.avif": {},

  // ── K Project / AI ─────────────────────────────────────
  "/images/portfolio/ai-landing.webp": {},
  "/images/portfolio/ai-finance.avif": {},
  "/images/portfolio/ai-visits.avif": {},

  // ── Fintech ─────────────────────────────────────────────
  "/images/portfolio/fintech-dashboard.webp": {},
  "/images/portfolio/fintech-detail.webp": {},
  "/images/portfolio/fintech-mobile.webp": {},
  "/images/portfolio/fintech-app-duo.webp": {},
  "/images/portfolio/fintech-transactions.webp": {},

  // ── CRM / Misc dashboards ──────────────────────────────
  "/images/portfolio/crm-dashboard.webp": {},
  "/images/portfolio/crm-journeys.webp": {},
  "/images/portfolio/productivity-dashboard.webp": {},
  "/images/portfolio/freelancer-dashboard.webp": {},

  // ── Other ──────────────────────────────────────────────
  "/images/portfolio/geo-analytics.avif": {},
  "/images/portfolio/community-search.avif": {},
  "/images/portfolio/socialsonic.avif": {},
  "/images/portfolio/thrust-web.avif": {},
  "/images/portfolio/travel-app.webp": {},
};

export function getImageStyle(src: string): React.CSSProperties {
  const s = settingsMap[src];
  const x = s?.x ?? 50;
  const y = s?.y ?? 50;
  const zoom = s?.zoom ?? 1;

  const style: React.CSSProperties = {
    objectPosition: `${x}% ${y}%`,
  };

  if (zoom !== 1) {
    style.transform = `scale(${zoom})`;
    style.transformOrigin = `${x}% ${y}%`;
  }

  return style;
}
