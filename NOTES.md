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

# data syncing
the main goal of data syncing in this application is to pursue data consistency throughout multiple device local databases and cloud storage database, reduce delays in data syncing, manage simultaneous updates, and use minimal bandwidth

## common sync methods
- full synchronization: transfers entire data sets, ideal for inital setup or smaller datasets '''could be used for inital registration or login on a new device'''
- indremental synchronization: only transfers changes made since last sync
- bidirectional synchronization: allows data to flow both ways '''ideal for offline functionality and managing conflicts effectily'''

# Mobile Application Requirments
- Home
    - user is able to see total practice times throughout the day, month, and current year through the cycling title
    - user is able to see line graph of the current week showing durations for each day
    - user is able to view pie chart of most practiced pieces
    - user is able to view calander days of practiced sessions
- Practice
    - user is able to start/pause timer
    - user is able to reset timer
    - user is able to select pieces they plan to practice
    - user is able to submit session to go to overview
    - user is able to manually add a session
- Analytics
    - remove (this will be on the home screen)
- Session
    - user is able to view all sessions in a list
    - user is able to tap and view session where they are able to edit or delete session
- profile
    - user is able to configure profile information
    - user is able to view pieces that are within user database
    - user is able to add or delete pieces