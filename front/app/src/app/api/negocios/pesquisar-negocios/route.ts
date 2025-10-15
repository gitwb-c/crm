import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { searchTerm, token } = await req.json();
  const where = {
    OR: [
      { nome: { contains: searchTerm, mode: "insensitive" } },
      { telefone: { contains: searchTerm, mode: "insensitive" } },
      { nomeCliente: { contains: searchTerm, mode: "insensitive" } },
    ],
  };
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/negocios/buscar`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ where }),
    }
  );
  const data = await r.json();
  return NextResponse.json(data);
}
