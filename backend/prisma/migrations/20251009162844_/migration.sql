-- CreateTable
CREATE TABLE "Credential" (
    "id" UUID NOT NULL,
    "target" TEXT NOT NULL,
    "url" TEXT,
    "key" TEXT,
    "token" TEXT,
    "clientId" TEXT,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credential_target_key" ON "Credential"("target");
