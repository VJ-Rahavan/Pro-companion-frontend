# Pro Companion — Frontend

React web app + React Native mobile app for DSA & System Design interview prep.
Managed with Turborepo. Backend and AI service live in separate repos.

## Stack

| App | Technology |
|-----|-----------|
| Web | React 18 + Vite + TailwindCSS + PWA |
| Mobile | React Native + Expo (Expo Router) |
| Shared | TypeScript types + Axios API client |
| Monorepo | Turborepo + npm workspaces |

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 20+ |
| npm | 10+ |
| Expo Go app | Latest (for mobile preview) |

## Local setup

### 1. Install dependencies

Run from the `frontend/` root — installs all workspaces at once.

```bash
npm install
```

### 2. Environment variables (web only)

```bash
cp web/.env.example web/.env
```

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `http://localhost:3001` | Backend API base URL |

## Running

### Web app

```bash
npm run dev:web
```

Opens on `http://localhost:5173`.

### Mobile app

```bash
npm run dev:mobile
```

Scan the QR code with **Expo Go** on your phone to preview.

### Both at once

```bash
npm run dev
```

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start web + mobile in parallel |
| `npm run dev:web` | Start web only |
| `npm run dev:mobile` | Start mobile only |
| `npm run build` | Build all packages |
| `npm run lint` | Type-check all packages |

## Project architecture

```
frontend/
├── package.json                # Turborepo root — workspaces: web, mobile, packages/*
├── turbo.json                  # pipeline config
├── web/                        # Vite + React web app
│   ├── vite.config.ts          # PWA plugin, /api proxy → localhost:3001
│   ├── tailwind.config.ts
│   └── src/
│       ├── main.tsx            # entry point
│       ├── App.tsx             # React Router + PrivateRoute guard
│       ├── store/
│       │   └── authStore.ts    # Zustand — persists JWT token in localStorage
│       ├── components/
│       │   └── Layout.tsx      # nav bar
│       └── pages/
│           ├── LoginPage.tsx
│           ├── ProblemsPage.tsx
│           ├── ProblemDetailPage.tsx
│           ├── ProgressPage.tsx
│           └── SystemDesignPage.tsx
├── mobile/                     # Expo React Native app
│   ├── app.json                # Expo config (scheme, icons, notifications)
│   └── app/
│       ├── _layout.tsx         # Expo Router tab navigator
│       ├── index.tsx           # Problems screen
│       ├── progress.tsx        # Progress screen
│       └── system-design.tsx   # System Design screen
└── packages/
    └── shared/                 # shared between web and mobile
        └── src/
            ├── types/
            │   └── index.ts    # Stage, Topic, Problem, UserProgress, Streak types
            └── api/
                ├── client.ts   # createApiClient() — Axios with JWT interceptor
                └── endpoints.ts # authApi, roadmapApi, progressApi, streaksApi, aiApi
```

## How web ↔ backend communication works

```
web (localhost:5173)
  └── axios → /api/*
        └── Vite proxy → http://localhost:3001/api/*
              └── Express backend
```

The proxy is configured in `web/vite.config.ts` so you never hardcode the backend URL in fetch calls — just use `/api/...`.

## Related repos

| Repo | What |
|------|------|
| `Pro-companion-service` | Express + PostgreSQL + TypeORM backend |
| `Pro-companion-ai` | FastAPI + Groq/Gemini AI service |
