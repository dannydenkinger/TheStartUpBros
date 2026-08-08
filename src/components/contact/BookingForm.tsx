"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { createContactPayload, submitContactPayload } from "@/lib/contactForm";
import { trackLead } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full h-12 rounded-xl border border-input bg-(--surface-input) px-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-colors duration-200";

const labelStyles = "block text-caption font-medium mb-2";

export function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = new FormData(e.currentTarget);
    const payload = createContactPayload("BookingForm", form);

    try {
      await submitContactPayload(payload);
      trackLead("BookingForm");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="card-elevated p-10 text-center">
        <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-(--success-soft) text-(--success)">
          <Check className="w-5 h-5" strokeWidth={2.5} />
        </div>
        <h3 className="text-h3 text-foreground mb-2">Thank you!</h3>
        <p className="text-[13px] text-muted-foreground">
          We&apos;ll be in touch within 24 hours to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-elevated p-6 sm:p-8 md:p-10 space-y-6">
      <div
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="booking-fax-number">Fax number</label>
        <input
          id="booking-fax-number"
          name="faxNumber"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelStyles}>
          Company / Project Name
        </label>
        <input
          id="company"
          name="company"
          placeholder="Your company or project"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="budget" className={labelStyles}>
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          required
          className={`${inputStyles} appearance-none cursor-pointer invalid:text-muted-foreground/60`}
        >
          <option value="">Select a range</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelStyles}>
          Tell Us About Your Project
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="What are you building? What's your timeline?"
          className="w-full min-h-[120px] rounded-xl border border-input bg-(--surface-input) px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 resize-y focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-colors duration-200"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-pill btn-pill-primary w-full sm:w-fit disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Request Consultation
            <span aria-hidden className="btn-arrow">
              →
            </span>
          </>
        )}
      </button>

      {status === "error" && (
        <p
          role="alert"
          aria-live="assertive"
          className="text-sm text-red-600 dark:text-red-400"
        >
          We couldn&apos;t send your request right now. Please try again.
        </p>
      )}
    </form>
  );
}
