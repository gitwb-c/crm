"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIO = exports.setUpWebSocket = exports.io = exports.SOCKET_IO = void 0;
const socket_io_1 = require("socket.io");
const tsyringe_1 = require("tsyringe");
exports.SOCKET_IO = "SOCKET_IO";
const setUpWebSocket = (server) => {
    exports.io = new socket_io_1.Server(server, { cors: { origin: "*" } });
    tsyringe_1.container.registerInstance(exports.SOCKET_IO, exports.io);
    exports.io.on("connection", (socket) => {
        console.log(`cliente ${socket.id} conectado  -  ${new Date().toLocaleString()}`);
        socket.on("join", (room) => {
            socket.join(room);
            console.log(`cliente ${socket.id} se conectou na sala ${room}  -  ${new Date().toLocaleString()}`);
        });
        socket.on("leave", (room) => {
            socket.leave(room);
            console.log(`cliente ${socket.id} se desconectou da sala ${room}  -  ${new Date().toLocaleString()}`);
        });
        socket.on("disconnect", () => {
            console.log(`cliente ${socket.id} desconectado  -  ${new Date().toLocaleString()}`);
        });
    });
};
exports.setUpWebSocket = setUpWebSocket;
const getIO = () => {
    if (!exports.io)
        throw new Error("IO não inicializado");
    return exports.io;
};
exports.getIO = getIO;
