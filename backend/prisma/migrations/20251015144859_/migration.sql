-- CreateTable
CREATE TABLE "BusinessConfig" (
    "id" UUID NOT NULL,
    "target" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "categoria" TEXT,

    CONSTRAINT "BusinessConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessConfig_target_key" ON "BusinessConfig"("target");
