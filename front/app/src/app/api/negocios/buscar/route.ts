import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/negocios/buscar`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ where: { id } }),
    }
  );
  const data = await r.json();
  return NextResponse.json(data);
}
