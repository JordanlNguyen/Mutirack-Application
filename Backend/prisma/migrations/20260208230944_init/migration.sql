-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(6) NOT NULL,
    "name" VARCHAR(20),
    "username" VARCHAR(30),
    "password" VARCHAR(200),
    "phonenumber" VARCHAR(10),
    "salt" VARCHAR(50),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" VARCHAR(6) NOT NULL,
    "userId" VARCHAR(6),
    "token" VARCHAR(200),
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);
