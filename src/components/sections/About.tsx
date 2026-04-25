"use client";

import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magic/blur-fade";
import { DotPattern } from "@/components/magic/dot-pattern";
import { cn } from "@/lib/utils";

const bullets = [
  "Respuesta garantizada en menos de 24 horas",
  "Comunicación directa, sin account managers",
  "Entrego lo que prometo o devuelvo el dinero",
];

const tags = ["Make · n8n", "Claude API", "Garantía total"];

export function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-24">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_left,white,transparent)]",
          "fill-primary/10",
        )}
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <BlurFade inView>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -inset-6 -z-10 rounded-full bg-primary/30 blur-3xl"
                />
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary via-fuchsia-500 to-secondary text-4xl font-bold text-primary-foreground shadow-xl ring-2 ring-primary/40">
                  PV
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-border/80 bg-card/60 text-foreground/90"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </BlurFade>

          <div>
            <BlurFade inView>
              <p className="text-sm font-medium text-primary">
                ¿Por qué yo y no una agencia?
              </p>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Un developer de 16 años que construye cosas reales
              </h2>
            </BlurFade>
            <BlurFade delay={0.15} inView>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Mientras la mayoría de agencias te cobran por overhead,
                reuniones y decks de PowerPoint, yo hago el trabajo
                directamente — sin intermediarios, sin burocracia, con
                comunicación en tiempo real. También estoy construyendo mi
                propio software de prospección con IA, lo que significa que
                entiendo estos sistemas desde dentro, no solo como integrador.
                No eres un cliente en una lista — eres el proyecto en el que
                me enfoco.
              </p>
            </BlurFade>

            <ul className="mt-6 space-y-3">
              {bullets.map((bullet, i) => (
                <BlurFade key={bullet} delay={0.2 + i * 0.05} inView>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-foreground/90">{bullet}</span>
                  </li>
                </BlurFade>
              ))}
            </ul>

            <BlurFade delay={0.4} inView>
              <Button asChild variant="outline" className="mt-8">
                <Link href="#proceso">Conoce mi proceso →</Link>
              </Button>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
