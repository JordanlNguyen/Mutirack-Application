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

