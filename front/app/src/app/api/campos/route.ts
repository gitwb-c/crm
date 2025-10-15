import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const r = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/campos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ include: { valoresLista: true, config: true } }),
  });
  const data = await r.json();
  return NextResponse.json(data);
}
