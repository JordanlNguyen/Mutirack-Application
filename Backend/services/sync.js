import pkg from '@prisma/client'

const prisma = new pkg.PrismaClient()

export async function putLatestData(lastSyncTime, practiceSession, piece, practicedPiece) {

    try {

    for (const session of practiceSession) {
        const { id, userId, duration, startDateTime, notes, deletedAt, createdAt, updatedAt } = session;
        
        // Convert all timestamps to ISO-8601 DateTime
        const startDateTimeISO = convertToISO(startDateTime);
        const createdAtISO = convertToISO(createdAt);
        const updatedAtISO = convertToISO(updatedAt);
        const deletedAtISO = deletedAt ? convertToISO(deletedAt) : null;
        
        await prisma.practiceSession.upsert({
            where: { id },
            update: { 
                duration, 
                startDateTime: startDateTimeISO,
                notes, 
                deletedAt: deletedAtISO, 
                updatedAt: updatedAtISO 
            },
            create: { 
                id, 
                userId, 
                duration, 
                startDateTime: startDateTimeISO,
                notes, 
                deletedAt: deletedAtISO, 
                createdAt: createdAtISO 
            }
        });
    }
    for (const p of piece) {
        const { id, userId, title, composer, instrumentation, deletedAt, createdAt, updatedAt } = p;
        const createdAtISO = convertToISO(createdAt);
        const updatedAtISO = convertToISO(updatedAt);
        const deletedAtISO = deletedAt ? convertToISO(deletedAt) : null;
        
        await prisma.piece.upsert({
            where: { id },
            update: { title, composer, instrumentation, deletedAt: deletedAtISO, updatedAt: updatedAtISO },
            create: { id, userId, title, composer, instrumentation, deletedAt: deletedAtISO, createdAt: createdAtISO }
        });
    }
    for (const pp of practicedPiece) {
        // Frontend uses 'sessionId', backend uses 'practiceSessionId'
        const { id, userId, pieceId, sessionId, notes, deletedAt, createdAt, updatedAt } = pp;
        const createdAtISO = convertToISO(createdAt);
        const updatedAtISO = convertToISO(updatedAt);
        const deletedAtISO = deletedAt ? convertToISO(deletedAt) : null;
        
        await prisma.practicedPiece.upsert({
            where: { id },
            update: { pieceId, practiceSessionId: sessionId, notes, deletedAt: deletedAtISO, updatedAt: updatedAtISO },
            create: { id, userId, pieceId, practiceSessionId: sessionId, notes, deletedAt: deletedAtISO, createdAt: createdAtISO }
        });
    }

    return {
        success: true,
        status: 200,
        message: "Data synced to cloud successfully"
    }

    } catch (error) {
        console.error("Error in putLatestData:", error)
        return ({
            success : false,
            status : 500,
            message : "Failed to sync data to cloud",
            error : error.message
        })
    }
}

// Helper function to convert various date formats to ISO-8601
function convertToISO(dateStr) {
    if (!dateStr) return new Date().toISOString();
    
    try {
        // If it's already a valid ISO string, return it
        if (dateStr.includes('T')) {
            return new Date(dateStr).toISOString();
        }
        // If it's "YYYY-MM-DD HH:MM:SS" format, convert it
        const dateObj = new Date(dateStr.replace(' ', 'T'));
        return dateObj.toISOString();
    } catch (e) {
        console.error("Error converting date:", dateStr, e);
        return new Date().toISOString();
    }
}

export async function retrieveLatestData(userId, lastSyncedTime) {

    let lastSyncedPracticeSessionData = [];
    let lastSyncedPieceData = [];
    let lastSyncedPracticePieceData = [];

    try{
        lastSyncedPracticeSessionData = await prisma.$queryRaw`
            SELECT * FROM "practiceSession" WHERE 
            "userId" = ${userId} AND (
            "createdAt" > ${lastSyncedTime}::timestamp OR 
            "updatedAt" > ${lastSyncedTime}::timestamp OR 
            "deletedAt" > ${lastSyncedTime}::timestamp
            )
        `
        lastSyncedPieceData = await prisma.$queryRaw`
            SELECT * FROM "piece" WHERE 
            "userId" = ${userId} AND (
            "createdAt" > ${lastSyncedTime}::timestamp OR 
            "updatedAt" > ${lastSyncedTime}::timestamp
            )
        `
        lastSyncedPracticePieceData = await prisma.$queryRaw`
            SELECT * FROM "practicedPiece" WHERE 
            "userId" = ${userId} AND (
            "createdAt" > ${lastSyncedTime}::timestamp OR 
            "updatedAt" > ${lastSyncedTime}::timestamp OR 
            "deletedAt" > ${lastSyncedTime}::timestamp
            )
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