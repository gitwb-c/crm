import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chat, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/chats/atualizar/${chat.id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatFechado: true,
        chatAceito: false,
        negocio: {
          update: {
            negocioAceito: false,
          },
        },
      }),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
