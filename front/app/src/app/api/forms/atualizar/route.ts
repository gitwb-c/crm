export async function POST(req: Request) {
  const { id, campos, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/atualizar`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ idNegocio: id, campos }),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
