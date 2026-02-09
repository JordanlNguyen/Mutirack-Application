/*
  Warnings:

  - You are about to drop the `pieces` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `practicedPieces` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "practicedPieces" DROP CONSTRAINT "practicedPieces_pieceId_fkey";

-- DropForeignKey
ALTER TABLE "practicedPieces" DROP CONSTRAINT "practicedPieces_practiceSessionId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "salt" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- DropTable
DROP TABLE "pieces";

-- DropTable
DROP TABLE "practicedPieces";

-- CreateTable
CREATE TABLE "piece" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "composer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "piece_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practicedPiece" (
    "id" TEXT NOT NULL,
    "practiceSessionId" TEXT NOT NULL,
    "pieceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "practicedPiece_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- AddForeignKey
ALTER TABLE "practicedPiece" ADD CONSTRAINT "practicedPiece_practiceSessionId_fkey" FOREIGN KEY ("practiceSessionId") REFERENCES "practiceSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practicedPiece" ADD CONSTRAINT "practicedPiece_pieceId_fkey" FOREIGN KEY ("pieceId") REFERENCES "piece"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
