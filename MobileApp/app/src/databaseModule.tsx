import * as SQLite from 'expo-sqlite';

class DataBaseManager{
    db: any
    dbName = "mutirack6.db";
    private initPromise: Promise<void>;

    constructor(){
        // Initialize the database and store the promise
        this.initPromise = this.init();
    }

    // Call this before using database operations
    async ensureInitialized(){
        await this.initPromise;
    }

    async runWriteQuery(sql: string, params: Record<string, any> = {}){
        try {
            console.log("DEBUG - Running write query:", sql);
            console.log("DEBUG - With params:", params);
            
            const statement = await this.db.prepareAsync(sql);
            const res = await statement.executeAsync(params);
            await statement.finalizeAsync();
            
            console.log("DEBUG - Query result:", res);
            return res;
        } catch (error) {
            console.error('Failed to run write query', error);
            throw error;
        }
    }

    async runGetQuery(sql: string, params: Record<string, any> = {}){
        try {
            await this.ensureInitialized();
            const statement = await this.db.prepareAsync(sql);
            const result = await statement.executeAsync(params);
            const res = await result.getAllAsync();
            await statement.finalizeAsync();
            return res;
        } catch (error) {
            console.error('Failed to run get query', error);
            throw error;
        }
    }

    async init(){
        console.log("Initializing database...");
        const createPracticeSession = `
            CREATE TABLE IF NOT EXISTS practiceSession(
                id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
                userId TEXT NOT NULL,
                duration INTEGER NOT NULL,
                notes TEXT,

                startDateTime TEXT NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                deletedAt DATETIME
            )
        `;
        const createPiece = `
            CREATE TABLE IF NOT EXISTS piece(
                id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
                userId TEXT NOT NULL,
                title TEXT NOT NULL,
                composer TEXT NOT NULL,
                instrumentation TEXT NOT NULL,

                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                deletedAt DATETIME
            )
        `;
        const createPracticedPiece = `
            CREATE TABLE IF NOT EXISTS practicedPiece(
                id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
                userId TEXT NOT NULL,
                pieceId TEXT NOT NULL,
                sessionId TEXT NOT NULL,

                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                deletedAt DATETIME,

                FOREIGN KEY(pieceId) REFERENCES piece(id),
                FOREIGN KEY(sessionId) REFERENCES practiceSession(id)
            )
        `;

        this.db = await SQLite.openDatabaseAsync(this.dbName);
        
        // Execute the CREATE TABLE statements
        try {
            await this.db.execAsync(createPracticeSession);
            await this.db.execAsync(createPiece);
            await this.db.execAsync(createPracticedPiece);
            console.log("Database tables created successfully");
        } catch (error) {
            console.error("Error creating tables:", error);
        }
    }

    // Helper function to parse ISO-8601 DateTime to separate date and time for SQLite
    private parseISODateTime(isoString: string | null): { date: string; time: string } {
        if (!isoString) {
            const now = new Date();
            return {
                date: now.toISOString().split('T')[0],
                time: now.toISOString().replace('T', ' ').replace('Z', '')
            };
        }
        
        try {
            // If it's ISO format (2026-02-12T18:45:00.000Z), convert to SQLite format
            if (isoString.includes('T')) {
                const [date, timeWithZ] = isoString.split('T');
                const time = timeWithZ.replace('Z', '');
                // Return full datetime in SQLite format: "YYYY-MM-DD HH:MM:SS.sss"
                return { date, time: `${date} ${time}` };
            }
            // If it's already SQLite format (2026-02-12 18:45:00), keep it
            if (isoString.includes(' ') && isoString.includes(':')) {
                const [date] = isoString.split(' ');
                return { date, time: isoString };
            }
            // If it's just a date, assume midnight
            if (isoString.includes('-') && !isoString.includes(':')) {
                return { date: isoString, time: `${isoString} 00:00:00.000` };
            }
            // Otherwise assume it's malformed, use current time
            const now = new Date();
            const sqliteFormat = now.toISOString().replace('T', ' ').replace('Z', '');
            return { date: sqliteFormat.split(' ')[0], time: sqliteFormat };
        } catch (e) {
            console.error("Error parsing ISO datetime:", isoString, e);
            const now = new Date();
            const sqliteFormat = now.toISOString().replace('T', ' ').replace('Z', '');
            return {
                date: sqliteFormat.split(' ')[0],
                time: sqliteFormat
            };
        }
    }

    async upsertPracticeSession(
        id: string,
        userId: string,
        startDateTime: string,
        duration: number,
        notes: string | null,
        deletedAt: string | null,
        createdAt: string,
        updatedAt: string
    ) {
        try {
            await this.ensureInitialized();
            
            // Parse all timestamps
            const parsedStartDateTime = this.parseISODateTime(startDateTime).time;
            const parsedCreatedAt = this.parseISODateTime(createdAt).time;
            const parsedUpdatedAt = this.parseISODateTime(updatedAt).time;
            const parsedDeletedAt = deletedAt ? this.parseISODateTime(deletedAt).time : null;
            
            const query = `
                INSERT INTO practiceSession (id, userId, startDateTime, duration, notes, deletedAt, createdAt, updatedAt)
                VALUES ($id, $userId, $startDateTime, $duration, $notes, $deletedAt, $createdAt, $updatedAt)
                ON CONFLICT(id) DO UPDATE SET
                    duration = $duration,
                    startDateTime = $startDateTime,
                    notes = $notes,
                    deletedAt = $deletedAt,
                    updatedAt = $updatedAt
            `;
            
            const statement = await this.db.prepareAsync(query);
            await statement.executeAsync({
                $id: id,
                $userId: userId,
                $startDateTime: parsedStartDateTime,
                $duration: duration,
                $notes: notes,
                $deletedAt: parsedDeletedAt,
                $createdAt: parsedCreatedAt,
                $updatedAt: parsedUpdatedAt
            });
            await statement.finalizeAsync();
        } catch (error) {
            console.error("Error upserting practice session:", error);
            throw error;
        }
    }

    async upsertPiece(
        id: string,
        userId: string,
        title: string,
        composer: string,
        instrumentation: string,
        deletedAt: string | null,
        createdAt: string,
        updatedAt: string
    ) {
        try {
            await this.ensureInitialized();
            
            const parsedCreatedAt = this.parseISODateTime(createdAt).time;
            const parsedUpdatedAt = this.parseISODateTime(updatedAt).time;
            const parsedDeletedAt = deletedAt ? this.parseISODateTime(deletedAt).time : null;
            
            const query = `
                INSERT INTO piece (id, title, composer, userId, instrumentation, deletedAt, createdAt, updatedAt)
                VALUES ($id, $title, $composer, $userId, $instrumentation, $deletedAt, $createdAt, $updatedAt)
                ON CONFLICT(id) DO UPDATE SET
                    title = $title,
                    composer = $composer,
                    userId = $userId,
                    instrumentation = $instrumentation,
                    deletedAt = $deletedAt,
                    updatedAt = $updatedAt
            `;
            
            const statement = await this.db.prepareAsync(query);
            await statement.executeAsync({
                $id: id,
                $title: title,
                $composer: composer,
                $userId: userId,
                $instrumentation: instrumentation,
                $deletedAt: parsedDeletedAt,
                $createdAt: parsedCreatedAt,
                $updatedAt: parsedUpdatedAt
            });
            await statement.finalizeAsync();
        } catch (error) {
            console.error("Error upserting piece:", error);
            throw error;
        }
    }

    async upsertPracticedPiece(
        id: string,
        pieceId: string,
        userId: string,
        practiceSessionId: string,
        deletedAt?: string | null,
        createdAt?: string,
        updatedAt?: string
    ) {
        try {
            await this.ensureInitialized();
            
            const now = new Date().toISOString();
            const parsedCreatedAt = this.parseISODateTime(createdAt || now).time;
            const parsedUpdatedAt = this.parseISODateTime(updatedAt || now).time;
            const parsedDeletedAt = deletedAt ? this.parseISODateTime(deletedAt).time : null;
            
            const query = `
                INSERT INTO practicedPiece (id, userId, pieceId, sessionId, deletedAt, createdAt, updatedAt)
                VALUES ($id, $userId, $pieceId, $sessionId, $deletedAt, $createdAt, $updatedAt)
                ON CONFLICT(id) DO UPDATE SET
                    pieceId = $pieceId,
                    sessionId = $sessionId,
                    userId = $userId,
                    deletedAt = $deletedAt,
                    updatedAt = $updatedAt
            `;
            
            const statement = await this.db.prepareAsync(query);
            await statement.executeAsync({
                $id: id,
                $userId: userId,
                $pieceId: pieceId,
                $sessionId: practiceSessionId,
                $deletedAt: parsedDeletedAt,
                $createdAt: parsedCreatedAt,
                $updatedAt: parsedUpdatedAt
            });
            await statement.finalizeAsync();
        } catch (error) {
            console.error("Error upserting practiced piece:", error);
            throw error;
        }
    }
}

export const db = new DataBaseManager();