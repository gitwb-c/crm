import { INegocio, IForm, ICampo } from "@/app/models/interfaces";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { dataDe, dataAte, filtro, camposSelecionados, token } =
      await req.json();

    const r = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/campos/buscar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          where: { nome: filtro },
        }),
      }
    );
    const campoFiltro: ICampo = await r.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        where: {
          idCampo: campoFiltro.id,
          valor: {
            gte: dataDe,
            lte: dataAte,
          },
        },
        include: { negocio: { include: { form: true } } },
      }),
    });

    const forms: (IForm & { negocio: INegocio & { form: IForm[] } })[] =
      await res.json();

    const resultado = forms.map((form) => ({
      negocio: form.negocio,
      campos: camposSelecionados.map((campo: ICampo) => {
        const formCampo = form.negocio.form.find((f) => f.idCampo === campo.id);
        return {
          campo,
          valor: formCampo ? formCampo.valor : null,
        };
      }),
    }));

    return NextResponse.json(resultado, { status: res.status });
  } catch (err) {
    console.error("Erro na rota /api/relatorios/negocios:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
