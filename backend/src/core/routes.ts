import "reflect-metadata";
import express from "express";

export const loadRoutes = async (app: express.Application) => {
  const { authMiddleware } = await import("../middlewares/auth.middleware");

  const gatewayRouter = (await import("../gateway/gateway")).default;
  app.use("/gateway", gatewayRouter);

  const mensagemRouter = (await import("../routes/mensagem.route")).default;
  app.use("/mensagens", mensagemRouter);

  const departamentoRouter = (await import("../routes/departamento.route"))
    .default;
  app.use("/departamentos", authMiddleware, departamentoRouter);

  const negocioRouter = (await import("../routes/negocio.route")).default;
  app.use("/negocios", authMiddleware, negocioRouter);

  const usuarioRouter = (await import("../routes/usuario.route")).default;
  app.use("/usuarios", authMiddleware, usuarioRouter);

  const pipelineRouter = (await import("../routes/pipeline.route")).default;
  app.use("/pipelines", authMiddleware, pipelineRouter);

  const chatRouter = (await import("../routes/chat.route")).default;
  app.use("/chats", authMiddleware, chatRouter);

  const formRouter = (await import("../routes/form.route")).default;
  app.use("/forms", authMiddleware, formRouter);

  const filaRouter = (await import("../routes/fila.route")).default;
  app.use("/filas", authMiddleware, filaRouter);

  const faseRouter = (await import("../routes/fase.route")).default;
  app.use("/fases", authMiddleware, faseRouter);

  const campoRouter = (await import("../routes/campo.route")).default;
  app.use("/campos", authMiddleware, campoRouter);

  const usuarioConectadoRouter = (
    await import("../routes/usuario.conectado.route")
  ).default;
  app.use("/usuarios-conectados", authMiddleware, usuarioConectadoRouter);

  const authRouter = (await import("../routes/auth.routes")).default;
  app.use("/auth", authRouter);

  const { cacheRouter } = await import("../cache/api");
  app.use("/cache", authMiddleware, cacheRouter);
};
