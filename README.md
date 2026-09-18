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

Render was evaluated, but the available deployment flow required a paid plan/payment method. The application was deployed through Vercel instead. The Vercel frontend and backend API are publicly accessible. Local PostgreSQL was connected, schema-applied, and verified successfully. Neon/remote PostgreSQL was intentionally skipped because it also required a paid plan; the local PostgreSQL setup and supporting screenshots were included as evidence.

- GitHub: [https://github.com/AsadAliEng/Dental-Clinic-System](https://github.com/AsadAliEng/Dental-Clinic-System)
- Frontend deployment: [https://dental-clinic-system-3f11zd4e4-asad-6cc9.vercel.app/](https://dental-clinic-system-3f11zd4e4-asad-6cc9.vercel.app/)
- Frontend project URL: [https://dental-clinic-system-chi.vercel.app/](https://dental-clinic-system-chi.vercel.app/)
- Frontend is configured with `VITE_API_URL` pointing to the Vercel API.
- Local PostgreSQL was connected, schema-applied, and verified successfully; supporting screenshots are included as evidence.

Never commit `.env` or credentials.


## Major Evidence Screenshots

![Application startup](screenshots/Startup_terminal.png)

![Dashboard](screenshots/dashbaord.png)

![Doctors list](screenshots/Docter_list.png)

![Add doctor form](screenshots/Add_Docter.png)

![Appointments list](screenshots/Appointment_list.png)

![API health with PostgreSQL](screenshots/API_Health.png)

## Organized Submission Files

- [AsadAli Task1 report PDF](docs/AsadAli_Task1_Report.pdf)
- [AsadAli Task1 submission details](docs/AsadAli_Task1_Submission_Details.md)
- [PDF report source](docs/PDF_PROJECT_DOCUMENT.md)
- [Project document](docs/PROJECT_DOCUMENT.md)
