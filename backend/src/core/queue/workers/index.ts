export async function initEvolutionWorkers() {
  await import("./evolution/worker1");
  await import("./evolution/worker2");
  await import("./evolution/worker3");
}
