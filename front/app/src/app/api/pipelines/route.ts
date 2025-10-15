import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { idPipeline, token, skip, usuario } = await req.json();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/pipelines/id/${idPipeline}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        select: {
          id: true,
          nome: true,
          fases: {
            select: {
              id: true,
              nome: true,
              pos: true,
              cor: true,
              idFila: true,
              perdaOuGanho: true,
              negocios: {
                take: 15,
                skip: skip ?? 0,
                orderBy: { id: "desc" },
                select: {
                  id: true,
                  nome: true,
                  telefone: true,
                  usuarioConectado: {
                    select: { usuario: { select: { nome: true } } },
                  },
                },
              },
            },
          },
        },
      }),
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
