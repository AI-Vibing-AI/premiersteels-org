"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Premier Steels on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 lg:bottom-8 lg:right-8 lg:h-16 lg:w-16"
    >
      <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7" aria-hidden />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full ring-2 ring-[#25D366]/40 animate-ping"
      />
    </a>
  );
}
