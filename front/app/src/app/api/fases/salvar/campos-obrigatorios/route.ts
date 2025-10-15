import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { token, faseSelecionada, add } = await req.json();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/fases/campos-obrigatorios`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        idFase: faseSelecionada.id,
        add,
      }),
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
