"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controller/auth.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const acesso_middleware_1 = require("../middlewares/acesso.middleware");
const tsyringe_1 = require("tsyringe");
const authRouter = (0, express_1.Router)();
const _authController = tsyringe_1.container.resolve(auth_controller_1.default);
authRouter.post("/register", auth_middleware_1.authMiddleware, (0, acesso_middleware_1.acessoMiddleware)({ all: [process.env.ADM], limited: [] }), _authController.register);
authRouter.post("/login", _authController.login);
exports.default = authRouter;
