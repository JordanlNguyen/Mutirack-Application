import dotenv from 'dotenv' //loads environment varaibles into Node.js runtime
import crypto from 'crypto'
import jwt from "jsonwebtoken"
import {v4} from 'uuid'
import pkg from '@prisma/client'

dotenv.config()
const { PrismaClient } = pkg
const prisma = new PrismaClient()


export async function getUser(userName, password) {
    
    let DBret
    try {
        DBret = await prisma.user.findUnique({
            where: {
                userName: userName
            }
        })
    } catch (error) {
        return ({
            status: 500,
            success: false,
            code: "DB_ERROR",
            message: "An error occurred while accessing the database"
        })
    }
    
    if(DBret === undefined || DBret === null) {
        return ({
            status: 400,
            success: false,
            code: "USER_NOT_FOUND",
            message: `Username '${userName}' not found`
        })
    }
    
    if(DBret.password !== crypto.scryptSync(password, DBret.salt, 64).toString('hex')) {
        return ({
            status: 400,
            success: false,
            code: "PASSWORD_INCORRECT",
            message: "Password is incorrect"
        })
    }

    return ({
        status: 200,
        success: true,
        code: "LOGIN_SUCCESS",
        user: DBret
    })
}

export async function createUser(name, phonenumber, userName, password) {

    const salt = crypto.randomBytes(16).toString('hex')

    try {
        // Check if username already exists
        const existingUsername = await prisma.user.findUnique({
            where: {
                userName: userName
            }
        })

        if (existingUsername) {
            console.log("User Services error: Username already exists")
            return {
                status: 409,
                success: false,
                code: "USERNAME_EXISTS",
                message: `Username '${userName}' is already taken`
            }
        }

        // Check if phone number already exists
        const existingPhone = await prisma.user.findUnique({
            where: {
                phoneNumber: phonenumber
            }
        })

        if (existingPhone) {
            console.log("User Services error: Phone number already exists")
            return {
                status: 409,
                success: false,
                code: "PHONE_EXISTS",
                message: `Phone number '${phonenumber}' is already registered`
            }
        }

        // Create user if both username and phone are unique
        const res = await prisma.user.create({
            data: {
                id: v4().toString(),
                name: name,
                userName: userName,
                password: crypto.scryptSync(password, salt, 64).toString('hex'),
                phoneNumber: phonenumber,
                salt: salt
            }
        })

        return({
            status: 200,
            success: true,
            id: res.id,
            userName: res.userName
        })
    } catch (error) {
        console.log("User Services error: ", error)
        return {
            status: 500,
            success: false,
            code: "CREATE_ERROR",
            message: "An error occurred while creating the user"
        }
    }
}

export async function existUser(userName) {

    const res = await prisma.user.findUnique({
        where: {
            userName: userName
        }
    })

    return res === null ? false : true
}

export function createToken(un, id){

    try {
        return ({
            status: 200,
            success: true,
            code: "TOKEN_CREATED",
            message: "Token created successfully",
            token: jwt.sign(
                {
                userName: un,
                identificationNumber: id
                },process.env.TKN_ACCESS_TOKEN_SECRET,
                {expiresIn: "2h"}
            )   
        })
    } catch(error) {
        return ({
            status: 500,
            success: false,
            code: "TOKEN_ERROR",
            message: "An error occurred while creating the token"
        })
    }
}