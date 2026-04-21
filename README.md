# Harshath Mukundan — Portfolio

Full-stack portfolio website built with **Next.js 14** (frontend) + **Node.js / Express** (backend).

---

## Project Structure

```
portfolio/
├── frontend/          # Next.js 14 (App Router, TypeScript)
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Home — fetches all data from API
│   │   ├── projects/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx  # Contact form → POST /api/contact
│   ├── components/
│   │   ├── ui/Navbar.tsx
│   │   └── sections/         # HeroSection, SkillsSection, ProjectsSection, etc.
│   └── lib/api.ts            # Axios API client + TypeScript types
│
└── backend/           # Node.js + Express REST API
    ├── server.js             # Entry point, middleware setup
    ├── routes/
    │   ├── portfolio.js      # GET /api/portfolio/*
    │   └── contact.js        # POST /api/contact (with rate limiting)
    ├── data/portfolioData.js # All portfolio content
    └── middleware/errorHandler.js
```

---

## Quick Start

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
# API running at http://localhost:5000
```

Test it:
```bash
curl http://localhost:5000/api/portfolio/projects
```

### 2. Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
# App running at http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint                        | Description            |
|--------|---------------------------------|------------------------|
| GET    | `/health`                       | Health check           |
| GET    | `/api/portfolio`                | Full portfolio data    |
| GET    | `/api/portfolio/profile`        | Profile info           |
| GET    | `/api/portfolio/projects`       | All projects           |
| GET    | `/api/portfolio/projects/:id`   | Single project         |
| GET    | `/api/portfolio/skills`         | Skills grouped         |
| GET    | `/api/portfolio/experience`     | Work experience        |
| GET    | `/api/portfolio/certifications` | Certifications         |
| GET    | `/api/portfolio/stats`          | Hero stats             |
| POST   | `/api/contact`                  | Send contact message   |

### Contact POST body
```json
{
  "name": "Recruiter Name",
  "email": "recruiter@affordmedical.com",
  "subject": "Full Stack Developer Role",
  "message": "We'd like to schedule an interview..."
}
```

---

## Tech Stack

| Layer     | Tech                                      |
|-----------|-------------------------------------------|
| Frontend  | Next.js 14, React 18, TypeScript          |
| Styling   | CSS Modules, Google Fonts (Syne, DM Mono) |
| Forms     | react-hook-form + Zod validation          |
| HTTP      | Axios                                     |
| Backend   | Node.js, Express.js                       |
| Security  | Helmet, CORS, express-rate-limit          |
| Validation| Zod                                       |
| Email     | Nodemailer (optional, configure in .env)  |

---

## Deployment

**Backend** → Railway / Render / AWS EC2  
**Frontend** → Vercel (`NEXT_PUBLIC_API_URL=https://your-backend-url.com`)

---

## To update content

All portfolio data lives in `backend/data/portfolioData.js`.  
Edit that file — no frontend changes needed. The Next.js pages are server components that fetch fresh data on each request.
