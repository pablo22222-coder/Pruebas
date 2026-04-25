"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/magic/blur-fade";

const faqs = [
  {
    q: "¿Necesito saber de tecnología para usar lo que montas?",
    a: "No. Me encargo de todo desde el diseño hasta la implementación. Tú solo necesitas explicarme cómo funciona tu negocio.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar todo funcionando?",
    a: "Entre 3 y 7 días dependiendo de la complejidad. Antes de empezar te doy una fecha de entrega exacta.",
  },
  {
    q: "¿Qué pasa si algo falla después de la entrega?",
    a: "Incluyo 30 días de soporte gratuito. Si algo no funciona como prometí, lo arreglo sin coste adicional. Si no puedo arreglarlo, te devuelvo el dinero.",
  },
  {
    q: "¿Trabajas con cualquier tipo de negocio?",
    a: "Me especializo en agencias de marketing pequeñas y negocios locales, pero trabajo con cualquier negocio que tenga procesos repetitivos que se puedan automatizar.",
  },
  {
    q: "¿Puedo cancelar el mantenimiento mensual cuando quiera?",
    a: "Sí, sin permanencia ni penalización. Avisas con 15 días de antelación y listo.",
  },
  {
    q: "¿En qué consiste la auditoría gratuita?",
    a: "Es una llamada de 60 minutos donde analizo todos los procesos de tu negocio. Al final te entrego un mapa visual en Miro con las oportunidades de mejora y mi recomendación de por dónde empezar. Sin compromiso.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade inView>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Preguntas frecuentes
            </h2>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Todo lo que necesitas saber antes de empezar.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <Accordion
            type="single"
            collapsible
            className="mx-auto mt-12 w-full max-w-3xl"
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
