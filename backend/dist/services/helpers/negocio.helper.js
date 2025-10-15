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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarFases = buscarFases;
exports.montarUpdateNegocio = montarUpdateNegocio;
exports.sincronizarChatEFila = sincronizarChatEFila;
exports.criarFormsNegocio = criarFormsNegocio;
exports.emitirEventoEAuditoria = emitirEventoEAuditoria;
const tsyringe_1 = require("tsyringe");
const crm_1 = require("../../core/crm");
const fila_worker_1 = __importStar(require("../workers/fila.worker/fila.worker"));
async function buscarFases(faseService, fromId, toId) {
    const [faseAntiga, faseNova] = await Promise.all([
        faseService.buscarFase(fromId),
        faseService.buscarFase(toId, {
            camposObrigatorios: true,
            departamento: { include: { filas: true } },
        }),
    ]);
    return [faseAntiga, faseNova];
}
function montarUpdateNegocio(faseAntiga, faseNova, to) {
    const mudouDepto = faseNova.idDepartamento !== faseAntiga.idDepartamento;
    return {
        negocioAceito: !mudouDepto,
        fase: { connect: { id: to.idFase } },
        pipeline: { connect: { id: to.idPipeline } },
        chat: {
            update: {
                idFila: faseNova.idFila ? faseNova.idFila : undefined,
            },
        },
    };
}
async function sincronizarChatEFila(negocio, faseAntiga, faseNova) {
    if (faseNova.idDepartamento !== faseAntiga.idDepartamento) {
        for (const f of faseNova.departamento.filas) {
            tsyringe_1.container.registerInstance(fila_worker_1.FILA_ATUAL, f);
            const _filaWorker = tsyringe_1.container.resolve(fila_worker_1.default);
            await _filaWorker.rodarFila(negocio);
        }
    }
}
async function criarFormsNegocio(formService, negocio, configs) {
    const idCampo = configs.find((c) => c.target === "negocio.info.fase")?.idCampo;
    if (idCampo) {
        await formService.criarForms({
            idNegocio: negocio.id,
            campos: [
                {
                    idCampo,
                    valor: negocio.fase.nome.toUpperCase(),
                },
            ],
        });
    }
}
async function emitirEventoEAuditoria(io, mensagemService, to, from, negocio, payload) {
    io.to(`pipeline_${to.idPipeline}`).emit("moverNegocioFase", negocio, from, to);
    const [mensagemAuditoria] = await crm_1.eventBus.emit("auditoria", payload);
    if (mensagemAuditoria) {
        await mensagemService.enviarMensagemTexto({
            nome: negocio.chat.nome,
            numero: negocio.telefone,
            mensagem: mensagemAuditoria,
            interna: false,
            fromMe: true,
            base64: false,
        });
    }
}
