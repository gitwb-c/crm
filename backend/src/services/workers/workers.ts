export async function initWorkers() {
  await import("./fila.worker/index");
  await import("./aguard.instal.worker/index");
}
