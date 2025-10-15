/*
  Warnings:

  - Added the required column `idFila` to the `Negocio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Negocio" ADD COLUMN     "idFila" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Negocio" ADD CONSTRAINT "Negocio_idFila_fkey" FOREIGN KEY ("idFila") REFERENCES "Fila"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
