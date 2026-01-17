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

class DataBaseManager{
    db: SQLiteDatabase;
    userName: string;

    constructor(userName: string = "New User"){
        this.db = openDatabaseSync("practice.db");
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
                date TEXT NOT NULL,
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
}

export const db = new DataBaseManager();