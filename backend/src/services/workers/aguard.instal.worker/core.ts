import { singleton } from "tsyringe";
import { msgsAguardInstalQueue } from "./queue/queue";
import {
  AguardInstalContract,
  AguardInstalJobContract,
} from "../../../core/contracts/aguard.instal.job.contract";

@singleton()
export default class Core {
  constructor() {}

  filaMsgsAguardInstal = async (data: AguardInstalContract): Promise<void> => {
    if (data.action === "remove") {
      await msgsAguardInstalQueue.remove(
        `aguardInstal_${data.negocio.id.toString()}`
      );
    } else if (data.action === "add") {
      const payload: AguardInstalJobContract = {
        data: {
          negocio: data.negocio,
          day: data.day,
        },
      };
      await msgsAguardInstalQueue.add("msgsAguardInstalQueue", payload, {
        jobId: `aguardInstal_${data.negocio.id.toString()}`,
      });
    }
  };
}
