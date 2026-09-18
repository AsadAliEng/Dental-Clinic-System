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

Render was evaluated, but the available deployment flow required a paid plan/payment method. The working deployment therefore uses Vercel instead.

- GitHub: [https://github.com/AsadAliEng/Dental-Clinic-System/tree/develop](https://github.com/AsadAliEng/Dental-Clinic-System/tree/develop)
- Frontend deployment: [https://dental-clinic-system-3f11zd4e4-asad-6cc9.vercel.app/](https://dental-clinic-system-3f11zd4e4-asad-6cc9.vercel.app/)
- Frontend project URL: [https://dental-clinic-system-chi.vercel.app/](https://dental-clinic-system-chi.vercel.app/)
- Backend API: [https://dental-clinic-api-omega.vercel.app/](https://dental-clinic-api-omega.vercel.app/)
- API health: [https://dental-clinic-api-omega.vercel.app/api/health](https://dental-clinic-api-omega.vercel.app/api/health)
- Frontend is configured with `VITE_API_URL` pointing to the Vercel API.
- Neon PostgreSQL persistence remains the final deployment step; the API currently reports `database:false` and uses its documented in-memory fallback.

Never commit `.env` or credentials.


## Major Evidence Screenshots

![Application startup](screenshots/Startup_terminal.png)

![Dashboard](screenshots/dashbaord.png)

![Doctors list](screenshots/Docter_list.png)

![Add doctor form](screenshots/Add_Docter.png)

![Appointments list](screenshots/Appointment_list.png)

![API health with PostgreSQL](screenshots/API_Health.png)
