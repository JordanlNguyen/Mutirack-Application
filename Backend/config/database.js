import dotenv from 'dotenv' //loads environment varaibles into Node.js runtime
dotenv.config()
import {Client} from 'pg'
import {Signer} from '@aws-sdk/rds-signer'

export async function runQuery(q, params){
    const client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: {
            rejectUnauthorized: false //add certificate to increase security
        }
    })
    const signer = new Signer(client)
    try{
        await client.connect()
        const res = await client.query(q, params)
        return res
    }catch(error){
        console.log("database error: ", error)
        return -1
    }
}
