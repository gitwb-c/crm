import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, senha } = await req.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "credenciais invalidas" },
      { status: 401 }
    );
  }

  const data = await res.json();

  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 60 * 24 * 90,
  });

  return NextResponse.json(data);
}
