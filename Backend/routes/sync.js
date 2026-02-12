import express from 'express'
import { putLatestData, retrieveLatestData } from '../services/sync.js'
const syncRouter = express.Router();

// request body will include lastSyncTime of client device
syncRouter.post('/', async (req,res) => {

    const {userId, lastSyncTime, practiceSession, piece, practicedPiece} = req.body
    
    console.log("DEBUG - syncing data for user: ", userId)
    console.log("DEBUG - putting data ", {lastSyncTime, practiceSession, piece, practicedPiece})
    
    const data = await putLatestData(lastSyncTime, practiceSession, piece, practicedPiece)
    if (data.success === false) {
        return res.status(data.status).json(data)
    }

    console.log("DEBUG - successfully put latest data, now retrieving any updates from cloud since last sync time")
    
    const DBret = await retrieveLatestData(userId, lastSyncTime)

    console.log("DEBUG - retireved latest data", DBret)

    return res.status(DBret.status).json({
        success : DBret.success,
        code: DBret.code,
        message: DBret.message,
        practiceSession: DBret.practiceSession,
        piece: DBret.piece,
        practicePiece: DBret.practicePiece
    })
})

export default syncRouter