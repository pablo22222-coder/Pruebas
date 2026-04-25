"use client";

import Link from "next/link";
import { ShieldCheck, Zap, MessageSquare } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AnimatedGridPattern } from "@/components/magic/animated-grid-pattern";
import { BlurFade } from "@/components/magic/blur-fade";
import { Particles } from "@/components/magic/particles";
import { ShimmerButton } from "@/components/magic/shimmer-button";
import { SparklesText } from "@/components/magic/sparkles-text";
import { TypingAnimation } from "@/components/magic/typing-animation";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 md:pt-40">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={120}
        ease={70}
        color="#ffffff"
        staticity={40}
      />
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.05}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "absolute inset-0 -z-10 h-full w-full skew-y-6 fill-primary/20 stroke-primary/30 opacity-30",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <BlurFade delay={0.05} inView>
            <Badge
              variant="outline"
              className="gap-2 border-border/80 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              ✦ Disponible para nuevos proyectos
            </Badge>
          </BlurFade>

          <BlurFade delay={0.15} inView className="mt-8">
            <h1 className="text-balance text-5xl font-bold tracking-tight md:text-7xl">
              <span className="block">Automatizo tu negocio</span>
              <span className="mt-2 block">
                <span className="gradient-text inline-block bg-clip-text">
                  con
                </span>{" "}
                <SparklesText
                  text="IA"
                  className="gradient-text inline-block bg-clip-text"
                  sparklesCount={6}
                />
                .
              </span>
              <span className="mt-2 block text-foreground/90">
                Tú céntrate en crecer.
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3} inView className="mt-6 max-w-2xl">
            <TypingAnimation
              className="mx-auto text-balance text-base text-muted-foreground md:text-lg"
              duration={20}
              delay={350}
              startOnView
            >
              Chatbots, automatizaciones y agentes de IA para agencias de marketing y negocios que quieren escalar sin contratar más personas.
            </TypingAnimation>
          </BlurFade>

          <BlurFade delay={0.45} inView>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="#demo" aria-label="Ver cómo funciona">
                <ShimmerButton className="px-6 py-3">
                  Ver cómo funciona →
                </ShimmerButton>
              </Link>
              <Button asChild size="lg" variant="outline">
                <Link href="#contacto">Hablemos</Link>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.6} inView>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Entrega en 5-7 días
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-4 sm:block"
              />
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Garantía 30 días
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-4 sm:block"
              />
              <span className="inline-flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Soporte incluido
              </span>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.8} inView>
          <div className="mt-16 flex justify-center md:mt-24">
            <DashboardMockup />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div
      className="relative w-full max-w-3xl animate-float [perspective:1000px]"
      aria-hidden="true"
    >
      <div className="absolute -inset-8 -z-10 rounded-[32px] bg-primary/15 blur-3xl" />
      <div
        className="rounded-2xl border border-border bg-card/90 p-4 shadow-2xl backdrop-blur"
        style={{ transform: "rotateY(-8deg) rotateX(4deg)" }}
      >
        <div className="flex items-center gap-2 border-b border-border/70 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <div className="ml-3 flex-1 truncate rounded-md bg-muted px-3 py-1 text-[10px] font-mono text-muted-foreground">
            workflows.pabloverdumira.com/automation/lead-qualification
          </div>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-3">
          <aside className="col-span-3 hidden flex-col gap-2 sm:flex">
            {[
              "Workflows",
              "Agentes IA",
              "Chatbots",
              "Reportes",
              "Integraciones",
            ].map((item, i) => (
              <div
                key={item}
                className={cn(
                  "rounded-md px-3 py-2 text-[11px] font-medium",
                  i === 1
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-muted",
                )}
              >
                {item}
              </div>
            ))}
          </aside>

          <main className="col-span-12 sm:col-span-9">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Leads activos", value: "248" },
                { label: "Tareas auto", value: "1.4k" },
                { label: "ROI", value: "x4.2" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border/70 bg-background/50 p-3"
                >
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-border/70 bg-background/50 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-foreground">
                  Lead qualification flow
                </p>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  Live
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                {[
                  "Webhook",
                  "Claude AI",
                  "Score",
                  "CRM",
                  "Slack",
                ].map((node, i, arr) => (
                  <div key={node} className="flex flex-1 items-center gap-2">
                    <div className="flex h-9 flex-1 items-center justify-center rounded-md border border-primary/30 bg-primary/5 text-[10px] font-medium text-foreground">
                      {node}
                    </div>
                    {i < arr.length - 1 && (
                      <span className="h-px w-3 bg-primary/40" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-1.5 font-mono text-[10px] text-muted-foreground">
                <p>
                  <span className="text-emerald-400">●</span> POST /webhook
                  /lead-captured 200ms
                </p>
                <p>
                  <span className="text-primary">●</span> claude.complete →
                  score: 92
                </p>
                <p>
                  <span className="text-secondary">●</span> hubspot.create
                  contact → ok
                </p>
                <p className="opacity-60">
                  <span className="text-emerald-400">●</span> slack.notify
                  #ventas → entregado
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
