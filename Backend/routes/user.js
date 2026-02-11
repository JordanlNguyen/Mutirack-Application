import express from 'express'
import {getUser, createUser, existUser, createToken} from '../services/user.js'
const userRouter = express.Router();

// login user
userRouter.post('/login', async (req,res) => {

    const {userName, password} = req.body

    //determine missing information
    if(!userName || !password){ return res.status(409).send("Missing information")}

    let token = null
    const DBret = await getUser(userName, password)
    if(DBret.success) {
        token = createToken(DBret.userName, DBret.userId)
    }

    console.log("DBret: ", DBret.userId)

    return res.status(DBret.status).json({
        success : DBret.success,
        userId: DBret.userId,
        code: DBret.code,
        message: DBret.message,
        token: token
    })
})

// register user
userRouter.post('/register', async (req, res) => {

    const {name, phonenumber, userName, password} = req.body
    
    if(!name || !phonenumber || !userName || !password) {
        return res.status(409).send("missing information")
    }
    if (name.length>20 || phonenumber.length>10 || phonenumber.length<9 ||isNaN(phonenumber) || userName.length>30 || password.length>50) {
        return res.status(409).send("Input information not valid, check lengths and phone number")
    }
    
    let token = null
    const DBret = await createUser(name, phonenumber, userName, password)
    if(DBret.success){
        token = createToken(DBret.userName, DBret.id)
    }

    return res.status(DBret.status).json({
        success: DBret.success,
        code: DBret.code,
        userId: DBret.id,
        message: DBret.message,
        token: token
    })
})

export default userRouter