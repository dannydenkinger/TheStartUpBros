"use client";

import { useEffect } from "react";
import { captureInitialAttribution } from "@/lib/contactAttribution";

export function ContactAttributionCapture() {
  useEffect(() => captureInitialAttribution(), []);
  return null;
}
