-- CreateTable
CREATE TABLE "pieces" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "composer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "pieces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practicedPieces" (
    "id" TEXT NOT NULL,
    "practiceSessionId" TEXT NOT NULL,
    "pieceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "practicedPieces_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "practicedPieces" ADD CONSTRAINT "practicedPieces_practiceSessionId_fkey" FOREIGN KEY ("practiceSessionId") REFERENCES "practiceSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practicedPieces" ADD CONSTRAINT "practicedPieces_pieceId_fkey" FOREIGN KEY ("pieceId") REFERENCES "pieces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
