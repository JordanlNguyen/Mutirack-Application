# Database connection
This project uses AWWS RDS to host postgres data base. We will use __pg__ library to access databse
## Node-postgres: Client vs. Pool
- Client: static instance of a database connection used for short lived taskes such as transacrtions
- Pool: group of CLient objects where the pool manages and handles high traffic. Benefits applications with higher trafick users

# .env
this file is a sesitive file that contains password information, keys, etc. It is ignored by github.

# security
## passwords
- registering password: raw password->hash + salt->store in DB
- login: raw password->hash + salt-> store DB

hashed passwords and raw salts of that user are stored in DB (salts are unique but not secret)

# node-postgres
- returns hash rows and rowCount

# JWT
Javascript Web Tockens are signed urls that determine who the user is and if the user can access the information

# Prisma
Prisma is a forum that allows for changing, migrating, and tracking versions of databases. This could be a good use for this project, as current developement requires changes to the data base. 
'''prisma generate''': if changes are made to a DB, then this command runs prisma to make changes to DB

- models are added to the schema.prisma file
- '''npx prisma migrate dev --name init''' create migration to update production database
- '''npx prisma generate''' generate prisma client mirroring the data base