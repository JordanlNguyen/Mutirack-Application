import express from 'express'
import { putLatestData } from '../services/sync.js'
const syncRouter = express.Router();

// request body will include lastSyncedTime of client device
syncRouter.post('/sync', async (req,res) => {

    const {lastSyncedTime, practiceSession, piece, practicedPiece} = req.body
    
    
    const data = await putLatestData(lastSyncedTime, practiceSession, piece, practicedPiece)
    if (data.success === false) {
        return res.status(data.status).json(data)
    }
    
    const DBret = await retrieveLatestData(lastSyncedTime)

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