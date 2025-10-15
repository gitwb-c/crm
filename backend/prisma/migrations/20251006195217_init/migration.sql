-- CreateEnum
CREATE TYPE "TipoCampo" AS ENUM ('TXT', 'DATA', 'LS');

-- CreateTable
CREATE TABLE "Departamento" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "acesso" INTEGER,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioConectado" (
    "id" UUID NOT NULL,
    "idUsuario" UUID NOT NULL,
    "pos" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'offline',

    CONSTRAINT "UsuarioConectado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "idDepartamento" UUID NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fila" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "idDepartamento" UUID NOT NULL,
    "tempoFila" INTEGER NOT NULL DEFAULT 60,

    CONSTRAINT "Fila_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "chatAceito" BOOLEAN NOT NULL DEFAULT false,
    "chatFechado" BOOLEAN NOT NULL DEFAULT false,
    "idNegocio" INTEGER NOT NULL,
    "naoLida" BOOLEAN NOT NULL DEFAULT true,
    "threadChatbot" TEXT,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioConectadoChat" (
    "id" UUID NOT NULL,
    "idUsuarioConectado" UUID NOT NULL,
    "idChat" UUID NOT NULL,
    "visualizar" BOOLEAN DEFAULT true,

    CONSTRAINT "UsuarioConectadoChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fase" (
    "id" SERIAL NOT NULL,
    "cor" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "pos" INTEGER NOT NULL,
    "idDepartamento" UUID NOT NULL,
    "idPipeline" INTEGER NOT NULL,
    "perdaOuGanho" BOOLEAN NOT NULL,
    "idFila" UUID,

    CONSTRAINT "Fase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pipeline" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pipeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campo" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "tipo" "TipoCampo" NOT NULL,

    CONSTRAINT "Campo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampoConfig" (
    "id" UUID NOT NULL,
    "idCampo" UUID NOT NULL,
    "target" TEXT NOT NULL,

    CONSTRAINT "CampoConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListaSuspensa" (
    "id" UUID NOT NULL,
    "idCampo" UUID NOT NULL,
    "valor" TEXT NOT NULL,

    CONSTRAINT "ListaSuspensa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Form" (
    "id" UUID NOT NULL,
    "valor" TEXT NOT NULL,
    "idCampo" UUID NOT NULL,
    "idNegocio" INTEGER NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Negocio" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dateCreate" TEXT NOT NULL,
    "idFase" INTEGER NOT NULL DEFAULT 1,
    "idPipeline" INTEGER NOT NULL DEFAULT 1,
    "idUsuarioConectado" UUID,
    "nomeCliente" TEXT NOT NULL,
    "numeroCampanha" TEXT NOT NULL,
    "negocioAceito" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Negocio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" UUID NOT NULL,
    "mensagem" TEXT NOT NULL,
    "base64" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT NOT NULL,
    "caption" TEXT,
    "fileName" TEXT,
    "mimetype" TEXT,
    "fromMe" BOOLEAN NOT NULL,
    "interna" BOOLEAN DEFAULT false,
    "idChat" UUID NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FilaToUsuarioConectado" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_FilaToUsuarioConectado_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CampoToFase" (
    "A" UUID NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CampoToFase_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioConectado_idUsuario_key" ON "UsuarioConectado"("idUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Fila_nome_key" ON "Fila"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_idNegocio_key" ON "Chat"("idNegocio");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioConectadoChat_idUsuarioConectado_idChat_key" ON "UsuarioConectadoChat"("idUsuarioConectado", "idChat");

-- CreateIndex
CREATE UNIQUE INDEX "Pipeline_nome_key" ON "Pipeline"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Campo_nome_key" ON "Campo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "CampoConfig_idCampo_key" ON "CampoConfig"("idCampo");

-- CreateIndex
CREATE INDEX "_FilaToUsuarioConectado_B_index" ON "_FilaToUsuarioConectado"("B");

-- CreateIndex
CREATE INDEX "_CampoToFase_B_index" ON "_CampoToFase"("B");

-- AddForeignKey
ALTER TABLE "UsuarioConectado" ADD CONSTRAINT "UsuarioConectado_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fila" ADD CONSTRAINT "Fila_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES "Departamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_idNegocio_fkey" FOREIGN KEY ("idNegocio") REFERENCES "Negocio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioConectadoChat" ADD CONSTRAINT "UsuarioConectadoChat_idUsuarioConectado_fkey" FOREIGN KEY ("idUsuarioConectado") REFERENCES "UsuarioConectado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioConectadoChat" ADD CONSTRAINT "UsuarioConectadoChat_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fase" ADD CONSTRAINT "Fase_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fase" ADD CONSTRAINT "Fase_idPipeline_fkey" FOREIGN KEY ("idPipeline") REFERENCES "Pipeline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampoConfig" ADD CONSTRAINT "CampoConfig_idCampo_fkey" FOREIGN KEY ("idCampo") REFERENCES "Campo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaSuspensa" ADD CONSTRAINT "ListaSuspensa_idCampo_fkey" FOREIGN KEY ("idCampo") REFERENCES "Campo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_idCampo_fkey" FOREIGN KEY ("idCampo") REFERENCES "Campo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_idNegocio_fkey" FOREIGN KEY ("idNegocio") REFERENCES "Negocio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Negocio" ADD CONSTRAINT "Negocio_idFase_fkey" FOREIGN KEY ("idFase") REFERENCES "Fase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Negocio" ADD CONSTRAINT "Negocio_idPipeline_fkey" FOREIGN KEY ("idPipeline") REFERENCES "Pipeline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Negocio" ADD CONSTRAINT "Negocio_idUsuarioConectado_fkey" FOREIGN KEY ("idUsuarioConectado") REFERENCES "UsuarioConectado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilaToUsuarioConectado" ADD CONSTRAINT "_FilaToUsuarioConectado_A_fkey" FOREIGN KEY ("A") REFERENCES "Fila"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilaToUsuarioConectado" ADD CONSTRAINT "_FilaToUsuarioConectado_B_fkey" FOREIGN KEY ("B") REFERENCES "UsuarioConectado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampoToFase" ADD CONSTRAINT "_CampoToFase_A_fkey" FOREIGN KEY ("A") REFERENCES "Campo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampoToFase" ADD CONSTRAINT "_CampoToFase_B_fkey" FOREIGN KEY ("B") REFERENCES "Fase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
