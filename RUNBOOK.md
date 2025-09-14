# Nest Reference - Runbook

## Quick Start

1. Copy environment and edit if needed
   - `cp .env.example .env` (Windows PowerShell: `Copy-Item .env.example .env`)
   - Recommended for local:
     - `DB_SYNC=false` (use migrations)
     - `TYPEORM_LOGGING=false`

2. Start stack with Docker
   - `docker compose up -d --build`

3. Initialize database
   - Run migrations: `npm run migration:run`
   - Seed sample data: `npm run seed`

4. Develop / verify
   - Start dev: `npm run start:dev`
   - Build: `npm run build`
   - Lint: `npm run lint`
   - Test: `npm test`

## Endpoints

- Swagger: `GET /api/docs`
- Health: `GET /api/v1/health`
- Metrics (Prometheus): `GET /api/v1/metrics` (content-type `text/plain`)

### Auth
- Register: `POST /api/v1/auth/register`
- Login: `POST /api/v1/auth/login`
- Profile: `GET /api/v1/users/profile` (Authorization: Bearer <token>)

### Products
- Create (admin): `POST /api/v1/products`
- List (cached): `GET /api/v1/products`
- Get by ID (cached): `GET /api/v1/products/:id`
- Update (admin): `PATCH /api/v1/products/:id`
- Delete (admin): `DELETE /api/v1/products/:id`

## RBAC
- Admin-only routes require JWT with `roles` containing `admin`.
- In-memory admin user exists for testing: `admin@example.com` (password: `password`).

## Postman
- Import: `postman/nest-reference.postman_collection.json`
- Variables:
  - `baseUrl = http://localhost:3000`
  - `token = <access_token from Login>`
  - `productId = <created/listed id>`

## Migrations & Seeds
- Data source: `src/core/database/data-source.ts`
- Migrations: `src/migrations/*`
- Seed: `src/seeds/seed.ts`

## Docker
- Compose services: `postgres`, `redis`, `app`
- Dockerfile: multi-stage production build
- `.dockerignore` optimized

## Notes
- CI workflow in `.github/workflows/ci.yml` runs lint, build, and tests on GitHub.
