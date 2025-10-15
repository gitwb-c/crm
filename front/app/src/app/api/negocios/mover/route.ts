import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { negocio, from, to, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/negocios/mover/negocio`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ negocio, from, to }),
    }
  );
  const data = await r.json();
  return NextResponse.json(data);
}
