"use client";

import { Play } from "lucide-react";

import { BlurFade } from "@/components/magic/blur-fade";

export function Demo() {
  return (
    <section id="demo" className="relative bg-muted/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade inView>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Míralo funcionando en 90 segundos
            </h2>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              No es una demo genérica — es exactamente lo que montaría para tu
              negocio.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-primary/20 blur-3xl"
            />
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.18),transparent_60%)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <button
                  type="button"
                  aria-label="Reproducir demo"
                  className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_60px_-10px_rgba(124,58,237,0.8)] transition-transform hover:scale-105"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                  <Play className="relative h-8 w-8 translate-x-0.5 fill-current" />
                </button>
                <p className="mt-6 max-w-md px-4 text-sm text-muted-foreground">
                  Demo disponible próximamente — reserva una llamada para verlo
                  en directo.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
