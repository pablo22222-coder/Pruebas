"use client";

import Link from "next/link";
import { ArrowRight, Bot, Brain, Globe, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magic/blur-fade";
import { BorderBeam } from "@/components/magic/border-beam";
import { MagicCard } from "@/components/magic/magic-card";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  delivery: string;
  highlight?: boolean;
  badge?: string;
}

const services: Service[] = [
  {
    icon: Zap,
    title: "Automatizaciones",
    description:
      "Elimino las tareas repetitivas de tu equipo con flujos automáticos de Make, n8n e IA. Reporting, seguimiento de leads, onboarding y publicación de contenido.",
    price: "Desde €400",
    delivery: "5-7 días",
  },
  {
    icon: Bot,
    title: "Chatbots IA",
    description:
      "Un chatbot que responde a tus leads en 30 segundos, 24h al día, captura sus datos y te los manda directamente.",
    price: "Desde €250",
    delivery: "3-5 días",
  },
  {
    icon: Brain,
    title: "Agentes IA",
    description:
      "Un sistema autónomo que gestiona prospección, atención al cliente y generación de contenido sin intervención humana.",
    price: "Desde €1.000",
    delivery: "10-15 días",
    highlight: true,
    badge: "Más potente",
  },
  {
    icon: Globe,
    title: "Diseño web",
    description:
      "Tu web profesional en 7 días. Rápida, bonita, con chatbot integrado y optimizada para convertir visitas en clientes.",
    price: "Desde €350",
    delivery: "7 días",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade inView>
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 bg-primary/10 text-primary"
            >
              4 servicios
            </Badge>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Qué puedo hacer por tu negocio
            </h2>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Cada servicio está diseñado para resolver un problema concreto.
              Sin paquetes genéricos.
            </p>
          </BlurFade>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <BlurFade key={service.title} delay={0.1 + i * 0.1} inView>
              <MagicCard className="group relative h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.45)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {service.badge && (
                      <Badge className="bg-primary text-primary-foreground">
                        {service.badge}
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {service.delivery}
                    </Badge>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">
                    {service.price}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="group/btn">
                    <Link href="#contacto">
                      Saber más
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>

                {service.highlight && (
                  <BorderBeam size={180} duration={10} />
                )}
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
