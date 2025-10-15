"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const core_1 = __importDefault(require("../../../../gateway/core"));
const queue_1 = require("../../queue");
const socket_helper_1 = require("../../../helpers/socket.helper");
const evolution_worker_helper_1 = require("../../../helpers/evolution.worker.helper");
const worker_1 = new bullmq_1.Worker("evolutionQueue", async (job) => {
    const payload = await core_1.default.evolutionGateway(job.data);
    if (!payload)
        return;
    if (payload.tipo === "novoNegocio") {
        (0, socket_helper_1.wsNegocio)(payload);
    }
    if (payload.tipo === "negocioExistente") {
        const { negocio, mensagem } = payload;
        (0, socket_helper_1.wsMensagem)(mensagem, negocio);
    }
    await (0, evolution_worker_helper_1.workerChatbot)(payload);
}, { connection: queue_1.evolutionQueue.opts.connection, concurrency: 7 });
worker_1.on("completed", (job) => console.log(`${job.id} processado no worker 1  -  ${new Date().toLocaleString()}`));
worker_1.on("failed", (job, err) => console.log(`${job?.id} falhou no worker 1  -  ${new Date().toLocaleString()}`, err));
