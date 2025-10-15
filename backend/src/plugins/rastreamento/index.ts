import { container } from "tsyringe";
import { eventBus } from "../../core/crm";
import { Rastreamento } from "./contracts";
import Core from "./core";

type r = Rastreamento | undefined;

const _coreInstance = container.resolve(Core);
export const setupRastreamentoPlugin = () => {
  eventBus.subscribe("lead", async (data?: any): Promise<r> => {
    return _coreInstance.setRastreamento(data);
  });
};
