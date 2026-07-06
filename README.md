# 🚀 Real-Time Collaborative Code Editor

A production-ready **Real-Time Collaborative Code Editor** built with **React, Express.js, Socket.IO, Yjs, Docker, and AWS ECS Fargate**.

This application allows multiple users to edit code simultaneously with real-time synchronization. The project demonstrates modern full-stack development, containerization using Docker, and cloud deployment on AWS.

---

## 📖 About the Project

This project was developed to understand how real-time collaborative applications work and how to deploy a containerized application on AWS.

Users can join the editor using a username and instantly collaborate with other connected users. Every code change is synchronized in real time using WebSockets.

The complete application is packaged using Docker and deployed on **Amazon ECS Fargate** behind an **Application Load Balancer (ALB)**.

---

## ✨ Features

- 🚀 Real-time collaborative code editing
- 👥 Multi-user synchronization
- 💻 Monaco Editor (VS Code Editor)
- ⚡ Socket.IO based communication
- 🔄 Yjs document synchronization
- 🐳 Dockerized application
- ☁️ AWS ECS Fargate deployment
- 🌐 Application Load Balancer
- ❤️ Health check endpoint for monitoring

---

# 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Monaco Editor
- Socket.IO Client

### Backend

- Node.js
- Express.js
- Socket.IO
- Yjs

### Cloud & DevOps

- Docker
- Amazon ECR
- Amazon ECS (Fargate)
- Application Load Balancer
- IAM
- VPC
- Target Group
- CloudWatch

---

# 🏗 Architecture

```
                 User Browser
                      │
                      ▼
      Application Load Balancer (ALB)
                      │
                      ▼
         Amazon ECS Service (Fargate)
                      │
              Docker Container
          ┌───────────┴───────────┐
          ▼                       ▼
     React Frontend        Express + Socket.IO
                                  │
                                  ▼
                                Yjs
                                  │
                    Real-Time Collaboration
```

---

# 📂 Project Structure

```
docker-aws
│
├── Frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── Backend
│   ├── public
│   ├── server.js
│   └── package.json
│
├── Dockerfile
└── README.md
```

---

# ⚙️ Local Setup

### Clone the Repository

```bash
git clone https://github.com/Rayyan87000/docker-aws-project.git
```

### Install Frontend Dependencies

```bash
cd Frontend
npm install
```

### Build Frontend

```bash
npm run build
```

Copy the generated **dist** folder into:

```
Backend/public
```

### Install Backend Dependencies

```bash
cd ../Backend
npm install
```

### Run the Application

```bash
node server.js
```

Open:

```
http://localhost:3000
```

---

# 🐳 Docker

### Build Docker Image

```bash
docker build -t docker-aws/server .
```

### Run Docker Container

```bash
docker run -p 3000:3000 docker-aws/server
```

---

# ☁️ AWS Deployment

The application is deployed using:

- Amazon Elastic Container Registry (ECR)
- Amazon ECS Fargate
- Application Load Balancer
- Target Group
- IAM Roles
- VPC Networking

Deployment Workflow

```
Source Code
      │
      ▼
Docker Build
      │
      ▼
Docker Image
      │
      ▼
Amazon ECR
      │
      ▼
Amazon ECS (Fargate)
      │
      ▼
Application Load Balancer
      │
      ▼
Live Application
```

---

# 📈 Skills Demonstrated

- Full Stack Web Development
- Real-Time Communication
- WebSocket Programming
- Docker Containerization
- Multi-Stage Docker Build
- AWS ECS Fargate Deployment
- Amazon ECR
- Load Balancing
- Cloud Networking
- Health Monitoring
- Git & GitHub

---

# 🚀 Future Enhancements

- Authentication & Authorization
- Multiple Collaboration Rooms
- Persistent Database
- Code Execution
- Integrated Chat
- CI/CD Pipeline using GitHub Actions

---

# 👨‍💻 Author

**Rayyan Kaif Ansari**

**B.Tech Computer Science Engineering**

Java Backend Developer | Cloud Computing Enthusiast

GitHub: **https://github.com/Rayyan87000**

---

### ⭐ If you found this project interesting, consider giving it a Star.
