import { container } from "tsyringe";
import { eventBus } from "../../core/crm";
import { AuditoriaContract } from "./contracts";
import Core from "./core";

const _coreInstance = container.resolve(Core);
export const setupAuditoriaPlugin = () => {
  eventBus.subscribe(
    "auditoria",
    async (data?: AuditoriaContract): Promise<string | undefined> => {
      return _coreInstance.auditoria(data!);
    }
  );
};
