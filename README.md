# 🚀 Real-Time Collaborative Code Editor

A production-ready **Real-Time Collaborative Code Editor** built using **React.js, Express.js, Socket.IO, Yjs, Docker, and AWS ECS Fargate**.

This application enables multiple users to collaborate on the same code editor in real time. The project demonstrates modern full-stack web development, Docker containerization, and cloud deployment using Amazon Web Services (AWS).

---

# 🌐 Live Demo

### 🔗 Live Application

**http://docker-aws-yt-ALB-1300292554.ap-south-1.elb.amazonaws.com**

> ✅ Hosted on **Amazon ECS Fargate**
>
> ✅ Exposed using **Application Load Balancer (ALB)**

---

# 📌 Project Overview

This project was built to understand how real-time collaborative applications work and how to deploy a containerized application on AWS Cloud.

Users can join the application with a username and edit code simultaneously. Every code change is synchronized instantly across all connected users using **Socket.IO** and **Yjs**.

The complete application is containerized using **Docker**, stored in **Amazon ECR**, and deployed on **Amazon ECS Fargate** behind an **Application Load Balancer**.

---

# ✨ Features

- 🚀 Real-Time Collaborative Code Editing
- 👥 Multi-user Collaboration
- ⚡ Instant Synchronization using Socket.IO
- 📝 Monaco Editor (VS Code Editor)
- 🔄 Yjs CRDT Synchronization
- 🐳 Docker Containerization
- ☁️ AWS Cloud Deployment
- 🌐 Application Load Balancer
- ❤️ Health Check Endpoint
- 📦 Production Ready Deployment

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Monaco Editor
- Socket.IO Client

## Backend

- Node.js
- Express.js
- Socket.IO
- Yjs

## Cloud & DevOps

- Docker
- Amazon Elastic Container Registry (ECR)
- Amazon Elastic Container Service (ECS Fargate)
- Application Load Balancer (ALB)
- Target Group
- IAM
- VPC
- CloudWatch

---

# 🏗 System Architecture

```text
                    User

                      │

              Web Browser

                      │

                      ▼

     Application Load Balancer (ALB)

                      │

                      ▼

       Amazon ECS Service (Fargate)

                      │

                      ▼

          Docker Container

        ┌─────────────┴─────────────┐

        ▼                           ▼

 React Frontend             Express Backend

                                    │

                                    ▼

                              Socket.IO Server

                                    │

                                    ▼

                                   Yjs

                                    │

                     Real-Time Synchronization
```

---

# 🚀 Deployment Workflow

```text
VS Code

↓

React Application

↓

npm run build

↓

Frontend/dist

↓

Backend/public

↓

Docker Build

↓

Docker Image

↓

Amazon ECR

↓

Amazon ECS (Fargate)

↓

Target Group

↓

Application Load Balancer

↓

Live Application
```

---

# 📂 Project Structure

```text
docker-aws
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── Backend
│   ├── public
│   ├── server.js
│   └── package.json
│
├── Dockerfile
├── .dockerignore
└── README.md
```

---

# ⚙️ Local Setup

### Clone Repository

```bash
git clone https://github.com/Rayyan87000/docker-aws-project.git
```

Move into project

```bash
cd docker-aws-project
```

Install Frontend Dependencies

```bash
cd Frontend
npm install
```

Build Frontend

```bash
npm run build
```

Copy the generated **dist** folder into

```
Backend/public
```

Install Backend Dependencies

```bash
cd ../Backend
npm install
```

Run Backend

```bash
node server.js
```

Open

```
http://localhost:3000
```

---

# 🐳 Docker

Build Docker Image

```bash
docker build -t docker-aws/server .
```

Run Docker Container

```bash
docker run -p 3000:3000 docker-aws/server
```

---

# ☁ AWS Deployment

The application is deployed using the following AWS services:

- Amazon Elastic Container Registry (ECR)
- Amazon ECS Fargate
- Application Load Balancer (ALB)
- Target Group
- IAM Roles
- VPC
- Public Subnets
- Security Groups
- CloudWatch Logs

Deployment Process

```
Local Development

↓

Docker Image

↓

Amazon ECR

↓

Amazon ECS Fargate

↓

Application Load Balancer

↓

Public URL

↓

Users
```

---

# 💡 Skills Demonstrated

- Full Stack Web Development
- Real-Time Web Applications
- WebSocket Communication
- Docker Containerization
- Multi-Stage Docker Build
- AWS ECS Fargate Deployment
- Amazon ECR
- Application Load Balancer
- VPC Networking
- Health Check Configuration
- Git & GitHub
- Cloud Deployment
- DevOps Fundamentals

---

# 📈 Future Improvements

- User Authentication (JWT/OAuth)
- Multiple Collaboration Rooms
- Code Execution
- Integrated Chat System
- Persistent Database
- File Explorer
- HTTPS using ACM
- Custom Domain using Route 53
- CI/CD Pipeline using GitHub Actions

---

# 📸 Screenshots

You can add screenshots here:

- Home Page
- Multiple Users Editing Simultaneously
- AWS ECS Deployment Dashboard

---

# 👨‍💻 Author

**Rayyan Kaif Ansari**

B.Tech Computer Science Engineering

Java Backend Developer | Cloud Computing Enthusiast

GitHub:
https://github.com/Rayyan87000

LinkedIn:
(Add your LinkedIn profile here)

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

It motivates me to build more cloud and full-stack projects.
