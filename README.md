Full CI/CD Automation & Deployment Monitoring Platform

A self-hosted, production-style CI/CD orchestration system that automates build and deployment workflows using native Git hooks, Node.js child processes, circuit breaker fault tolerance, Unix domain sockets for high-performance IPC, and a real-time monitoring dashboard.

This project simulates real-world DevOps tools like Jenkins and GitLab CI/CD while remaining lightweight, customizable, and fully self-managed.

📌 Table of Contents
Introduction
Problem Statement
Key Objectives
System Architecture
CI/CD Execution Flow
Tech Stack
Project Structure
Deployment Data Model
Fault Tolerance Strategy
Installation & Setup
Production Deployment
Unique Features
Team Details
License



📖 Introduction
The Smart DevOps Dashboard is an automated CI/CD platform designed to streamline software build, deployment, and monitoring processes.
The system:
Automatically triggers pipelines using Git hooks
Executes deployments in isolated Node.js child processes
Streams real-time logs via WebSockets
Stores detailed deployment history in MongoDB
Implements circuit breaker protection to prevent cascading failures
Uses Unix domain sockets for efficient inter-service communication
It delivers full lifecycle visibility from code push to production rollout.


❗ Problem Statement
Traditional manual deployment workflows suffer from:
Lack of real-time visibility
Poor handling of concurrent deployments
Cascading failures during repeated deployment errors
No centralized deployment history
High operational overhead
Inefficient inter-service communication
These issues slow release cycles, reduce reliability, and increase system instability.


🎯 Key Objectives
Automate CI/CD pipelines via native Git hooks
Provide sub-second real-time deployment updates
Ensure safe concurrent deployments
Implement circuit breaker–based failure protection
Maintain complete deployment traceability
Enable high-performance IPC via Unix sockets
Deliver a secure, self-hosted DevOps solution


🏗 System Architecture
Developer Push
      ↓
Git post-receive Hook
      ↓
Shell Deployment Script
      ↓
Node.js Orchestrator
(child_process.spawn)
      ↓
Circuit Breaker Layer
      ↓
Deployment Execution
      ↓
MongoDB Logging
      ↓
WebSocket / SSE
      ↓
Live Dashboard


🔁 CI/CD Execution Flow
Developer pushes code to repository
Git post-receive hook triggers deployment script
Node.js orchestrator spawns isolated child process
Deployment logs stream in real-time to dashboard
Circuit breaker monitors consecutive failures
On repeated failures → deployments halted automatically
Deployment metadata stored in MongoDB


🧰 Tech Stack
Frontend
React (or Express-rendered dashboard)
WebSockets / Server-Sent Events
Tailwind CSS (Custom Dark Theme)

Backend & Orchestration
Node.js
Express.js
Node.js child_process API
Git Hooks (post-receive)
Bash / Shell Scripts

Database
MongoDB (Deployment logs, metadata, indexing)


Reliability & IPC
Circuit Breaker Pattern
Unix Domain Sockets

Security
JWT Authentication
bcrypt Password Hashing
Protected Routes

📂 Project Structure
smart-devops-dashboard/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── App.jsx
│
├── backend/
│   ├── models/
│   │   └── Deployment.js
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   │   ├── circuitBreaker.js
│   │   ├── deploymentManager.js
│   │   └── socketService.js
│   ├── scripts/
│   │   └── deploy.sh
│   ├── hooks/
│   │   └── post-receive
│   └── server.js
│
└── README.md
🗃 Deployment Data Model (MongoDB)


Example deployment document:

{
  "deploymentId": "DEP-2026-0021",
  "branch": "main",
  "status": "SUCCESS",
  "duration": "42s",
  "triggeredBy": "git-hook",
  "logs": ["Build started...", "Tests passed...", "Deployment successful"],
  "failureCount": 0,
  "timestamp": "2026-02-20T10:15:00Z"
}


Indexed fields:
deploymentId
branch
timestamp
status
This enables fast querying and historical traceability.

🛡 Fault Tolerance Strategy
The system implements a Circuit Breaker Pattern:
Tracks consecutive deployment failures
Trips after configurable failure threshold
Blocks further deployments temporarily
Automatically resets after cooldown period
Prevents cascading system crashes
This improves reliability during unstable release cycles.

🔐 Security Features
Password hashing using bcrypt
JWT-based authentication (1-day expiry)
Protected dashboard routes
Secure Unix socket communication
Environment variable configuration

⚙ Installation & Setup
Prerequisites
Node.js (v16+)
MongoDB (running locally)
Git (for hooks)
Linux/macOS (recommended for Unix sockets)

Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/smart-devops-dashboard
JWT_SECRET=your_secret_key
CIRCUIT_BREAKER_THRESHOLD=3

Start server:

npm run dev
Frontend Setup
cd frontend
npm install
npm run dev
Git Hook Setup

Copy post-receive hook into repository:

cp hooks/post-receive .git/hooks/
chmod +x .git/hooks/post-receive

Now every push automatically triggers deployment.


🚀 Production Deployment
Build frontend:
npm run build
Serve static files via Express or Nginx
Use production MongoDB instance

Configure HTTPS
Secure Unix socket permissions
Enable process monitoring (PM2 recommended)


🌟 Unique Features
Native Git-triggered CI/CD pipelines
Concurrent isolated deployment execution
Real-time log streaming
Circuit breaker–based failure protection
Unix domain socket IPC
Complete deployment traceability
CLI-based admin tools
Fully self-hosted solution

👥 Team Details – Batch 04

Submitted To:
Abhishek sir

Team Members:

Deepika Agrawal (2315000699)
Dev Singh (2315000699)
Devansh Gupta (2315000714)
Devansh Mishra (2315000720)
Devanshi Mehrotra (2315000720)

📌 Conclusion
The Smart DevOps Dashboard replaces manual deployment workflows with automated, Git-triggered CI/CD pipelines.
By integrating Node.js child processes, Unix socket IPC, real-time monitoring, and circuit breaker fault tolerance, the system delivers a reliable, scalable, and production-style DevOps solution.
It demonstrates practical implementation of modern DevOps principles, automation strategies, and distributed system reliability techniques.

📄 License
MIT License (Educational Implementation)
