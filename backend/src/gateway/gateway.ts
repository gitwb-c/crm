import { Router } from "express";
import gatewayController from "./controller";
const gatewayRouter = Router();

gatewayRouter.post("/evolution", gatewayController.evolutionController);

export default gatewayRouter;
