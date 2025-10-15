import ListaCampos from "@/app/components/config.campos";
import { cookies } from "next/headers";

export default async function Page() {
  const token = (await cookies()).get("token")?.value;
  const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/campos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const campos = await r.json();

  return (
    <div>
      <span>Campos Personalizados</span>
      <ListaCampos initialCampos={campos} />
    </div>
  );
}
