import { Worker } from "bullmq";
import gatewayCore from "../../../../gateway/core";
import { evolutionQueue } from "../../queue";
import { wsMensagem, wsNegocio } from "../../../helpers/socket.helper";
import { EvolutionGatewayPayload } from "../../../contracts/evolution.gateway.payload.contract";
import { workerChatbot } from "../../../helpers/evolution.worker.helper";

const worker_1 = new Worker(
  "evolutionQueue",
  async (job) => {
    const payload: EvolutionGatewayPayload | null =
      await gatewayCore.evolutionGateway(job.data);

    if (!payload) return;

    if (payload.tipo === "novoNegocio") {
      wsNegocio(payload);
    }

    if (payload.tipo === "negocioExistente") {
      const { negocio, mensagem } = payload;
      wsMensagem(mensagem, negocio);
    }

    await workerChatbot(payload);
  },
  { connection: evolutionQueue.opts.connection, concurrency: 7 }
);

worker_1.on("completed", (job) =>
  console.log(
    `${job.id} processado no worker 1  -  ${new Date().toLocaleString()}`
  )
);

worker_1.on("failed", (job, err) =>
  console.log(
    `${job?.id} falhou no worker 1  -  ${new Date().toLocaleString()}`,
    err
  )
);
