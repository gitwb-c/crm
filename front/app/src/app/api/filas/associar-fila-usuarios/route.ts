import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, add, remove, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/filas/associar-fila-usuarios`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, add, remove }),
    }
  );
  const data = await r.json();
  return NextResponse.json(data);
}
