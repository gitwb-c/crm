"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupViabilidadePlugin = void 0;
const tsyringe_1 = require("tsyringe");
const eventBus_1 = require("../../core/eventBus");
const core_1 = __importDefault(require("./core"));
const _coreInstance = tsyringe_1.container.resolve(core_1.default);
const setupViabilidadePlugin = () => {
    eventBus_1.eventBus.subscribe("viabilidade", (data) => {
        return _coreInstance.viabilidade(data);
    });
};
exports.setupViabilidadePlugin = setupViabilidadePlugin;
