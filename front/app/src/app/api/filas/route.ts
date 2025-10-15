import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const r = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/filas`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await r.json();
  return NextResponse.json(data);
}
