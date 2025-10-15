import { container } from "tsyringe";
import { eventBus } from "../../../core/crm";
import Core from "./core";
import { AguardInstalContract } from "../../../core/contracts/aguard.instal.job.contract";

const _coreInstance = container.resolve(Core);
const aguardInstalWorker = async () => {
  eventBus.subscribe(
    "msgAguardInstal",
    async (data?: AguardInstalContract): Promise<void> => {
      return await _coreInstance.filaMsgsAguardInstal(data!);
    }
  );
};

aguardInstalWorker();
