import { Departamento, Fila, Usuario } from "@prisma/client";
import DepartamentoService from "../../departamento.service";
import { container } from "tsyringe";
import FilaWorker, { FILA_ATUAL } from "./fila.worker";

const _departamentoService = container.resolve(DepartamentoService);

const processarFila = async (dep: Departamento, f: Fila) => {
  if (f.tempoFila === 0) {
    console.log(
      `fila ${f.nome} tem tempo = 0, não será processada periodicamente.`
    );
    return;
  }

  container.registerInstance(FILA_ATUAL, f);
  const filaWorker = container.resolve(FilaWorker);
  await filaWorker.rodarFila();

  const tempo = f.tempoFila;
  console.log(`começou espera de ${tempo}min para a fila ${f.nome}`);

  setTimeout(async () => {
    console.log(`finalizou espera de ${tempo}min para a fila ${f.nome}`);
    await processarFila(dep, f);
  }, tempo * 60 * 1000);
};

const filaWorker = async () => {
  const deps = (await _departamentoService.lerDepartamentos(undefined, {
    usuarios: true,
    filas: true,
  })) as (Departamento & { usuarios: Usuario[] } & { filas: Fila[] })[];

  for (const dep of deps) {
    for (const f of dep.filas) {
      await processarFila(dep, f);
    }
  }
};

filaWorker();
