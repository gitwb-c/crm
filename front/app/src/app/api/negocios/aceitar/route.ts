export async function POST(req: Request) {
  const { negocio, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/negocios/atualizar`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        _negocio: negocio,
        data: {
          negocioAceito: true,
          instancia: {
            update: { conversaAceita: true, conversaFechada: false },
          },
        },
      }),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
