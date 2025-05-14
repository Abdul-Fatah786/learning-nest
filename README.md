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
