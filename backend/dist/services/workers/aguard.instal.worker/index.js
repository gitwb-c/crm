"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const crm_1 = require("../../../core/crm");
const core_1 = __importDefault(require("./core"));
const _coreInstance = tsyringe_1.container.resolve(core_1.default);
const aguardInstalWorker = async () => {
    crm_1.eventBus.subscribe("msgAguardInstal", async (data) => {
        return await _coreInstance.filaMsgsAguardInstal(data);
    });
};
aguardInstalWorker();
