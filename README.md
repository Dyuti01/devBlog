# ✍️ Blogging App

A full-stack blogging platform with a serverless backend deployed on Cloudflare Workers and a fast React frontend deployed on Vercel.

---

## ✨ Features

- Create, read, update, and delete blog posts
- JWT-based authentication — sign up and log in securely
- Serverless backend — scales automatically with zero cold-start overhead
- Connection pooling via Prisma Accelerate for efficient database management
- Fast frontend with Vite bundler, deployed on Vercel

---

## 🗄️ Database & Connection Pooling

PostgreSQL is used as the database with **Prisma ORM**. Since Cloudflare Workers are stateless and serverless, direct database connections would be exhausted quickly. **Prisma Accelerate** handles connection pooling, ensuring the database isn't overwhelmed under load.

---

## 🛠️ Tech Stack

### Frontend
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Backend
![Hono](https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Prisma Accelerate](https://img.shields.io/badge/Prisma_Accelerate-2D3748?style=for-the-badge&logo=prisma&logoColor=38BDF8)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL database (or a cloud-hosted one e.g. Neon, Supabase)
- Cloudflare account (for Workers deployment)
- Prisma Accelerate API key

### 1. Clone the repository
```bash
git clone https://github.com/Dyuti01/devBlog.git
cd devBlog
```

### 2. Set up environment variables

Create a `.env` file in the `/backend` directory:
```env
DATABASE_URL=prisma://accelerate.prisma-data.net/?api_key=your_prisma_accelerate_key
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the `/frontend` directory:
```env
VITE_BACKEND_URL=http://localhost:8787
```

### 3. Install dependencies & run backend locally
```bash
cd backend
npm install
npx wrangler dev
```

### 4. Install dependencies & run frontend
```bash
cd frontend
npm install
npm run dev
```

---

## ☁️ Deployment

### Backend — Cloudflare Workers
```bash
cd backend
npx wrangler deploy
```

### Frontend — Vercel
Connect your GitHub repo to [Vercel](https://vercel.com) and it auto-deploys on every push to `main`. Set `VITE_BACKEND_URL` to your deployed Cloudflare Workers URL in Vercel's environment variables.

---

## 🔐 Authentication

Authentication is handled using **JSON Web Tokens (JWT)**:
1. User signs up or logs in → server issues a signed JWT
2. JWT is stored on the client and sent with every subsequent request
3. Backend middleware validates the token on protected routes

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
