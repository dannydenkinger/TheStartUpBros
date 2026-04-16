"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = new FormData(e.currentTarget);
    const payload = {
      source: "BookingForm",
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      budget: form.get("budget"),
      description: form.get("description"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-elevated p-10 text-center">
        <h3 className="text-h3 text-foreground mb-2">Thank you!</h3>
        <p className="text-[13px] text-muted-foreground">
          We&apos;ll be in touch within 24 hours to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-elevated p-8 md:p-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[13px] font-medium text-foreground mb-2"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-secondary border-input rounded-xl h-11 text-[14px] placeholder:text-muted-foreground/50 focus:border-[#09f]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[13px] font-medium text-foreground mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="bg-secondary border-input rounded-xl h-11 text-[14px] placeholder:text-muted-foreground/50 focus:border-[#09f]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-[13px] font-medium text-foreground mb-2"
        >
          Company / Project Name
        </label>
        <Input
          id="company"
          name="company"
          placeholder="Your company or project"
          className="bg-secondary border-input rounded-xl h-11 text-[14px] placeholder:text-muted-foreground/50 focus:border-[#09f]"
        />
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-[13px] font-medium text-foreground mb-2"
        >
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          required
          className="w-full rounded-xl bg-secondary border border-input px-4 py-2.5 text-[14px] text-foreground h-11 focus:outline-none focus:border-[#09f] focus:ring-1 focus:ring-[#09f]"
        >
          <option value="">Select a range</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-[13px] font-medium text-foreground mb-2"
        >
          Tell Us About Your Project
        </label>
        <Textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="What are you building? What's your timeline?"
          className="bg-secondary border-input rounded-xl text-[14px] placeholder:text-muted-foreground/50 focus:border-[#09f]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-pill btn-pill-primary w-full !py-3"
      >
        {status === "submitting" ? "Sending..." : "Request Consultation"}
      </button>
    </form>
  );
}
