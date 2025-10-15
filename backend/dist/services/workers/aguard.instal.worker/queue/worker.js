"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const queue_1 = require("./queue");
const tsyringe_1 = require("tsyringe");
const mensagem_service_1 = __importDefault(require("../../../mensagem.service"));
const _mensagemService = tsyringe_1.container.resolve(mensagem_service_1.default);
const worker = new bullmq_1.Worker("msgsAguardInstalQueue", async (job) => {
    const { day, negocio } = job.data;
    // _mensagemService.enviarMensagemTexto({
    //   nome: negocio.chat.nome,
    //   numero: negocio.telefone,
    //   fromMe: true,
    //   base64: false,
    //   mensagem: "",
    // });
    if (day < 3) {
        await queue_1.msgsAguardInstalQueue.add("msgsAguardInstalQueue", { ...job.data, day: day + 1 }, {
            delay: 24 * 60 * 60 * 1000,
            jobId: `aguardInstal_${negocio.id.toString()}`,
        });
    }
}, { connection: queue_1.connection, concurrency: 5 });
worker.on("completed", (job) => console.log(`${job.id} processado no worker  -  ${new Date().toLocaleString()}`));
worker.on("failed", (job, err) => console.log(`${job?.id} falhou no worker  -  ${new Date().toLocaleString()}`, err));
