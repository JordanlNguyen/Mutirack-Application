import {runQuery} from '../config/database.js'
import crypto from 'crypto'

export async function verifyUser(userName, password) {
    const res = await runQuery("SELECT * FROM Users WHERE $1 = Users.userName", [userName])
    if(res === -1) {return -2 /*-2: internal error*/}
    if(res.rowCount == 0) {return -1 /*-1: not found*/}

    const hashedPassword = crypto.scryptSync(password, res.rows[0].salt, 64).toString('hex')
    if(res.rows[0].password !== hashedPassword) {return 0 /*0: no match*/}
    return 1
}

export async function createUser(name, phonenumber, userName, password) {
    console.log("creating user")
    const salt = crypto.randomBytes(16).toString('hex')
    const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex')
    var id = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
    if(await runQuery('SELECT * FROM users WHERE id = $1', [id]).rowCount!=1) {
        id = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
    }
    const ret = await runQuery('INSERT INTO users VALUES($1,$2,$3,$4,$5,$6)', [id,name, userName, hashedPassword, phonenumber, salt])
    if(ret === -1) {return -1}
    return 1
}

export async function existUser(userName) {
    const res = await runQuery('SELECT * FROM users WHERE userName = $1', [userName])
    if(res.rowCount === 0) {return false}
    return true
}