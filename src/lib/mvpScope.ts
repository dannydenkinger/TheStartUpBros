export const productTypes = [
  {
    id: "saas",
    label: "SaaS platform",
    description: "A subscription product used in the browser.",
    baseDays: 4,
  },
  {
    id: "mobile",
    label: "Mobile app",
    description: "An iOS or Android product built for repeat use.",
    baseDays: 6,
  },
  {
    id: "ai",
    label: "AI product",
    description: "A focused workflow powered by one or more AI models.",
    baseDays: 5,
  },
  {
    id: "marketplace",
    label: "Marketplace",
    description: "A product connecting buyers, sellers, or service providers.",
    baseDays: 7,
  },
  {
    id: "internal",
    label: "Internal tool",
    description: "Software that replaces a manual team workflow.",
    baseDays: 4,
  },
] as const;

export const audiences = [
  {
    id: "consumers",
    label: "Individual customers",
    description: "People signing up and using the product for themselves.",
    extraDays: 0,
  },
  {
    id: "small-teams",
    label: "Small teams",
    description: "Companies with a few users sharing one workspace.",
    extraDays: 1,
  },
  {
    id: "enterprise",
    label: "Enterprise teams",
    description: "Larger organizations with roles, controls, and reviews.",
    extraDays: 3,
  },
  {
    id: "internal-teams",
    label: "Your own team",
    description: "Employees replacing spreadsheets or manual operations.",
    extraDays: 1,
  },
] as const;

export const launchGoals = [
  {
    id: "validate",
    label: "Validate demand",
    description: "Test whether the problem and solution resonate.",
    extraDays: 0,
  },
  {
    id: "first-customers",
    label: "Win first customers",
    description: "Launch something real customers can pay for and use.",
    extraDays: 1,
  },
  {
    id: "replace-manual",
    label: "Replace manual work",
    description: "Turn a repeated process into a reliable workflow.",
    extraDays: 1,
  },
  {
    id: "pilot",
    label: "Run a client pilot",
    description: "Deliver a controlled version to a committed partner.",
    extraDays: 2,
  },
] as const;

export const capabilities = [
  {
    id: "accounts",
    label: "User accounts",
    description: "Signup, login, profiles, and account recovery.",
    days: 3,
  },
  {
    id: "payments",
    label: "Payments",
    description: "Subscriptions, checkout, billing, or payouts.",
    days: 4,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "A personalized workspace with useful status and data.",
    days: 4,
  },
  {
    id: "ai-workflow",
    label: "AI workflow",
    description: "Model calls, prompts, review states, and fallbacks.",
    days: 5,
  },
  {
    id: "integrations",
    label: "Outside integrations",
    description: "Connections to CRMs, calendars, data, or other APIs.",
    days: 3,
  },
  {
    id: "admin",
    label: "Admin controls",
    description: "Manage users, content, settings, and support tasks.",
    days: 3,
  },
  {
    id: "files",
    label: "Files and media",
    description: "Uploads, permissions, previews, and storage.",
    days: 2,
  },
  {
    id: "notifications",
    label: "Notifications",
    description: "Transactional email and important in-app updates.",
    days: 2,
  },
  {
    id: "realtime",
    label: "Real-time collaboration",
    description: "Live presence, updates, chat, or shared editing.",
    days: 5,
  },
] as const;

export const buildPostures = [
  {
    id: "lean",
    label: "Lean validation",
    description: "Keep only the shortest credible path to learning.",
    featureLimit: 4,
    hardeningDays: 0,
  },
  {
    id: "balanced",
    label: "Balanced launch",
    description: "Ship a focused product that is ready for early customers.",
    featureLimit: 6,
    hardeningDays: 2,
  },
  {
    id: "foundation",
    label: "Strong foundation",
    description: "Include every selected capability and extra launch hardening.",
    featureLimit: Number.POSITIVE_INFINITY,
    hardeningDays: 4,
  },
] as const;

export type ProductTypeId = (typeof productTypes)[number]["id"];
export type AudienceId = (typeof audiences)[number]["id"];
export type LaunchGoalId = (typeof launchGoals)[number]["id"];
export type CapabilityId = (typeof capabilities)[number]["id"];
export type BuildPostureId = (typeof buildPostures)[number]["id"];

export type MvpScopeAnswers = {
  productType?: ProductTypeId;
  audience?: AudienceId;
  goal?: LaunchGoalId;
  capabilities: CapabilityId[];
  posture?: BuildPostureId;
};

type SearchValues = Record<string, string | string[] | undefined>;

const productTypeIds = new Set(productTypes.map((option) => option.id));
const audienceIds = new Set(audiences.map((option) => option.id));
const goalIds = new Set(launchGoals.map((option) => option.id));
const capabilityIds = new Set(capabilities.map((option) => option.id));
const postureIds = new Set(buildPostures.map((option) => option.id));

function first(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

function known<T extends string>(value: string | undefined, ids: Set<string>) {
  return value && ids.has(value) ? (value as T) : undefined;
}

export function parseMvpScopeAnswers(values: SearchValues): MvpScopeAnswers {
  const requestedCapabilities = (first(values.capabilities) ?? "")
    .split(",")
    .map((value) => value.trim());

  return {
    productType: known<ProductTypeId>(first(values.productType), productTypeIds),
    audience: known<AudienceId>(first(values.audience), audienceIds),
    goal: known<LaunchGoalId>(first(values.goal), goalIds),
    capabilities: capabilities
      .map((option) => option.id)
      .filter(
        (id) => requestedCapabilities.includes(id) && capabilityIds.has(id),
      ),
    posture: known<BuildPostureId>(first(values.posture), postureIds),
  };
}

export function serializeMvpScopeAnswers(answers: MvpScopeAnswers) {
  const params = new URLSearchParams();
  if (answers.productType) params.set("productType", answers.productType);
  if (answers.audience) params.set("audience", answers.audience);
  if (answers.goal) params.set("goal", answers.goal);
  if (answers.capabilities.length) {
    const selected = new Set(answers.capabilities);
    params.set(
      "capabilities",
      capabilities
        .map((option) => option.id)
        .filter((id) => selected.has(id))
        .join(","),
    );
  }
  if (answers.posture) params.set("posture", answers.posture);
  return params.toString();
}

export function isMvpScopeComplete(answers: MvpScopeAnswers) {
  return Boolean(
    answers.productType &&
      answers.audience &&
      answers.goal &&
      answers.capabilities.length &&
      answers.posture,
  );
}

const productPriorities: Record<ProductTypeId, CapabilityId[]> = {
  saas: [
    "accounts",
    "dashboard",
    "payments",
    "admin",
    "notifications",
    "integrations",
    "files",
    "ai-workflow",
    "realtime",
  ],
  mobile: [
    "accounts",
    "notifications",
    "dashboard",
    "payments",
    "files",
    "integrations",
    "admin",
    "ai-workflow",
    "realtime",
  ],
  ai: [
    "ai-workflow",
    "accounts",
    "dashboard",
    "files",
    "admin",
    "integrations",
    "notifications",
    "payments",
    "realtime",
  ],
  marketplace: [
    "accounts",
    "payments",
    "admin",
    "notifications",
    "dashboard",
    "files",
    "integrations",
    "realtime",
    "ai-workflow",
  ],
  internal: [
    "dashboard",
    "accounts",
    "integrations",
    "admin",
    "files",
    "notifications",
    "ai-workflow",
    "realtime",
    "payments",
  ],
};

const stackByProduct: Record<ProductTypeId, string[]> = {
  saas: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Vercel"],
  mobile: ["React Native", "Expo", "TypeScript", "Supabase", "Stripe"],
  ai: ["Next.js", "TypeScript", "PostgreSQL", "AI model API", "Vercel"],
  marketplace: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Stripe Connect",
    "Vercel",
  ],
  internal: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Role-based access",
    "Vercel",
  ],
};

const productRisks: Record<ProductTypeId, string> = {
  saas: "Define the one repeatable workflow users should complete before expanding the feature set.",
  mobile:
    "Validate device requirements and store-review constraints before locking the release plan.",
  ai: "Create a review path for inaccurate model output and define what data the model may receive.",
  marketplace:
    "Prove how the first buyers and sellers will meet; marketplace liquidity is a launch dependency.",
  internal:
    "Map the current manual workflow and its exceptions before automating the happy path.",
};

const audienceRisks: Record<AudienceId, string> = {
  consumers: "Test onboarding with first-time users who have no product context.",
  "small-teams": "Decide workspace ownership, invitations, and the minimum useful set of roles.",
  enterprise:
    "Confirm security, permissions, audit, and procurement expectations with the pilot customer.",
  "internal-teams":
    "Choose an internal owner and agree on the source of truth before replacing the old process.",
};

const goalQuestions: Record<LaunchGoalId, string> = {
  validate: "What user behavior would prove this idea deserves another build cycle?",
  "first-customers": "What must a customer accomplish before they would reasonably pay?",
  "replace-manual": "Which repeated task consumes the most time or creates the most errors today?",
  pilot: "What does the pilot partner need to see, do, and approve for the pilot to count as successful?",
};

export function getMvpScopePlan(answers: MvpScopeAnswers) {
  if (!isMvpScopeComplete(answers)) return undefined;

  const product = productTypes.find(
    (option) => option.id === answers.productType,
  )!;
  const audience = audiences.find((option) => option.id === answers.audience)!;
  const goal = launchGoals.find((option) => option.id === answers.goal)!;
  const posture = buildPostures.find((option) => option.id === answers.posture)!;
  const selected = new Set(answers.capabilities);
  const ordered = productPriorities[product.id]
    .filter((id) => selected.has(id))
    .map((id) => capabilities.find((option) => option.id === id)!);
  const buildNow = ordered.slice(0, posture.featureLimit);
  const buildLater = ordered.slice(posture.featureLimit);
  const workingDays =
    product.baseDays +
    audience.extraDays +
    goal.extraDays +
    posture.hardeningDays +
    buildNow.reduce((sum, capability) => sum + capability.days, 0);
  const minimumDays = Math.max(10, Math.round(workingDays * 0.85));
  const maximumDays = Math.max(minimumDays + 3, Math.round(workingDays * 1.2));
  const minimumWeeks = Math.max(2, Math.ceil(minimumDays / 5));
  const maximumWeeks = Math.max(minimumWeeks + 1, Math.ceil(maximumDays / 5));

  return {
    product,
    audience,
    goal,
    posture,
    buildNow,
    buildLater,
    timeline: `${minimumWeeks}–${maximumWeeks} weeks`,
    timelineDays: `${minimumDays}–${maximumDays} development days`,
    stack: stackByProduct[product.id],
    risks: [productRisks[product.id], audienceRisks[audience.id]],
    validationQuestions: [
      goalQuestions[goal.id],
      "Which capability can be removed without breaking the product's main promise?",
      "Who will use the first version and how will their feedback reach the product team?",
    ],
  };
}
