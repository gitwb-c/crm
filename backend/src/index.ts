import dotenv from "dotenv";
dotenv.config();

import { initCrm } from "./core/crm";
import { prisma } from "./prisma";
import { initEvolutionWorkers } from "./core/queue/workers/index";
import { initWorkers } from "./services/workers/workers";

const PORT = process.env.PORT || 4444;

(async () => {
  const { server } = await initCrm();

  await initEvolutionWorkers();
  await initWorkers();

  server.listen(PORT, () => {
    console.log(
      `Servidor rodando na porta ${PORT}  -  ${new Date().toLocaleString()}`
    );
  });
})();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
