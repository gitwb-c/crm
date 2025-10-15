import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chat, skip, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/mensagens/conversas`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        idChat: chat.id,
        options: { take: 10, skip: skip || 0 },
      }),
    }
  );
  const data = await r.json();
  return NextResponse.json(data);
}
