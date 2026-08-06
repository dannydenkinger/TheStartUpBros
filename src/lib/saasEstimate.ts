export const saasFeatures = [
  {
    id: "auth",
    label: "Authentication",
    days: 5,
    description: "User signup, login, OAuth, password reset, session management",
  },
  {
    id: "ai",
    label: "AI / LLM Integration",
    days: 8,
    description: "LLM API integration, prompt engineering, response handling",
  },
  {
    id: "database",
    label: "Database & ORM",
    days: 4,
    description: "Schema design, migrations, ORM setup, seeding",
  },
  {
    id: "payments",
    label: "Payments / Billing",
    days: 6,
    description: "Stripe integration, subscriptions, invoicing, webhooks",
  },
  {
    id: "admin",
    label: "Admin Dashboard",
    days: 7,
    description: "User management, analytics views, content moderation",
  },
  {
    id: "storage",
    label: "File Storage",
    days: 3,
    description: "Upload, CDN, image processing, access control",
  },
  {
    id: "email",
    label: "Email / Notifications",
    days: 3,
    description: "Transactional emails, in-app notifications, templates",
  },
  {
    id: "analytics",
    label: "Analytics",
    days: 4,
    description: "Event tracking, dashboards, usage metrics, reporting",
  },
] as const;

export type SaasFeatureId = (typeof saasFeatures)[number]["id"];

const featureIds = new Set<SaasFeatureId>(saasFeatures.map((feature) => feature.id));

export function parseSaasFeatureIds(value?: string | string[]) {
  const rawValue = Array.isArray(value) ? value.join(",") : value ?? "";
  const requested = new Set(rawValue.split(",").map((id) => id.trim()));

  return saasFeatures
    .map((feature) => feature.id)
    .filter((id) => requested.has(id) && featureIds.has(id));
}

export function serializeSaasFeatureIds(ids: Iterable<string>) {
  const selected = new Set(ids);
  return saasFeatures
    .map((feature) => feature.id)
    .filter((id) => selected.has(id))
    .join(",");
}

export function getSaasEstimate(ids: Iterable<string>) {
  const selected = new Set(ids);
  const selectedFeatures = saasFeatures.filter((feature) => selected.has(feature.id));
  const totalDays = selectedFeatures.reduce((sum, feature) => sum + feature.days, 0);

  const tier =
    totalDays <= 12
      ? {
          label: "Simple",
          description: "A focused MVP with core features. Ideal for validation.",
        }
      : totalDays <= 25
        ? {
            label: "Standard",
            description: "A well-rounded product with multiple integrated systems.",
          }
        : {
            label: "Complex",
            description: "A feature-rich platform requiring careful architecture.",
          };

  return { selectedFeatures, totalDays, tier };
}
