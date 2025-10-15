"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILA_ATUAL = void 0;
const fila_service_1 = __importDefault(require("../../fila.service"));
const usuario_conectado_service_1 = __importDefault(require("../../usuario.conectado.service"));
const tsyringe_1 = require("tsyringe");
const chat_service_1 = __importDefault(require("../../chat.service"));
const websocket_1 = require("../../../websocket/websocket");
const socket_io_1 = require("socket.io");
exports.FILA_ATUAL = "FILA_ATUAL";
let FilaWorker = class FilaWorker {
    constructor(fila, _usuarioConectadosService, _filaService, _chatService, _io) {
        this.fila = fila;
        this._usuarioConectadosService = _usuarioConectadosService;
        this._filaService = _filaService;
        this._chatService = _chatService;
        this._io = _io;
    }
    async rodarFila(negocio) {
        const usuariosConectados = (await this._usuarioConectadosService.lerUsuariosConectados({
            usuarioConectadoFila: {
                some: { idFila: this.fila.id },
            },
        }, {
            usuarioConectadoFila: {
                include: { fila: true },
            },
        }));
        if (!usuariosConectados.length)
            return;
        const usuariosOnline = usuariosConectados.filter((uc) => uc.status === "online");
        const filaOficial = usuariosOnline.length
            ? usuariosOnline
            : usuariosConectados;
        const rel = (await this._chatService.lerChatUsuariosConectados({
            chat: {
                chatAceito: false,
                chatFechado: false,
                idFila: this.fila.id,
                negocio: {
                    fase: {
                        perdaOuGanho: false,
                        idDepartamento: this.fila.idDepartamento,
                    },
                    ...(negocio ? { id: negocio.id } : {}),
                },
            },
            usuarioConectado: {
                usuarioConectadoFila: {
                    some: { idFila: this.fila.id },
                },
            },
        }, {
            usuarioConectado: {
                include: { usuario: true },
            },
            chat: { include: { negocio: true, usuariosConectados: true } },
        }));
        if (!rel.length && negocio && this.fila.tempoFila !== 0) {
            const candidatos = filaOficial.filter((uc) => uc.usuarioConectadoFila.some((f) => f.idFila === this.fila.id));
            if (!candidatos.length)
                return;
            const escolhido = candidatos.reduce((prev, curr) => {
                const posPrev = prev.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
                    ?.pos ?? Infinity;
                const posCurr = curr.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
                    ?.pos ?? Infinity;
                return posPrev < posCurr ? prev : curr;
            });
            if (negocio.chat &&
                negocio.chat.usuariosConectados?.some((u) => u.idUsuarioConectado === escolhido.id)) {
                return;
            }
            await this._filaService.sincronizarChatUsuariosConectados({
                idChat: negocio.chat.id,
                idUsuarioConectar: [escolhido.id],
                idUsuarioDesconectar: [],
            });
            const relFila = escolhido.usuarioConectadoFila.find((f) => f.idFila === this.fila.id);
            if (relFila) {
                await this._filaService.atualizarUsuarioConectadoFila(relFila.id, {
                    pos: relFila.pos + 1,
                });
            }
            this._io
                .to(`usuario_${escolhido.id}`)
                .emit("negocioAtribuidoNotificacao", negocio);
            return;
        }
        if (rel.length) {
            for (const registro of rel) {
                const candidatos = filaOficial.filter((c) => c.id !== registro.idUsuarioConectado &&
                    c.usuarioConectadoFila.some((f) => f.idFila === this.fila.id));
                if (!candidatos.length)
                    continue;
                const escolhido = candidatos.reduce((prev, curr) => {
                    const posPrev = prev.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
                        ?.pos ?? Infinity;
                    const posCurr = curr.usuarioConectadoFila.find((f) => f.idFila === this.fila.id)
                        ?.pos ?? Infinity;
                    return posPrev < posCurr ? prev : curr;
                });
                if (registro.idUsuarioConectado === escolhido.id)
                    continue;
                await this._filaService.sincronizarChatUsuariosConectados({
                    idChat: registro.idChat,
                    idUsuarioConectar: [escolhido.id],
                    idUsuarioDesconectar: registro.idUsuarioConectado
                        ? [registro.idUsuarioConectado]
                        : [],
                });
                const relFila = escolhido.usuarioConectadoFila.find((f) => f.idFila === this.fila.id);
                if (relFila) {
                    await this._filaService.atualizarUsuarioConectadoFila(relFila.id, {
                        pos: relFila.pos + 1,
                    });
                }
                const notificados = [registro.idUsuarioConectado, escolhido.id];
                await Promise.all([
                    ...notificados.map((u) => this._io
                        .to(`usuario_${u}`)
                        .emit("negocioAtribuidoConversa", registro.chat, {
                        from: registro.idUsuarioConectado,
                        to: escolhido.id,
                    })),
                    this._io
                        .to(`usuario_${escolhido.id}`)
                        .emit("negocioAtribuidoNotificacao", registro.chat.negocio),
                ]);
            }
        }
    }
};
FilaWorker = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(exports.FILA_ATUAL)),
    __param(4, (0, tsyringe_1.inject)(websocket_1.SOCKET_IO)),
    __metadata("design:paramtypes", [Object, usuario_conectado_service_1.default,
        fila_service_1.default,
        chat_service_1.default,
        socket_io_1.Server])
], FilaWorker);
exports.default = FilaWorker;
