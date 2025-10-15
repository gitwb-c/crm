/*
  Warnings:

  - You are about to drop the column `pos` on the `UsuarioConectado` table. All the data in the column will be lost.
  - You are about to drop the `_FilaToUsuarioConectado` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_FilaToUsuarioConectado" DROP CONSTRAINT "_FilaToUsuarioConectado_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_FilaToUsuarioConectado" DROP CONSTRAINT "_FilaToUsuarioConectado_B_fkey";

-- AlterTable
ALTER TABLE "UsuarioConectado" DROP COLUMN "pos";

-- DropTable
DROP TABLE "public"."_FilaToUsuarioConectado";

-- CreateTable
CREATE TABLE "UsuarioConectadoFila" (
    "id" UUID NOT NULL,
    "idFila" UUID NOT NULL,
    "idUsuarioConectado" UUID NOT NULL,
    "pos" INTEGER NOT NULL,

    CONSTRAINT "UsuarioConectadoFila_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsuarioConectadoFila" ADD CONSTRAINT "UsuarioConectadoFila_idFila_fkey" FOREIGN KEY ("idFila") REFERENCES "Fila"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioConectadoFila" ADD CONSTRAINT "UsuarioConectadoFila_idUsuarioConectado_fkey" FOREIGN KEY ("idUsuarioConectado") REFERENCES "UsuarioConectado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
