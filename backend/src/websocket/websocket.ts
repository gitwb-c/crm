import { Server as HTTPServer } from "http";
import { DefaultEventsMap, Server } from "socket.io";
import { container } from "tsyringe";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";

export const SOCKET_IO = "SOCKET_IO";

export let io: Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  any
>;

export const setUpWebSocket = async (server: HTTPServer) => {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  try {
    const redisUrl = `${process.env.REDIS_URL}/4`;
    const pubClient = createClient({ url: redisUrl });
    const subClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect()]);
    io.adapter(createAdapter(pubClient, subClient));
    container.registerInstance<Server>(SOCKET_IO, io);

    console.log("ws do redis adapter conectado");
  } catch (err) {
    console.error("falha ao conectar redis adapter:", err);
  }
  io.on("connection", (socket) => {
    console.log(
      `cliente ${socket.id} conectado - ${new Date().toLocaleString()}`
    );

    socket.on("join", (room) => {
      socket.join(room);
      console.log(
        `cliente ${
          socket.id
        } entrou na sala ${room} - ${new Date().toLocaleString()}`
      );
    });

    socket.on("leave", (room) => {
      socket.leave(room);
      console.log(
        `cliente ${
          socket.id
        } saiu da sala ${room} - ${new Date().toLocaleString()}`
      );
    });

    socket.on("disconnect", () => {
      console.log(
        `cliente ${socket.id} desconectado - ${new Date().toLocaleString()}`
      );
    });
  });
};

export const getIO = () => {
  if (!io) throw new Error("IO não inicializado");
  return io;
};
