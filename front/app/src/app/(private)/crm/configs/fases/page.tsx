import ListaFases from "@/app/components/config.fases";
import { cookies } from "next/headers";

export default async function Page() {
  const token = (await cookies()).get("token")?.value;
  const re = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fases`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const fases = await re.json();
  const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/campos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const campos = await r.json();

  return (
    <div>
      <span>Fases Personalizadas</span>
      <ListaFases initialFases={fases} campos={campos} />
    </div>
  );
}
