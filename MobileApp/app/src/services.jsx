import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import { db } from './databaseModule';
import Constants from "expo-constants";
const API_BASE_URL = Constants.expoConfig.extra.API_BASE_URL;


class Service {
    constructor() {
        this.isSyncing = false;
    }
    
    async syncDataToCloud() {
        // Prevent concurrent syncs
        if (this.isSyncing) {
            console.log("Sync already in progress, skipping...");
            return { success: false, reason: 'sync_in_progress' };
        }

        this.isSyncing = true;

        try {
            // Get last sync time (default to epoch if first sync)
            const lastSyncTime = await AsyncStorage.getItem('lastSyncTime') || '1970-01-01T00:00:00.000Z';
            const userId = await AsyncStorage.getItem('userId');

            if (!userId) {
                console.error("No userId found, cannot sync");
                return { success: false, reason: 'no_user' };
            }

            await db.ensureInitialized();

            // Fetch new/updated data from local database with userId filter
            const newSessions = await db.runGetQuery(
                `SELECT * FROM practiceSession WHERE userId = $userId AND (datetime(updatedAt) > datetime($lastSyncTime) OR datetime(createdAt) > datetime($lastSyncTime) OR (deletedAt IS NOT NULL AND datetime(deletedAt) > datetime($lastSyncTime)))`,
                { $userId: userId, $lastSyncTime: lastSyncTime }
            );
            const newPieces = await db.runGetQuery(
                `SELECT * FROM piece WHERE userId = $userId AND (datetime(updatedAt) > datetime($lastSyncTime) OR datetime(createdAt) > datetime($lastSyncTime) OR (deletedAt IS NOT NULL AND datetime(deletedAt) > datetime($lastSyncTime)))`,
                { $userId: userId, $lastSyncTime: lastSyncTime }
            );
            const newPracticedPieces = await db.runGetQuery(
                `SELECT * FROM practicedPiece WHERE userId = $userId AND (datetime(updatedAt) > datetime($lastSyncTime) OR datetime(createdAt) > datetime($lastSyncTime) OR (deletedAt IS NOT NULL AND datetime(deletedAt) > datetime($lastSyncTime)))`,
                { $userId: userId, $lastSyncTime: lastSyncTime }
            );

            console.log("DEBUG - syncing to cloud using data: ", {
                userId,
                lastSyncTime,
                newSessions,
                newPieces,
                newPracticedPieces
            });
            // Send the new data to the server and retrieve data after last synced
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

            // Validate response status
            if (response.status !== 200) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                console.error("Server returned non-JSON response. Status:", response.status);
                const text = await response.text();
                console.error("Response text:", text.substring(0, 200));
                return { success: false, reason: 'invalid_response' };
            }

            const data = await response.json();
            console.log("DEBUG - sync response json data: ", data);
            
            if (data.success === false) {
                console.log("Failed to sync data to cloud: ", data.message);
                return { success: false, reason: 'server_error', message: data.message };
            }

            // Update local database with data from server
            if (data.practiceSession && data.practiceSession.length > 0) {
                for (const ps of data.practiceSession) {
                    const { id, userId, startDateTime, duration, notes, deletedAt, createdAt, updatedAt } = ps;
                    await db.upsertPracticeSession(id, userId, startDateTime, Number(duration), notes, deletedAt, createdAt, updatedAt);
                }
            }
            if (data.piece && data.piece.length > 0) {
                for (const p of data.piece) {
                    const { id, userId, title, composer, instrumentation, deletedAt, createdAt, updatedAt } = p;
                    await db.upsertPiece(id, userId, title, composer, instrumentation, deletedAt, createdAt, updatedAt);
                }
            }
            if (data.practicePiece && data.practicePiece.length > 0) {
                for (const pp of data.practicePiece) {
                    const { id, userId, pieceId, practiceSessionId, deletedAt, createdAt, updatedAt } = pp;
                    await db.upsertPracticedPiece(id, pieceId, userId, practiceSessionId, deletedAt, createdAt, updatedAt);
                }
            }

            // Update last sync time only after successful sync
            await AsyncStorage.setItem('lastSyncTime', new Date().toISOString());
            
            console.log("Sync completed successfully");
            return { success: true };

        } catch (error) {
            console.error("Error in syncDataToCloud:", error);
            return { success: false, reason: 'error', error: error.message };
        } finally {
            // Always release the lock
            this.isSyncing = false;
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

            this.syncDataToCloud();

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
            console.log("DEBUG - register data: ", data);
            if(data.token !== null) {
                await SecureStore.setItemAsync('refreshToken', data.token.token);
            }
            if(data.userId !== null) {
                await AsyncStorage.setItem('userId', data.userId);
            }

            this.syncDataToCloud();

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
            
            await this.syncDataToCloud();
        } catch (error) {
            console.error("Error adding piece:", error);
            throw error;
        }
    }

    async getAllPieces() {
        try {
            await db.ensureInitialized();
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                console.error("No userId found");
                return [];
            }
            const pieces = await db.runGetQuery(
                "SELECT * FROM piece WHERE userId = $userId",
                { $userId: userId }
            );
            return pieces;
        } catch (error) {
            console.error("Error fetching pieces:", error);
            throw error;
        }
    }

    async getAllPracticeSessions() {
        try {
            await db.ensureInitialized();
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                console.error("No userId found");
                return [];
            }
            const sessions = await db.runGetQuery(
                "SELECT * FROM practiceSession WHERE userId = $userId",
                { $userId: userId }
            );
            return sessions;
        } catch (error) {
            console.error("Error fetching practice sessions:", error);
            throw error;
        }
    }

    async addSession(session){
        const { userId, piecesPracticed, startDateTime, duration, notes } = session;
        try {
            const SessionUUID = Crypto.randomUUID();
            const insertQuery = `INSERT INTO practiceSession (id, userId, startDateTime, duration, notes, createdAt, updatedAt) VALUES ($id, $userId, $startDateTime, $duration, $notes, datetime('now'), datetime('now'))`;
            await db.ensureInitialized();
            await db.runWriteQuery(insertQuery, {
                $id: SessionUUID,
                $userId: userId,
                $startDateTime: startDateTime,
                $duration: duration,
                $notes: notes || ""
            });
            if (piecesPracticed && piecesPracticed.length > 0) {
                for (const pieceId of piecesPracticed) {
                    const insertPieceQuery = `INSERT INTO practicedPiece (userId, pieceId, sessionId, createdAt, updatedAt) VALUES ($userId, $pieceId, $sessionId, datetime('now'), datetime('now'))`;
                    await db.runWriteQuery(insertPieceQuery, {
                        $userId: userId,
                        $pieceId: pieceId,
                        $sessionId: SessionUUID
                    });
                }
            }
            await this.syncDataToCloud();
        } catch (error) {
            console.error("Error adding practice session:", error);
            throw error;
        }
    }

    async getSessionDurationFromPast7Days() {
        try {
            await db.ensureInitialized();
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                console.error("No userId found");
                return [];
            }
            const result = await db.runGetQuery(`
                SELECT startDateTime, SUM(duration) as totalDuration 
                FROM practiceSession 
                WHERE userId = $userId AND datetime(startDateTime) >= datetime('now', '-6 days') 
                GROUP BY DATE(startDateTime)
            `, { $userId: userId });
            return result;
        } catch (error) {
            console.error("Error fetching session durations:", error);
            throw error;
        }
    }

    async getCountPiecesPracticedTotal(){
        try {
            await db.ensureInitialized();
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                console.error("No userId found");
                return 0;
            }
            const result = await db.runGetQuery(`
                SELECT COUNT(DISTINCT pieceId) as count 
                FROM practicedPiece
                WHERE userId = $userId
            `, { $userId: userId });
            return result[0]?.count || 0;
        } catch (error) {
            console.error("Error fetching count of pieces practiced:", error);
            throw error;
        }
    }

    async getPiecesPracticedWithCounts(){
        try {
            await db.ensureInitialized();
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                console.error("No userId found");
                return [];
            }
            const result = await db.runGetQuery(`
                SELECT 
                    p.id,
                    p.title,
                    COUNT(pp.id) as practiceCount
                FROM piece p
                LEFT JOIN practicedPiece pp ON p.id = pp.pieceId
                WHERE p.userId = $userId
                GROUP BY p.id, p.title
                HAVING COUNT(pp.id) > 0
                ORDER BY practiceCount DESC
            `, { $userId: userId });
            return result;
        } catch (error) {
            console.error("Error fetching pieces practiced with counts:", error);
            throw error;
        }
    }
}

export default new Service();