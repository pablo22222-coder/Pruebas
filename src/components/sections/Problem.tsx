"use client";

import { Clock, RefreshCw, TrendingDown } from "lucide-react";

import { BlurFade } from "@/components/magic/blur-fade";
import { BorderBeam } from "@/components/magic/border-beam";
import { MagicCard } from "@/components/magic/magic-card";
import { NumberTicker } from "@/components/magic/number-ticker";

const items = [
  {
    icon: Clock,
    valueNode: (
      <>
        <NumberTicker value={78} className="text-5xl font-bold text-primary" />
        <span className="text-5xl font-bold text-primary">%</span>
      </>
    ),
    text: "de los leads que no reciben respuesta en 5 minutos no vuelven a contactar.",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: RefreshCw,
    valueNode: (
      <>
        <NumberTicker value={20} className="text-5xl font-bold text-primary" />
        <span className="text-5xl font-bold text-primary">h</span>
      </>
    ),
    text: "dedica de media una agencia pequeña a tareas repetitivas que podría automatizar una IA.",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingDown,
    valueNode: (
      <span className="text-5xl font-bold text-rose-400">€0</span>
    ),
    text: "lo que cuesta atraer leads si no tienes un sistema que los responda y capture automáticamente.",
    iconClass: "bg-rose-500/10 text-rose-400",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade inView>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              ¿Cuántos clientes pierdes cada semana sin saberlo?
            </h2>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Cada minuto sin un sistema que responda y capture leads es dinero
              que se va por el desagüe. Estos números hablan por sí solos.
            </p>
          </BlurFade>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <BlurFade key={i} delay={0.15 + i * 0.1} inView>
              <MagicCard className="group relative h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.4)]">
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.iconClass}`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex items-baseline gap-1">{item.valueNode}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <BorderBeam
                  size={140}
                  duration={9}
                  delay={i * 1.5}
                  className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
