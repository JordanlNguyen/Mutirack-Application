import * as SQLite from 'expo-sqlite';

class DataBaseManager{
    db: any
    dbName = "mutirack1.db";
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

                startDate DATE NOT NULL,
                startTime DATETIME NOT NULL,
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
}

// type DailyPractice = {
//     day : string;
//     duration : number;
// }
// type Piece = {
//     id : string;
//     title : string;
//     composer: string;
//     instrumentation : string;
// }
// type Session = {
//     id : string,
//     duration : number,
//     startDate : string,
//     startTime : string,
//     notes : string
// };

// class DataBaseManager{
//     db: any;
//     userName: string;
//     dbName = "mutirack.db";

//     constructor(userName: string = "New User"){
//         const opener = (SQLite as any).openDatabaseSync || (SQLite as any).openDatabase || (SQLite as any).openDatabaseSync;
//         this.db = opener.call(SQLite, this.dbName);
//         this.userName = userName;
//         this.init();
//     }

//     async getAllSync(sql: string, params: any[] = []){
//         return new Promise<any[]>((resolve, reject) => {
//             try {
//                 if (typeof this.db.transaction === 'function') {
//                     this.db.transaction((tx: any) => {
//                         tx.executeSql(sql, params, (_: any, result: any) => {
//                             const rows: any[] = [];
//                             for (let i = 0; i < result.rows.length; i++) {
//                                 rows.push(result.rows.item(i));
//                             }
//                             resolve(rows);
//                         }, (_: any, error: any) => { reject(error); return false; });
//                     }, (txError: any) => { reject(txError); });
//                 } else if (typeof (this.db as any).exec === 'function') {
//                     // best-effort fallback: exec may not return rows; resolve empty array
//                     try {
//                         (this.db as any).exec(sql);
//                         resolve([]);
//                     } catch (e) { reject(e); }
//                 } else if (typeof (this.db as any).execSync === 'function') {
//                     try {
//                         (this.db as any).execSync(sql);
//                         resolve([]);
//                     } catch (e) { reject(e); }
//                 } else {
//                     // no supported async API available
//                     reject(new Error('No supported DB execution method (transaction/exec/execSync) available'));
//                 }
//             } catch (err) { reject(err); }
//         });
//     }

//     async getFirstSync(sql: string, params: any[] = []){
//         const rows = await this.getAllSync(sql, params);
//         return Array.isArray(rows) && rows.length ? rows[0] : {};
//     }

//     async runSync(sql: string, params: any[] = []){
//         return new Promise((resolve, reject) => {
//             try {
//                 if (typeof this.db.transaction === 'function') {
//                     this.db.transaction((tx: any) => {
//                         tx.executeSql(sql, params, (_: any, result: any) => {
//                             // Return rows if available, otherwise return empty array
//                             const rows = result?.rows?._array || [];
//                             resolve(rows);
//                         }, (_: any, error: any) => { reject(error); return false; });
//                     }, (txError: any) => { reject(txError); });
//                 } else if (typeof (this.db as any).exec === 'function') {
//                     try {
//                         const r = (this.db as any).exec(sql, params);
//                         resolve(Array.isArray(r) ? r : []);
//                     } catch (e) { reject(e); }
//                 } else if (typeof (this.db as any).execSync === 'function') {
//                     try {
//                         // execSync doesn't support parameter binding, so we need to build the SQL string manually
//                         let finalSql = sql;
//                         params.forEach((param) => {
//                             const escaped = param === null ? 'NULL' : typeof param === 'string' ? `'${param.replace(/'/g, "''")}'` : param;
//                             finalSql = finalSql.replace('?', escaped);
//                         });
//                         const r = (this.db as any).execSync(finalSql);
//                         resolve(Array.isArray(r) ? r : []);
//                     } catch (e) { reject(e); }
//                 } else {
//                     reject(new Error('No supported DB execution method (transaction/exec/execSync) available'));
//                 }
//             } catch (err) { reject(err); }
//         });
//     }

//     init(){
//         const createPracticeSession = `
//             CREATE TABLE IF NOT EXISTS practiceSession(
//                 id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
//                 userId TEXT NOT NULL,
//                 duration INTEGER NOT NULL,
//                 notes TEXT,

//                 startDate DATE NOT NULL,
//                 startTime DATETIME NOT NULL,
//                 createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//                 updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//                 deletedAt DATETIME
//             )
//         `;
//         const createPiece = `
//             CREATE TABLE IF NOT EXISTS piece(
//                 id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
//                 userId TEXT NOT NULL,
//                 title TEXT NOT NULL,
//                 composer TEXT NOT NULL,
//                 instrumentation TEXT NOT NULL,

//                 createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//                 updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//                 deletedAt DATETIME
//             )
//         `;
//         const createPracticedPiece = `
//             CREATE TABLE IF NOT EXISTS practicedPiece(
//                 id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
//                 userId TEXT NOT NULL,
//                 pieceId TEXT NOT NULL,
//                 sessionId TEXT NOT NULL,

//                 createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//                 updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
//                 deletedAt DATETIME,

//                 FOREIGN KEY(pieceId) REFERENCES piece(id),
//                 FOREIGN KEY(sessionId) REFERENCES practiceSession(id)
//             )
//         `;

//         if (typeof this.db.transaction === 'function') {
//             this.db.transaction((tx: any) => {
//                 tx.executeSql(createPracticeSession);
//                 tx.executeSql(createPiece);
//                 tx.executeSql(createPracticedPiece);
//             }, (err: any) => {
//                 console.error('DB init transaction failed', err);
//             });
//         } else if (typeof (this.db as any).execSync === 'function') {
//             try {
//                 (this.db as any).execSync(createPracticeSession);
//                 (this.db as any).execSync(createPiece);
//                 (this.db as any).execSync(createPracticedPiece);
//             } catch (e) {
//                 console.error('DB init execSync failed', e);
//             }
//         } else if (typeof (this.db as any).exec === 'function') {
//             try {
//                 (this.db as any).exec(createPracticeSession);
//                 (this.db as any).exec(createPiece);
//                 (this.db as any).exec(createPracticedPiece);
//             } catch (e) {
//                 console.error('DB init exec failed', e);
//             }
//         } else {
//             console.warn('No DB init method available (transaction/execSync/exec)');
//         }
//     }

//     async runQuery(sql: string){
//         const db = await SQLite.openDatabaseAsync(this.dbName);
//         const res = db.execAsync(sql);
//     }
//     getUserName(){
//         return this.userName;
//     }

//     async getTotalPracticeToday(){
//         const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
//         const result:any = await this.getFirstSync(`
//             SELECT SUM(duration) as total FROM practiceSession
//             WHERE startDate = ? AND deletedAt IS NULL
//             `, [today]);
//         return result.total || 0;
//     }

//     async getTotalPracticeThisWeek(){
//         const today = new Date();
//         const startOfWeek = new Date(today);
//         startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday
//         const startOfWeekStr = startOfWeek.toISOString().split("T")[0];
//         const todayStr = today.toISOString().split("T")[0];
//         const result:any = await this.getFirstSync(`
//             SELECT SUM(duration) as total FROM practiceSession
//             WHERE startDate BETWEEN ? AND ? AND deletedAt IS NULL
//             `, [startOfWeekStr, todayStr]);
//         return result.total || 0;
//     }

//     async getTotalPracticeThisMonth(){
//         const today = new Date();
//         const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
//         const startOfMonthStr = startOfMonth.toISOString().split("T")[0];
//         const todayStr = today.toISOString().split("T")[0];
//         const result:any = await this.getFirstSync(`
//             SELECT SUM(duration) as total FROM practiceSession
//             WHERE startDate BETWEEN ? AND ? AND deletedAt IS NULL
//             `, [startOfMonthStr, todayStr]);
//         return result.total || 0;
//     }

//     async getUserPieces(): Promise<Piece[]>{
//         try{
//             const result = await this.getAllSync(`SELECT * FROM piece WHERE deletedAt IS NULL`) as Piece[];
//             return Array.isArray(result) ? result : [];
//         } catch(error) {
//             console.error('Failed to retrieve pieces', error);
//             return [];
//         }
//     }

//     async addPiece(name: string, composer: string, instrumentation: string) {
//         const pieceId = Date.now().toString();
//         try {
//             await this.runSync(`INSERT INTO piece (id, title, composer, instrumentation, createdAt, updatedAt) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`, 
//                 [pieceId, name, composer, instrumentation]);
//         } catch (error) {
//             console.error('Failed to add piece', error);
//         }
//     }

//     async injectPracticeSession(pieceIDs : string[], startDate : string, startTime : string, duration : number, notes : string){
//         const sessionId = Date.now().toString();
//         try {
//             await this.runSync(`INSERT INTO practiceSession (id, duration, startDate, startTime, notes, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`, 
//                 [sessionId, duration, startDate, startTime, notes]);
//             for (const pieceID of pieceIDs) {
//                 const practicedId = Date.now().toString() + Math.random().toString();
//                 await this.runSync(`INSERT INTO practicedPiece (id, pieceId, sessionId, createdAt, updatedAt) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`, 
//                     [practicedId, pieceID, sessionId]);
//             }
//             console.log('practice session submitted')
//         } catch (error) {
//             console.error('Failed to inject practice session', error);
//         }
//     }

//     async getAllSession() : Promise<Session[]>{
//         try {
//             const res = await this.getAllSync(`SELECT * FROM practiceSession WHERE deletedAt IS NULL ORDER BY startDate DESC`) as Session[];
//             return Array.isArray(res) ? res : [];
//         } catch (error) {
//             console.error('Failed to fetch rows', error);
//             return [];
//         }
//     }

//     async getSingleSession(sessionID : string){
//         try {
//             const res = await this.getAllSync(`SELECT * FROM practiceSession WHERE practiceSession.id = (?) AND deletedAt IS NULL`, [sessionID]);
//             return res;
//         } catch (error) {
//             console.error('Failed to fetch row', error);
//             return;
//         }
//     }

//     async getDurationsOnEachDay() : Promise<DailyPractice[]>{
//         try{
//             const res = await this.getAllSync(`SELECT startDate, ROUND(SUM(duration) / 60) as totalDuration from practiceSession WHERE deletedAt IS NULL GROUP BY startDate ORDER BY startDate`) as DailyPractice[];
//             return res
//         } catch (error) {
//             console.error('Failed to fetch row', error);
//             return [];
//         }
//     }

//     async upsertPracticeSession(sessionID : string, pieceIDs : string[], startDate : string, startTime : string, duration : number, notes : string, deletedAt : string | null, createdAt : string, updatedAt : string){
//         try {
//             await this.runSync(`INSERT INTO practiceSession (id, duration, startDate, startTime, notes, deletedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET duration = ?, startDate = ?, startTime = ?, notes = ?, deletedAt = ?, createdAt = ?, updatedAt = ?`, 
//                 [sessionID, duration, startDate, startTime, notes, deletedAt, createdAt, updatedAt, duration, startDate, startTime, notes, deletedAt, createdAt, updatedAt]);
//         } catch (error) {
//             console.error('Failed to upsert practice session', error);
//         }
//     }

//     async upsertPiece(pieceID : string, title: string, composer: string, instrumentation: string, deletedAt : string | null, createdAt : string, updatedAt : string){
//         try {
//             await this.runSync(`INSERT INTO piece (id, title, composer, instrumentation, deletedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET title = ?, composer = ?, instrumentation = ?, deletedAt = ?, createdAt = ?, updatedAt = ?`, 
//                 [pieceID, title, composer, instrumentation, deletedAt, createdAt, updatedAt, title, composer, instrumentation, deletedAt, createdAt, updatedAt]);
//         } catch(error) {
//             console.error('Failed to upsert piece', error);
//         }
//     }

//     async upsertPracticedPiece(practicedPieceID : string, pieceID : string, sessionID : string, deletedAt : string | null, createdAt : string, updatedAt : string){
//         try {
//             await this.runSync(`INSERT INTO practicedPiece (id, pieceId, sessionId, deletedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET pieceId = ?, sessionId = ?, deletedAt = ?, createdAt = ?, updatedAt = ?`, 
//                 [practicedPieceID, pieceID, sessionID, deletedAt, createdAt, updatedAt, pieceID, sessionID, deletedAt, createdAt, updatedAt]);
//         } catch(error) {
//             console.error('Failed to upsert practiced piece', error);
//         }
//     }

// }

export const db = new DataBaseManager();