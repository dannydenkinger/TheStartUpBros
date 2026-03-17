import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BookingForm } from "@/components/contact/BookingForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Startup Bros. Scope-based custom pricing for your MVP project.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-display mb-4">Book a Strategy Call</h1>
      <p className="text-body-lg max-w-2xl text-muted-foreground mb-8">
        Ready to take your SaaS to the next level? Pick a time that works for you.
      </p>
      {/* Placeholder for Calendly or Scheduling Embed */}
      <div className="w-full max-w-3xl aspect-[4/3] bg-secondary rounded-2xl border border-border flex items-center justify-center">
        <span className="text-muted-foreground font-medium">Scheduling Embed Placeholder</span>
      </div>
    </div>
  );
}
