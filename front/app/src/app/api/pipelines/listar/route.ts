import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pipelines`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
