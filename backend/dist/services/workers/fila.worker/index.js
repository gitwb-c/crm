"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamento_service_1 = __importDefault(require("../../departamento.service"));
const tsyringe_1 = require("tsyringe");
const fila_worker_1 = __importStar(require("./fila.worker"));
const _departamentoService = tsyringe_1.container.resolve(departamento_service_1.default);
const processarFila = async (dep, f) => {
    if (f.tempoFila === 0) {
        console.log(`fila ${f.nome} tem tempo = 0, não será processada.`);
        return;
    }
    tsyringe_1.container.registerInstance(fila_worker_1.FILA_ATUAL, f);
    const filaWorker = tsyringe_1.container.resolve(fila_worker_1.default);
    await filaWorker.rodarFila();
    const tempo = f.tempoFila;
    console.log(`começou espera de ${tempo}min para a fila ${f.nome}`);
    setTimeout(async () => {
        console.log(`finalizou espera de ${tempo}min para a fila ${f.nome}`);
        await processarFila(dep, f);
    }, tempo * 60 * 1000);
};
const filaWorker = async () => {
    const deps = (await _departamentoService.lerDepartamentos(undefined, {
        usuarios: true,
        filas: true,
    }));
    for (const dep of deps) {
        for (const f of dep.filas) {
            processarFila(dep, f);
        }
    }
};
filaWorker();
