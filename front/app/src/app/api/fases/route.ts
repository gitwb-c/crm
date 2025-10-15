import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const r = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/fases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      include: { pipeline: true, camposObrigatorios: true },
    }),
  });
  const data = await r.json();
  return NextResponse.json(data);
}
