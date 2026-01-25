/**
 * ------------- data base manager methods -------------
 * - initialize databases for practice session and pieces
 * - create a db file if not exist in local storage
 * - method to add new practice session
 * - method to add new pieces
 * - private method to inject practiced_pieces
 * 
 * - method to delete practice session
 * - method to delete pieces
 */

import { openDatabaseSync, SQLiteDatabase } from 'expo-sqlite';

type Piece = {
    id : number;
    name : string;
    composer: string;
    instrumentation : string;
};

class DataBaseManager{
    db: SQLiteDatabase;
    userName: string;

    constructor(userName: string = "New User"){
        this.db = openDatabaseSync("practice1.db");
        this.userName = userName;
        this.init();
    }

    getUserName(){
        return this.userName;
    }

    init(){
        this.db.execSync(`
            CREATE TABLE IF NOT EXISTS practice_sessions(
                id TEXT PRIMARY KEY NOT NULL,
                duration INTEGER NOT NULL,
                startDate TEXT NOT NULL,
                startTime TEXT NOT NULL,
                notes TEXT
            )
        `);
        this.db.execSync(`
            CREATE TABLE IF NOT EXISTS pieces(
                id TEXT PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                composer TEXT NOT NULL,
                instrumentation TEXT NOT NULL
            )
        `);
        this.db.execSync(`
            CREATE TABLE IF NOT EXISTS practiced_pieces(
                id TEXT PRIMARY KEY NOT NULL,
                piece_id TEXT NOT NULL,
                session_id TEXT NOT NULL,
                FOREIGN KEY(piece_id) REFERENCES pieces(id),
                FOREIGN KEY(session_id) REFERENCES practice_sessions(id)
            )
        `);
    }

    getTotalPracticeToday(){
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
        const result:any = this.db.getFirstSync(`
            SELECT SUM(duration) as total FROM practice_sessions
            WHERE startDate = ?
            `, [today]);
        return result.total || 0;
    }

    getTotalPracticeThisWeek(){
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday
        const startOfWeekStr = startOfWeek.toISOString().split("T")[0];
        const todayStr = today.toISOString().split("T")[0];
        const result:any = this.db.getFirstSync(`
            SELECT SUM(duration) as total FROM practice_sessions
            WHERE startDate BETWEEN ? AND ?
            `, [startOfWeekStr, todayStr]);
        return result.total || 0;
    }

    getTotalPracticeThisMonth(){
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const startOfMonthStr = startOfMonth.toISOString().split("T")[0];
        const todayStr = today.toISOString().split("T")[0];
        const result:any = this.db.getFirstSync(`
            SELECT SUM(duration) as total FROM practice_sessions
            WHERE startDate BETWEEN ? AND ?
            `, [startOfMonthStr, todayStr]);
        return result.total || 0;
    }

    getUserPieces(): Piece[]{
        try{
            const result = this.db.getAllSync(`SELECT * FROM pieces`) as Piece[];
            return Array.isArray(result) ? result : [];
        } catch(error) {
            console.error('Failed to retrieve pieces', error);
            return [];
        }
    }

    addPiece(name: string, composer: string, instrumentation: string) {
        const pieceId = Date.now().toString();
        try {
            this.db.runSync(`INSERT INTO pieces (id, name, composer, instrumentation) VALUES (?, ?, ?, ?)`, 
                [pieceId, name, composer, instrumentation]);
        } catch (error) {
            console.error('Failed to add piece', error);
        }
    }

    injectPracticeSession(pieceIDs : number[], startDate : string, startTime : string, duration : number, notes : string){
        const sessionId = Date.now().toString();
        try {
            this.db.runSync(`INSERT INTO practice_sessions (id, duration, startDate, startTime, notes) VALUES (?, ?, ?, ?, ?)`, 
                [sessionId, duration, startDate, startTime, notes]);
            pieceIDs.forEach(pieceID => {
                const practicedId = Date.now().toString() + Math.random().toString();
                this.db.runSync(`INSERT INTO practiced_pieces (id, piece_id, session_id) VALUES (?, ?, ?)`, 
                    [practicedId, pieceID, sessionId]);
            });
        } catch (error) {
            console.error('Failed to inject practice session', error);
        }
    }
}

export const db = new DataBaseManager();