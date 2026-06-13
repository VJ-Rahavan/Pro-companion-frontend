# Pro Companion — Frontend

React web app and React Native mobile app for DSA & System Design interview prep.

Managed with Turborepo. The backend and AI service live in separate repos.

## Structure

```
frontend/
├── web/          → React (Vite + Tailwind + PWA)    http://localhost:3000
├── mobile/       → React Native (Expo)
└── packages/
    └── shared/   → TypeScript types + Axios API client
```

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 20+ |
| npm | 10+ |

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set environment variables

```bash
cp frontend/web/.env.example frontend/web/.env
```

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend URL (default: `http://localhost:3001`) |

## Running

### Web

```bash
npm run dev:web
# or
cd frontend/web && npm run dev
```

Runs on `http://localhost:3000`.

### Mobile

```bash
npm run dev:mobile
# or
cd frontend/mobile && npm run dev
```

Scan the QR code with **Expo Go** to run on your device.

### Both (web + mobile)

```bash
npm run dev
```

## Turbo commands

```bash
npm run dev        # start all frontend apps
npm run build      # build all
npm run lint       # type-check all
```

## Related repos

- **Backend** — `pro-companion-backend` — Express + PostgreSQL REST API
- **AI Service** — `pro-companion-ai` — FastAPI + Groq/Gemini
# Pro-companion-frontend
