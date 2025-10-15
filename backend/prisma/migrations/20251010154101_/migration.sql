/*
  Warnings:

  - You are about to drop the column `idFila` on the `Negocio` table. All the data in the column will be lost.
  - Added the required column `idFila` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Negocio" DROP CONSTRAINT "Negocio_idFila_fkey";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "idFila" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Negocio" DROP COLUMN "idFila";

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_idFila_fkey" FOREIGN KEY ("idFila") REFERENCES "Fila"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
