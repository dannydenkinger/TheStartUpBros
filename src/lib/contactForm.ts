import { getContactAttribution } from "@/lib/contactAttribution";

type ContactApiResponse = {
  ok?: boolean;
  error?: string;
  requestId?: string;
};

export function createContactPayload(source: string, form: FormData) {
  const payload: Record<string, string | undefined> = {
    source,
    ...getContactAttribution(),
  };

  for (const [key, value] of form.entries()) {
    if (typeof value === "string") payload[key] = value;
  }

  return payload;
}

export async function submitContactPayload(
  payload: Record<string, string | undefined>,
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => ({}))) as ContactApiResponse;

  if (!response.ok || !result.ok) {
    throw new Error(
      result.error ?? "We couldn't send your request. Please try again.",
    );
  }

  return result;
}
