"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRastreamentoPlugin = void 0;
const tsyringe_1 = require("tsyringe");
const crm_1 = require("../../core/crm");
const core_1 = __importDefault(require("./core"));
const _coreInstance = tsyringe_1.container.resolve(core_1.default);
const setupRastreamentoPlugin = () => {
    crm_1.eventBus.subscribe("lead", async (data) => {
        return _coreInstance.setRastreamento(data);
    });
};
exports.setupRastreamentoPlugin = setupRastreamentoPlugin;
