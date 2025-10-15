import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nome, telefone, body, token } = await req.json();
  let type: string;
  const payload = { nome, numero: telefone, ...body };
  payload.base64 ? (type = "arquivo") : (type = "texto");
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/mensagens/enviar/${type}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
