"use client";

import { forwardRef, useRef } from "react";
import { ClipboardList, Code2, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { AnimatedBeam } from "@/components/magic/animated-beam";
import { BlurFade } from "@/components/magic/blur-fade";
import { cn } from "@/lib/utils";

interface Step {
  num: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    num: 1,
    title: "Auditoría gratuita (60 min)",
    description:
      "Analizamos juntos todos los procesos de tu negocio. Encuentro exactamente dónde estás perdiendo tiempo y dinero. Te entrego un mapa visual completo con recomendaciones.",
    icon: ClipboardList,
  },
  {
    num: 2,
    title: "Implementación a medida (3-7 días)",
    description:
      "Construyo el sistema específico para tu negocio. Tú no tocas nada — solo revisas el resultado cuando esté listo.",
    icon: Code2,
  },
  {
    num: 3,
    title: "Resultados garantizados",
    description:
      "Si en 30 días no funciona como prometí, lo arreglo gratis o te devuelvo el dinero. Sin letra pequeña, sin condiciones.",
    icon: ShieldCheck,
  },
];

const Node = forwardRef<
  HTMLDivElement,
  { step: Step; className?: string }
>(({ step, className }, ref) => {
  const Icon = step.icon;
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex w-full max-w-sm flex-col items-center rounded-2xl border border-border bg-card/80 p-6 text-center shadow-sm backdrop-blur",
        className,
      )}
    >
      <div className="relative">
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-2xl"
        />
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-[0_0_12px_2px_rgba(124,58,237,0.5)]">
          {step.num}
        </span>
      </div>
      <h3 className="mt-5 text-base font-semibold tracking-tight">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </div>
  );
});
Node.displayName = "Node";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);

  return (
    <section id="proceso" className="relative bg-muted/20 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade inView>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              De cero a funcionando en menos de una semana
            </h2>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Un proceso claro en tres pasos. Sin sorpresas.
            </p>
          </BlurFade>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row md:items-stretch md:gap-6"
        >
          <BlurFade delay={0.15} inView className="flex w-full justify-center">
            <Node step={steps[0]} ref={node1Ref} />
          </BlurFade>
          <BlurFade delay={0.3} inView className="flex w-full justify-center">
            <Node step={steps[1]} ref={node2Ref} />
          </BlurFade>
          <BlurFade delay={0.45} inView className="flex w-full justify-center">
            <Node step={steps[2]} ref={node3Ref} />
          </BlurFade>

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node1Ref}
              toRef={node2Ref}
              curvature={-40}
              duration={5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node2Ref}
              toRef={node3Ref}
              curvature={-40}
              duration={5}
              delay={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
