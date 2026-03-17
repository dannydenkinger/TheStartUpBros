"use client";

import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactFormModal } from "@/components/shared/ContactFormModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactFormModal />
    </ContactModalProvider>
  );
}
