import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chat, token, data, id } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/chats/conversa/atualizar`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        where: { idChat: chat.id, idUsuarioConectado: id },
        data,
      }),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
