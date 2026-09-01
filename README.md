# 🏦 Banking Backend

A secure and scalable RESTful backend API for a banking application.

This project provides backend functionality for user authentication, bank account management, financial transactions, ledger management, blacklist management, and email services.

---

## 📌 Features

- 🔐 User Registration & Login
- 🔑 JWT-based Authentication
- 🔒 Password Hashing using bcryptjs
- 👤 User Management
- 🏦 Bank Account Management
- 💰 Deposit and Withdrawal Operations
- 💸 Transaction Management
- 🔄 Fund Transfer
- 📒 Ledger Management
- 🚫 Blacklist Management
- 📧 Email Service
- 🛡️ Protected Routes using Authentication Middleware
- 🗄️ MongoDB Database Integration
- 🌐 RESTful API Architecture
- ⚙️ Environment Variable Configuration

---

# 🛠️ Tech Stack

## Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for building REST APIs
- **JavaScript** - Programming language used for backend development

## Database

- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## Authentication & Security

- **JWT (JSON Web Token)** - Token-based authentication
- **bcryptjs** - Password hashing
- **Authentication Middleware** - Protects private routes
- **Blacklist System** - Handles invalidated authentication tokens
- **dotenv** - Manages environment variables

## Email

- **Nodemailer** - Email sending service

## Development & Testing

- **npm** - Package management
- **Git** - Version control
- **GitHub** - Source code hosting
- **Postman / Thunder Client** - API testing

---

# 📂 Project Structure

```text
bankingbackend/
│
├── src/
│   │
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── account.controller.js
│   │   ├── auth.controller.js
│   │   └── transaction.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── account.model.js
│   │   ├── blackList.model.js
│   │   ├── ledger.model.js
│   │   ├── transaction.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── account.routes.js
│   │   ├── auth.routes.js
│   │   └── transaction.routes.js
│   │
│   ├── services/
│   │   └── email.service.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
