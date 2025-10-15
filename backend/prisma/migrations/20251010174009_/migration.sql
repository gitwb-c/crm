-- DropForeignKey
ALTER TABLE "public"."Chat" DROP CONSTRAINT "Chat_idFila_fkey";

-- AlterTable
ALTER TABLE "Chat" ALTER COLUMN "idFila" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_idFila_fkey" FOREIGN KEY ("idFila") REFERENCES "Fila"("id") ON DELETE SET NULL ON UPDATE CASCADE;
