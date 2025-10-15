import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { isLoggedIn, token } = await req.json();
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuarios-conectados/atualizar`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: isLoggedIn ? "offline" : "online" }),
    }
  );
  return r;
}
