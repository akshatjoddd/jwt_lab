# JWT Authentication API

User authentication with **Node.js, Express, Prisma, PostgreSQL, bcrypt and JWT**.

## Setup

```bash
npm install
cp .env.example .env
npx prisma migrate dev --name init
npm run dev
```

## Environment variables

| Name | Purpose |
| --- | --- |
| `PORT` | Port the server runs on (default 3000) |
| `DATABASE_URL` | PostgreSQL connection string |
| `JWTSECRET` | Secret used to sign and verify JWTs |

## Endpoints

| Route | Method | Auth | Success | Errors |
| --- | --- | --- | --- | --- |
| `/signup` | POST | No | 201 | 400, 409 |
| `/login` | POST | No | 200 | 400, 401 |
| `/me` | GET | Bearer token | 200 | 401, 404 |
| `/dashboard` | GET | Bearer token | 200 | 401, 404 |

Send the token as: `Authorization: Bearer <token>`

## Folder structure

```text
prisma/            schema + migrations
src/
  server.js        app setup
  db.js            Prisma client
  routes/          authRoutes.js, userRoutes.js
  middleware/      requireAuth.js
  utils/           token.js
```
