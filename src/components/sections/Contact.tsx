"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Linkedin, Loader2, Mail } from "lucide-react";

import { BlurFade } from "@/components/magic/blur-fade";
import { Meteors } from "@/components/magic/meteors";
import { ShimmerButton } from "@/components/magic/shimmer-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  nombre: z.string().min(2, "Nombre demasiado corto"),
  email: z.string().email("Email no válido"),
  mensaje: z.string().min(10, "Cuéntame algo más"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nombre: "", email: "", mensaje: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Error en el envío");

      toast({
        title: "Mensaje enviado ✓",
        description: "Te responderé en menos de 24h. ¡Gracias!",
        variant: "success",
      });
      reset();
    } catch {
      toast({
        title: "Algo salió mal",
        description:
          "No he podido enviar tu mensaje. Inténtalo de nuevo o escríbeme por email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12">
          <Meteors number={20} />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_70%)]"
          />

          <div className="text-center">
            <BlurFade inView>
              <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
                ¿Hablamos? 15 minutos bastan.
              </h2>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Sin presión, sin pitch de ventas. Solo una conversación para
                ver si puedo ayudarte.
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.2} inView>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mx-auto mt-10 grid max-w-xl gap-5 text-left"
            >
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  placeholder="¿Cómo te llamas?"
                  autoComplete="name"
                  className="bg-background/60"
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <p className="text-xs text-rose-400">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  className="bg-background/60"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-rose-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  placeholder="Cuéntame brevemente qué quieres automatizar"
                  rows={5}
                  className="bg-background/60"
                  {...register("mensaje")}
                />
                {errors.mensaje && (
                  <p className="text-xs text-rose-400">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>

              <div className="mt-2 flex justify-center">
                <ShimmerButton
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>Reservar llamada gratuita →</>
                  )}
                </ShimmerButton>
              </div>
            </form>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <Separator className="mx-auto my-10 max-w-xl bg-border/60" />
            <div className="flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
              <a
                href="mailto:hola@pabloverdumira.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> hola@pabloverdumira.com
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
