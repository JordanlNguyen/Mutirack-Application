/*
  Warnings:

  - You are about to drop the column `starteTime` on the `practiceSession` table. All the data in the column will be lost.
  - Added the required column `instrumentation` to the `piece` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `piece` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `practiceSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `practicedPiece` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "piece" ADD COLUMN     "instrumentation" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "practiceSession" DROP COLUMN "starteTime",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "practicedPiece" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "piece" ADD CONSTRAINT "piece_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practicedPiece" ADD CONSTRAINT "practicedPiece_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
