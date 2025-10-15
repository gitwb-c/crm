import { Worker } from "bullmq";
import { connection, msgsAguardInstalQueue } from "./queue";
import { AguardInstalJobContract } from "../../../../core/contracts/aguard.instal.job.contract";
import { container } from "tsyringe";
import MensagemService from "../../../mensagem.service";

const _mensagemService = container.resolve(MensagemService);
const worker = new Worker(
  "msgsAguardInstalQueue",
  async <T extends AguardInstalJobContract>(job: T): Promise<void> => {
    const { day, negocio } = job.data;
    // _mensagemService.enviarMensagemTexto({
    //   nome: negocio.chat.nome,
    //   numero: negocio.telefone,
    //   fromMe: true,
    //   base64: false,
    //   mensagem: "",
    // });

    if (day < 3) {
      await msgsAguardInstalQueue.add(
        "msgsAguardInstalQueue",
        { ...job.data, day: day + 1 },
        {
          delay: 24 * 60 * 60 * 1000,
          jobId: `aguardInstal_${negocio.id.toString()}`,
        }
      );
    }
  },
  { connection, concurrency: 5 }
);

worker.on("completed", (job) =>
  console.log(
    `${job.id} processado no worker  -  ${new Date().toLocaleString()}`
  )
);

worker.on("failed", (job, err) =>
  console.log(
    `${job?.id} falhou no worker  -  ${new Date().toLocaleString()}`,
    err
  )
);
