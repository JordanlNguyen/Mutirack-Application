import pkg from '@prisma/client'

const prisma = new pkg.PrismaClient()

export async function putLatestData(lastSyncTime, practiceSession, piece, practicedPiece) {

    try {

    // put data into cloud
    for (const session of practiceSession) {
        const { id, duration, startDate, startTime, notes, deletedAt, createdAt, updatedAt } = session;
        await prisma.practiceSession.upsert({
            where: { id },
            update: { duration, startDate, startTime, notes, deletedAt, updatedAt },
            create: { id, duration, startDate, startTime, notes, deletedAt, createdAt }
        });
    }
    for (const p of piece) {
        const { id, title, composer, instrumentation, deletedAt, createdAt, updatedAt } = p;
        await prisma.piece.upsert({
            where: { id },
            update: { title, composer, instrumentation, deletedAt, updatedAt },
            create: { id, title, composer, instrumentation, deletedAt, createdAt }
        });
    }
    for (const pp of practicedPiece) {
        const { id, pieceId, practiceSessionId, notes, deletedAt, createdAt, updatedAt } = pp;
        await prisma.practicePiece.upsert({
            where: { id },
            update: { pieceId, practiceSessionId, notes, deletedAt, updatedAt },
            create: { id, pieceId, practiceSessionId, notes, deletedAt, createdAt }
        });
    }

    } catch (error) {
        return ({
            success : false,
            status : 500,
            message : "Failed to sync data to cloud",
            error : error
        })
    }
}

export async function retrieveLatestData(lastSyncedTime) {

    try{
        const lastSyncedPracticeSessionData = await prisma.$queryRaw`
        SELECT * FROM "PracticeSession" WHERE 
        "createdAt" > ${lastSyncedTime} OR 
        "updatedAt" > ${lastSyncedTime} OR 
        "deletedAt" > ${lastSyncedTime}
        `
        const lastSyncedPieceData = await prisma.$queryRaw`
            SELECT * FROM "Piece" WHERE 
            "createdAt" > ${lastSyncedTime} OR 
            "updatedAt" > ${lastSyncedTime} OR 
            "deleteAt" > ${lastSyncedTime}
        `
        const lastSyncedPracticePieceData = await prisma.$queryRaw`
            SELECT * FROM "PracticePiece" WHERE 
            "createdAt" > ${lastSyncedTime} OR 
            "updatedAt" > ${lastSyncedTime} OR 
            "deletedAt" > ${lastSyncedTime}
        `
    } catch (error) {
        return ({
            success : false,
            status : 500,
            message : "Failed to retrieve data from cloud",
            error : error
        })
    }
    
    return {
        success : true,
        status : 200,
        message : "Successfully synced data from cloud",
        practiceSession: lastSyncedPracticeSessionData,
        piece: lastSyncedPieceData,
        practicePiece: lastSyncedPracticePieceData
    }
}