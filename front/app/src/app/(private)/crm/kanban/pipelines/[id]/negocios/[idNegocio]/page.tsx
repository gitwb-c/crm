import NegocioInsideView from "@/app/components/negocio.inside.view";
import { INegocioPageProps } from "@/app/models/interfaces";
import { cookies } from "next/headers";

export default async function NegocioPage({ params }: INegocioPageProps) {
  const { idNegocio } = await params;
  const token = (await cookies()).get("token")?.value;
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/negocios/buscar`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: parseInt(idNegocio), token }),
    }
  );
  const negocio = await r.json();

  const re = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/campos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const campos = await re.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pipelines/listar`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    }
  );
  const pipelines = await res.json();

  return !negocio ? (
    <div className="avisoPermissao">
      <h1>B CRM</h1>
      <span>Sem permissão</span>
    </div>
  ) : (
    <NegocioInsideView
      negocio={negocio[0]}
      campos={campos}
      pipelines={pipelines}
    />
  );
}
