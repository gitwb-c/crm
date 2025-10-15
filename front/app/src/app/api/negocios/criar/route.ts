export async function POST(req: Request) {
  const { telefone, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/negocios/criar/manual`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        telefone,
      }),
    }
  );
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
