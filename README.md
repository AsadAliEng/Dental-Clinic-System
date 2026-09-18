# SmileCare Dental Clinic Management System

Full-stack dental clinic management system with React/Vite, Express REST API, and PostgreSQL schema.

## Run locally

1. Run `npm install` from this folder.
2. Copy `.env.example` to `.env` and configure `DATABASE_URL`.
3. Run `server/schema.sql` against PostgreSQL.
4. Run `npm run dev` and open `http://localhost:5173`.

Without `DATABASE_URL`, the API uses seed data in memory for local UI demonstration. PostgreSQL mode persists CRUD mutations.

## API

`GET /api/health`, `GET/POST /api/doctors`, `PUT/DELETE /api/doctors/:id`, `GET/POST /api/appointments`, `PUT/DELETE /api/appointments/:id`.

All responses use `{ success: true, data }` or `{ success: false, error }`.

## Deployment

Create a Render PostgreSQL database, configure `DATABASE_URL` and `PORT`, run `server/schema.sql`, deploy the API, then deploy the Vite frontend with `VITE_API_URL` pointing to the public API URL. Never commit `.env` or credentials.


## Major Evidence Screenshots

![Application startup](screenshots/Startup_terminal.png)

![Dashboard](screenshots/dashbaord.png)

![Doctors list](screenshots/Docter_list.png)

![Add doctor form](screenshots/Add_Docter.png)

![Appointments list](screenshots/Appointment_list.png)

![API health with PostgreSQL](screenshots/API_Health.png)
