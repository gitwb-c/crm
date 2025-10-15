import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { evolutionQueue } from "../core/queue/queue";

@injectable()
class GatewayController {
  constructor() {}

  evolutionController = async (req: Request, res: Response) => {
    await evolutionQueue.add("evolutionMessage", req.body, {
      removeOnComplete: true,
      removeOnFail: 10,
    });
    res.status(200).json({ success: true });
  };
}

const gatewayController = container.resolve(GatewayController);
export default gatewayController;
