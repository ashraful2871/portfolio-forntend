
---

# 🚀 My Portfolio Website

A modern, responsive **personal portfolio website** built with **Next.js**, **Express.js**, and **Prisma**, featuring authentication, a blog management system, and a project showcase. This app allows the portfolio owner to securely manage content via a private dashboard, while providing visitors with a polished and dynamic experience.

---

## 🌐 Live Demo

👉 [**View Live Site**](#) *(Add your deployed URL here once available)*

---

## 📖 Table of Contents

* [Overview](#-project-overview)
* [Features](#-core-features)
* [Tech Stack](#-tech-stack)
* [Architecture](#-project-architecture)
* [Setup & Installation](#-setup--installation)
* [Environment Variables](#-environment-variables)
* [Running the Project](#-running-the-project)
* [Deployment](#-deployment)
* [Folder Structure](#-folder-structure)
* [Future Enhancements](#-future-enhancements)
* [License](#-license)

---

## 💡 Project Overview

This portfolio website is designed to showcase personal information, projects, and blogs in a dynamic, SEO-friendly manner. The backend supports secure authentication and CRUD operations for managing content, while the frontend delivers fast, optimized static pages with **Incremental Static Regeneration (ISR)** and **Static Site Generation (SSG)**.

The owner can log in to a **private dashboard** to manage blogs, projects, and other sections, while visitors can freely browse public pages like the **About Me**, **Projects**, and **Blog** sections.

---

## ✨ Core Features

### 🔓 Public Pages

* **Home / About Me** – Displays personal bio, contact info, skills, and experience (SSG for fast load).
* **Projects Showcase** – Public view of all projects with details, links, and live previews (ISR enabled).
* **Blogs** – Public blog listing and individual blog pages using ISR (`getStaticPaths` + `revalidate`).

### 🔒 Private Pages (Owner Only)

* **Authentication** – Secure login system using JWT and bcrypt for password hashing.
* **Dashboard** – A centralized panel for managing blogs, projects, and content dynamically.
* **Blog Management** – Full CRUD operations (Create, Read, Update, Delete) for blog posts.
* **Project Management** – Add, edit, or remove projects dynamically.

### 💻 Other Highlights

* Responsive, accessible UI using **Tailwind CSS**.
* Optimized for SEO and fast performance with **Next.js ISR/SSG**.
* Notification system with **react-hot-toast**.
* Secure backend with **Express.js**, **Prisma**, and **JWT Authentication**.
* Admin user seeded automatically for first-time login.

---

## 🧰 Tech Stack

| Layer              | Technology                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Frontend**       | [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)                             |
| **Styling**        | [Tailwind CSS](https://tailwindcss.com/)                                                                   |
| **Backend**        | [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)                                      |
| **Database**       | PostgreSQL (via [Prisma ORM](https://www.prisma.io/)) or MongoDB (via [Mongoose](https://mongoosejs.com/)) |
| **Authentication** | JWT + bcrypt                                                                                               |
| **Notifications**  | react-hot-toast                                                                                            |
| **Deployment**     | Vercel (Frontend) / Render or Railway (Backend)                                                            |

---

## 🏗️ Project Architecture

```
root/
├── backend/
│   ├── src/
│   │   ├── prisma/            # Prisma schema & migrations
│   │   ├── routes/            # Express routes for auth, blogs, projects
│   │   ├── controllers/       # Logic for handling requests
│   │   ├── middleware/        # JWT auth, error handling
│   │   ├── utils/             # Helper functions (bcrypt, JWT)
│   │   └── app.ts             # Express app entry point
│   ├── package.json
│   └── prisma/schema.prisma
│
├── frontend/
│   ├── pages/                 # Next.js pages (SSG + ISR)
│   ├── components/            # UI Components (Navbar, Footer, Cards)
│   ├── lib/                   # API utilities and hooks
│   ├── styles/                # Tailwind and custom CSS
│   ├── package.json
│   └── next.config.js
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
https://github.com/ashraful2871/portfolio-forntend.git
cd portfolio-website
```

### 2️⃣ Install Dependencies

For both frontend and backend:

```bash
cd backend && npm install
cd ../frontend && npm install
```

---

## 🔑 Environment Variables

Create `.env` files in both `backend/` and `frontend/` directories.

### **Backend (.env)**

```
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
JWT_SECRET="your_secret_key_here"
PORT=5000
```

### **Frontend (.env.local)**

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## ▶️ Running the Project

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
cd frontend
npm run dev
```

The app should now be running at:
**Frontend:** [http://localhost:3000](http://localhost:3000)
**Backend:** [http://localhost:5000](http://localhost:5000)

---

## 🚀 Deployment

* **Frontend:** Deploy to [Vercel](https://vercel.com/).
* **Backend:** Deploy to [Render](https://render.com/) or [Railway](https://railway.app/).
* **Database:** Use [Supabase](https://supabase.com/) or [Neon](https://neon.tech/) for PostgreSQL.

Make sure to update your frontend `.env.local` with the deployed backend API URL.

---

## 📁 Folder Structure Summary

```
frontend/
  ├── components/
  ├── pages/
  ├── styles/
  ├── utils/
  └── public/
backend/
  ├── controllers/
  ├── routes/
  ├── middleware/
  ├── prisma/
  └── app.ts
```

---

## 🚧 Future Enhancements

* 🧩 Add rich text editor (e.g., TipTap or React Quill) for blogs.
* 🌗 Add dark/light mode toggle.
* 🧠 Implement analytics for blog views and project clicks.
* 💬 Add a contact form with email notifications.

---

## 🧑‍💻 Author

**Your Name**
📧 [your.email@example.com](mailto:your.email@example.com)
🌐 [yourwebsite.com](https://yourwebsite.com)

---

## 📄 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute this project as you like.

---

Would you like me to tailor this README with **your actual name**, **deployment URLs**, and **database choice (Postgres or MongoDB)** before finalizing?
That way, I can give you a version you can copy-paste directly into GitHub.
