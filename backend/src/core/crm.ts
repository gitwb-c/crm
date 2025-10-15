import "reflect-metadata";
import express from "express";
import http from "http";

import { setUpWebSocket } from "../websocket/websocket";

import { corsConfig } from "../config/corsConfig";
import { cookieParserConfig } from "../config/cookieParserConfig";
import { bodyParserConfig } from "../config/bodyParserConfig";
import fs from "fs";
import path from "path";
import { eventBus } from "./eventBus";

export const initCrm = async () => {
  const app = express();
  const server = http.createServer(app);

  await setUpWebSocket(server);

  app.use(cookieParserConfig);
  app.use(corsConfig);
  app.use(bodyParserConfig);

  const uploadPath = path.join(__dirname, "..", "uploads");
  if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
  app.use("/uploads", express.static(uploadPath));

  const { loadRoutes } = await import("./routes");
  await loadRoutes(app);

  const { setupRastreamentoPlugin } = await import("../plugins/rastreamento");
  setupRastreamentoPlugin();

  const { setupAuditoriaPlugin } = await import("../plugins/auditoria");
  setupAuditoriaPlugin();

  const { setupViabilidadePlugin } = await import("../plugins/viabilidade");
  setupViabilidadePlugin();

  return { app, server, eventBus };
};

export { eventBus };
