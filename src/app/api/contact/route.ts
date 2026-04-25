import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  mensaje: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    console.log("[contact] new message", {
      nombre: data.nombre,
      email: data.email,
      mensaje: data.mensaje.slice(0, 200),
      receivedAt: new Date().toISOString(),
    });

    // TODO: hook up Resend / Mailgun / Slack here.

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Datos inválidos", issues: error.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Error interno" },
      { status: 500 },
    );
  }
}
