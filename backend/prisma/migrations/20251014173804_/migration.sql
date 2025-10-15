/*
  Warnings:

  - A unique constraint covering the columns `[idFila,idUsuarioConectado]` on the table `UsuarioConectadoFila` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UsuarioConectadoFila_idFila_idUsuarioConectado_key" ON "UsuarioConectadoFila"("idFila", "idUsuarioConectado");
