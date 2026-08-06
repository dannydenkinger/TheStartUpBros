const STORAGE_KEY = "startup-bros-contact-attribution";

type StoredAttribution = {
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

const utmKeys = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_term: "utmTerm",
  utm_content: "utmContent",
} as const;

function readStoredAttribution(): StoredAttribution {
  if (typeof window === "undefined") return {};

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as StoredAttribution) : {};
  } catch {
    return {};
  }
}

export function captureInitialAttribution() {
  if (typeof window === "undefined") return;

  try {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const attribution: StoredAttribution = {
      landingPage: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer || undefined,
    };

    for (const [queryKey, fieldKey] of Object.entries(utmKeys)) {
      const value = params.get(queryKey);
      if (value) attribution[fieldKey] = value;
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Attribution is helpful, but storage restrictions must never block a form.
  }
}

export function getContactAttribution(): StoredAttribution & {
  sourcePage?: string;
} {
  if (typeof window === "undefined") return {};

  return {
    ...readStoredAttribution(),
    sourcePage: `${window.location.pathname}${window.location.search}`,
  };
}
