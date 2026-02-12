/*
  Warnings:

  - You are about to drop the column `deleteAt` on the `piece` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "piece" DROP COLUMN "deleteAt",
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "practicedPiece" ADD COLUMN     "deletedAt" TIMESTAMP(3);
