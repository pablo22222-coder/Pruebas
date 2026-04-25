"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34600000000";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 md:hidden"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-label="Hablemos por WhatsApp"
    >
      <span
        className={`pointer-events-none whitespace-nowrap rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        ¿Hablamos por WhatsApp?
      </span>
      <span className="relative flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_30px_-4px_rgba(34,197,94,0.6)]">
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />
        <MessageCircle className="relative h-7 w-7" />
      </span>
    </a>
  );
}
