import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { ScrollProgress } from "@/components/shared/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://pabloverdumira.com"),
  title: "Pablo Verdumira — Automatizaciones e IA para agencias y negocios",
  description:
    "Chatbots, automatizaciones con IA y agentes autónomos para agencias de marketing y negocios locales. Entrega en 5-7 días. Garantía 30 días.",
  keywords: [
    "automatizaciones IA",
    "chatbot negocio",
    "agente IA",
    "automatización marketing",
    "Make n8n España",
  ],
  authors: [{ name: "Pablo Verdumira" }],
  creator: "Pablo Verdumira",
  openGraph: {
    title: "Pablo Verdumira — Automatizaciones e IA",
    description:
      "Escala tu negocio con IA. Chatbots, automatizaciones y agentes autónomos.",
    type: "website",
    locale: "es_ES",
    url: "https://pabloverdumira.com",
    siteName: "Pablo Verdumira",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Verdumira — Automatizaciones e IA",
    description:
      "Escala tu negocio con IA. Chatbots, automatizaciones y agentes autónomos.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ScrollProgress />
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
