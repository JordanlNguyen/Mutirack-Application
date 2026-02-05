import express from 'express'
import {verifyUser, createUser, existUser} from '../services/users.js'
const userRouter = express.Router();

userRouter.post('/login', async (req,res) => {
    // req: id:int, password:string
    // table: users(username, password)
    const {userName, password} = req.body
    if(!userName || !password){ return res.status(409).send("Missing information")}
    const ret = await verifyUser(userName, password)
    if(ret === -2) {return res.status(500).send("Internal error")}
    if(ret === -1) {return res.status(400).send('Username not found')}
    if(ret === 0) {return res.status(400).end('Password Incorrect')}
    res.status(200).send("Success")
})

/* validates inputs is correct, checks is user exist, and puts new user into database*/
userRouter.post('/register', async (req, res) => {
    const {name, phonenumber, userName, password} = req.body
    const userExist = await existUser(userName)
    if(userExist)  {return res.status(409).send("User Name already exist")}
    if(!name || !phonenumber || !userName || !password) {return res.status(409).send("missing information")}
    if (name.length>20 || phonenumber.length>10 || isNaN(phonenumber) || userName>30 || password.length>50)  {return res.status(409).send("Input information not valid, check lengths and phone number")}

    const ret = await createUser(name, phonenumber, userName, password)
    if(ret === -1){res.status(500).send("internal error")}
    else if(ret === 1){res.status(200).send("Registration Successful")}
})

export default userRouter