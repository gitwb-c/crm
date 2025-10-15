import { INovoCampo } from "@/app/models/interfaces";

export async function POST(req: Request) {
  const { negocio, campos, token } = await req.json();
  const camposAtualizados = campos.map((c: INovoCampo) => {
    if (c.nomeCampo === "ENDEREÇO COMPLETO") {
      c.valor = "";
    }
    return c;
  });

  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/atualizar`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        idNegocio: negocio.id,
        campos: camposAtualizados,
      }),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
