import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { db } from './databaseModule';
import Constants from "expo-constants";
const API_BASE_URL = Constants.expoConfig.extra.API_BASE_URL;


class Service {
    async syncDataToCloud() {

    const lastSyncTime = await AsyncStorage.getItem('lastSyncTime');
    const userId = await SecureStore.getItemAsync('userId');

    const newSessions = await db.getAllSync(`SELECT * FROM practiceSession WHERE updatedAt > ?`, [lastSyncTime]);
    const newPieces = await db.getAllSync(`SELECT * FROM piece WHERE updatedAt > ?`, [lastSyncTime]);
    const newPracticedPieces = await db.getAllSync(`SELECT * FROM practicedPiece WHERE updatedAt > ?`, [lastSyncTime]);

    // send the new data to the server and retrieve data after last synced
    try {
        const response = await fetch(`${API_BASE_URL}/sync`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                lastSyncTime: lastSyncTime,
                practiceSession: newSessions,
                piece: newPieces,
                practicedPiece: newPracticedPieces
            }),
        });

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            console.error("Server returned non-JSON response. Status:", response.status);
            console.error("Content-Type:", contentType);
            const text = await response.text();
            console.error("Response text:", text.substring(0, 200));
            return;
        }

        const data = await response.json();
        
        if(data.success === false) {
            console.log("Failed to sync data to cloud: ", data.message);
            return;
        }

        // update local database with data from server
        try {
            for (const ps of data.practiceSession) {
                const { id, userId, startDate, startTime, duration, notes, deletedAt, createdAt, updatedAt } = ps;
                db.upsertPracticeSession(id, userId, startDate, startTime, Number(duration), notes, deletedAt, createdAt, updatedAt);
            }
            for (const p of data.piece) {
                const { id, title, composer, deletedAt, createdAt, updatedAt } = p;
                db.upsertPiece(id, title, composer, deletedAt, createdAt, updatedAt);
            }
            for (const pp of data.practicedPiece) {
                const { id, pieceId, practiceSessionId } = pp;
                db.upsertPracticedPiece(id, pieceId, practiceSessionId);
            }
        } catch (error) {
            console.log("Error updating local database: ", error);
        }

        await AsyncStorage.setItem('lastSyncTime', new Date().toISOString());
    } catch (error) {
        console.error("Error in syncDataToCloud:", error);
    }
    }

    async login(un, pw) {
        const url = `${API_BASE_URL}/user/login`;
        
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName: un, password: pw }),
            });

            const data = await response.json();
            console.log("login data: ", data);
            if(data.token !== null) {
                await SecureStore.setItemAsync('refreshToken', data.token.token);
            }
            if(data.userId !== null) {
                await AsyncStorage.setItem('userId', data.userId);
            }
            return response.status;
        } catch (error) {
            console.log("service error: ", error);
            return -1
        }
    }

    async register(un, pw, nm, pn) {
        const url = `${API_BASE_URL}/user/register`;
        try {
            const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: un,
                password: pw,
                name: nm,
                phonenumber: pn,
            }),
            });
            
            const data = await response.json();
            if(data.token !== null) {
                await SecureStore.setItemAsync('refreshToken', data.token);
            }
            if(data.userId !== null) {
                await AsyncStorage.setItem('userId', data.userId);
            }

            return response.status;
        } catch (error) {
            console.log(error);
            return -1
        }
    }

    async addPiece(piece) {

        const { title, composer, instrument } = piece;
        
        try {
            const userId = await AsyncStorage.getItem('userId');
            
            if (!userId) {
                console.error("userId is null or undefined");
                throw new Error('userId not found in AsyncStorage. User may not be logged in.');
            }
            
            const insertQuery = `INSERT INTO piece (userId, title, composer, instrumentation, createdAt, updatedAt) VALUES ($userId, $title, $composer, $instrumentation, datetime('now'), datetime('now'))`;
            await db.ensureInitialized()
            await db.runWriteQuery(insertQuery, {
                $userId: userId,
                $title: title || "",
                $composer: composer || "",
                $instrumentation: instrument || ""
            });
            
            // await syncDataToCloud();
        } catch (error) {
            console.error("Error adding piece:", error);
            throw error;
        }
    }

    async getAllPieces() {
        try {
            await db.ensureInitialized();
            const pieces = await db.runGetQuery("SELECT * FROM piece");
            return pieces;
        } catch (error) {
            console.error("Error fetching pieces:", error);
            throw error;
        }
    }

    async getAllPracticeSessions() {
        try {
            await db.ensureInitialized();
            const sessions = await db.runGetQuery("SELECT * FROM practiceSession");
            return sessions;
        } catch (error) {
            console.error("Error fetching practice sessions:", error);
            throw error;
        }
    }

    async addSession(session){
        const { userId, startDate, startTime, duration, notes } = session;
        try {
            const insertQuery = `INSERT INTO practiceSession (userId, startDate, startTime, duration, notes, createdAt, updatedAt) VALUES ($userId, $startDate, $startTime, $duration, $notes, datetime('now'), datetime('now'))`;
            await db.ensureInitialized();
            await db.runWriteQuery(insertQuery, {
                $userId: userId,
                $startDate: startDate,
                $startTime: startTime,
                $duration: duration,
                $notes: notes || ""
            });
        } catch (error) {
            console.error("Error adding practice session:", error);
            throw error;
        }
    }
}

export default new Service();