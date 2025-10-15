"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheRouter = void 0;
const express_1 = require("express");
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const redis_1 = require("./redis");
const redis_parser_helper_1 = require("../services/helpers/redis.parser.helper");
exports.cacheRouter = (0, express_1.Router)();
const getCacheController = async (req, res) => {
    const { key } = req.params;
    const data = await (0, redis_parser_helper_1.redisParser)(key);
    if (!data)
        return res.status(400).json({ message: "chave nao encontrada" });
    return res.status(200).json(data);
};
const setCacheController = async (req, res) => {
    const { key, value } = req.body;
    if (!key || !value)
        return res.status(400).json({ message: "chave ou valor nao fornecidos" });
    await (0, redis_1.set)(key, value);
    return res.status(200).json({ message: "cache atualizado" });
};
exports.cacheRouter.get("/get/:key", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), getCacheController);
exports.cacheRouter.patch("/set", (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), setCacheController);
