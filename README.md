# 🚀 NestJS Quick Start Guide

## 📦 Create a New NestJS Project

To start a new project, run:

nest new <project-name>  # Replace <project-name> with your desired project name

## 🔄 Flow of Execution
main.ts 
  └── AppModule
        ├── AppController
        │     └── AppService

## 🧱 Generate a New Module, Controller, and Service
nest g module users        # Creates a new module named 'users'
nest g controller users    # Creates a controller inside 'users' module
nest g service users       # Creates a service inside 'users' module


## 🧩 Useful Decorators in NestJS
NestJS provides powerful decorators to extract different parts of the HTTP request:

## 📦 @Body()
Used to extract the data sent in the body of the request (usually in POST, PUT, or PATCH).

## 🧭 @Param()
Used to extract route parameters (usually in dynamic URLs like /users/:id).

## 🔍 @Query()
Used to extract query parameters from the URL (like /users?sort=name).


## 🌐 Integrate Prisma ORM with NeonDB
### 📦 Install Prisma CLI

npm install prisma --save-dev
npm install @prisma/client

### ⚙️ Initialize Prisma
npx prisma init  # Creates the prisma/schema.prisma file and .env

### 🧾 Define a Model in schema.prisma
model Employee {
  id   Int    @id @default(autoincrement())
  name String
}

### 🔄 Run Initial Migration
npx prisma migrate dev --name init  # Creates DB schema based on model

### 🔁 After Model Changes
npx prisma generate                 # Regenerates Prisma Client
npx prisma migrate dev --name <name>  # Apply new changes, creates new migration file


### 🛠️ Create a Resource in NestJS (With CRUD)
nest g resource employees
# This command scaffolds module, controller, and service with CRUD ready setup


### 📝 Notes
💡 NeonDB is a Postgres-compatible cloud database ideal for serverless usage.
✅ Make sure to update your .env file with your NeonDB connection string:

DATABASE_URL="postgresql://<user>:<password>@<host>/<db>?schema=public"
