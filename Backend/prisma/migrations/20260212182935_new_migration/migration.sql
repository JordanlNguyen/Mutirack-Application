/*
  Warnings:

  - You are about to drop the column `startDate` on the `practiceSession` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `practiceSession` table. All the data in the column will be lost.
  - Added the required column `startDateTime` to the `practiceSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "practiceSession" DROP COLUMN "startDate",
DROP COLUMN "startTime",
ADD COLUMN     "startDateTime" TIMESTAMP(3) NOT NULL;
