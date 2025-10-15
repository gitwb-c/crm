"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const redis_controller_1 = __importDefault(require("../controller/redis.controller"));
const tsyringe_1 = require("tsyringe");
const redisRouter = (0, express_1.Router)();
const redisController = tsyringe_1.container.resolve(redis_controller_1.default);
redisRouter.post("/get", (0, acesso_middleware_1.acessoMiddleware)({
    all: [
        parseInt(process.env.ADM),
        parseInt(process.env.CONSULTOR),
        parseInt(process.env.BKO_VENDA),
        parseInt(process.env.BKO_TRATATIVA),
    ],
    limited: [],
}), redisController.getChaveRedis);
redisRouter.post("/set", (0, acesso_middleware_1.acessoMiddleware)({
    all: [parseInt(process.env.ADM)],
    limited: [],
}), redisController.setChaveRedis);
exports.default = redisRouter;
