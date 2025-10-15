import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { token, campo } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campos/atualizar/${campo.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        config: {
          upsert: {
            create: { target: campo.config.target },
            update: { target: campo.config.target },
          },
        },
      }),
    }
  );
  return r;
}
