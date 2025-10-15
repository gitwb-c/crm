import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/chats/conversa/buscar`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        include: {
          chat: {
            include: {
              mensagens: {
                orderBy: {
                  timestamp: "desc",
                },
              },
              negocio: true,
              usuariosConectados: {
                include: { usuarioConectado: { include: { usuario: true } } },
              },
            },
          },
        },
        where: { chat: { chatFechado: false }, visualizar: true },
      }),
    }
  );
  const data = await r.json();
  return NextResponse.json(data);
}
