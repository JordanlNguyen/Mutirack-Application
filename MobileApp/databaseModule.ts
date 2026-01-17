import * as SQLite from 'expo-sqlite';
import { v4 as uuidv4 } from "uuid";

export class DataBaseManager{
    private db: SQLite.WebSQLDatabase;

    constructor(){
        this.db = SQLite.openDatabase("practice.db");
        this.init();
    }

    private init(){
        const newId = uuidv4();
        this.db.transcation(tx => {
            tx.executeSql(
                `
                CREATE TABLE IF NOT EXIST practice_sessions(
                    id TEXT PRIMARY KEY NOT NULL,
                    duration INTEGER NOT NULL,
                    startDate TEXT NOT NULL,
                    notes TEXT
                );

                CREATE TABLE IF NOT EXIST practiced_pieces(
                    
                );
                `
            );
        });
    }
}