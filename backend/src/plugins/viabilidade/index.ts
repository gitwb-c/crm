import { container } from "tsyringe";
import { eventBus } from "../../core/eventBus";
import { ViabilidadeContract, ViabilidadePayload } from "./contracts";
import Core from "./core";

const _coreInstance = container.resolve(Core);
export const setupViabilidadePlugin = () => {
  eventBus.subscribe(
    "viabilidade",
    (data?: ViabilidadeContract): Promise<ViabilidadePayload | undefined> => {
      return _coreInstance.viabilidade(data);
    }
  );
};
