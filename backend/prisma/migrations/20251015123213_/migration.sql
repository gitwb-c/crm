/*
  Warnings:

  - Made the column `service` on table `Credential` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Credential" ALTER COLUMN "service" SET NOT NULL;
