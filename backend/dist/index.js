"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crm_1 = require("./core/crm");
const prisma_1 = require("./prisma");
const index_1 = require("./core/queue/workers/index");
const workers_1 = require("./services/workers/workers");
const PORT = process.env.PORT || 4444;
(async () => {
    await (0, index_1.initEvolutionWorkers)();
    await (0, workers_1.initWorkers)();
    crm_1.server.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}  -  ${new Date().toLocaleString()}`);
    });
})();
process.on("SIGINT", async () => {
    await prisma_1.prisma.$disconnect();
    process.exit(0);
});
process.on("SIGTERM", async () => {
    await prisma_1.prisma.$disconnect();
    process.exit(0);
});
