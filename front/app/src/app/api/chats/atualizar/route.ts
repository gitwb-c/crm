import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { payload, token } = await req.json();
  const { id, ...data } = payload;
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/chats/atualizar/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
