export async function POST(req: Request) {
  const { valor, token } = await req.json();
  const r = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cache/set`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ key: "operadoras", value: valor }),
  });
  return new Response(r.body, {
    status: r.status,
    headers: r.headers,
  });
}
