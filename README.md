<<<<<<< Updated upstream
# Pruebas
=======
# Pablo Verdumira — Portfolio & Servicios

Web de portfolio y servicios para Pablo Verdumira, freelancer de
automatizaciones e IA. Construida con Next.js 14, TypeScript estricto,
Tailwind CSS, shadcn/ui, Magic UI y Framer Motion.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** estricto
- **Tailwind CSS** + tema dark con CSS variables
- **shadcn/ui** para componentes base (`src/components/ui`)
- **Magic UI** para animaciones (`src/components/magic`)
- **Framer Motion** para animaciones adicionales
- **React Hook Form + Zod** para el formulario de contacto
- **Geist Sans / Geist Mono** vía el paquete `geist`

## Estructura

```
src/
  app/
    layout.tsx          metadata + fuentes + providers
    page.tsx            composición de secciones
    globals.css         CSS variables + estilos base
    api/contact/route.ts  endpoint del formulario
  components/
    layout/             Navbar, Footer
    sections/           Hero, Problem, Demo, Services, Process, About, FAQ, Contact
    ui/                 componentes shadcn
    magic/              componentes Magic UI
    shared/             FloatingWhatsApp, ScrollProgress, CustomCursor
  hooks/                useScrollAnimation, use-toast
  lib/                  utils
```

## Desarrollo

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Ver `.env.local.example`:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número en formato internacional sin `+` (p.ej. `34600000000`)
- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`, `CONTACT_EMAIL` — listos para enchufar el envío real desde `src/app/api/contact/route.ts`

## Build

```bash
npm run lint
npm run build
npm run start
```

## Despliegue en Vercel

1. Importa el repo en [vercel.com/new](https://vercel.com/new).
2. Añade las variables de entorno definidas en `.env.local.example`.
3. Deploy. No requiere configuración adicional gracias a `vercel.json`.

## Personalización rápida

- Colores: `src/app/globals.css` (CSS variables) y `tailwind.config.ts`.
- Servicios, FAQ, copy: ficheros en `src/components/sections/`.
- Datos de contacto y números: `src/components/layout/Footer.tsx` y
  `src/components/sections/Contact.tsx`.

## Licencia

MIT — Pablo Verdumira.
>>>>>>> Stashed changes
