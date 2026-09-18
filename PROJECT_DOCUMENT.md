# Project Document

## Purpose
SmileCare lets clinic staff manage doctors and appointments through a responsive dashboard.

## Implemented
Dashboard metrics, doctors CRUD, appointments CRUD, routing, responsive UI, validation, API error handling, confirmation dialogs, PostgreSQL schema, seed data and health endpoint.

## Testing notes
Run `npm install`, then `npm run dev`. Verify `/dashboard`, `/doctors`, `/appointments`, CRUD operations and `/api/health`.

## Screenshots
The major evidence screenshots are included below and are ready for PDF conversion.

## Loom
[Watch the Loom walkthrough](https://www.loom.com/share/e87f5c848fee4e3b83b1b9ab0831334a)

## Live Deployment

Render required a paid plan/payment method, so the completed public deployment uses Vercel.

- [GitHub develop branch](https://github.com/AsadAliEng/Dental-Clinic-System)
- [Frontend deployment](https://dental-clinic-system-3f11zd4e4-asad-6cc9.vercel.app/)
- [Backend API](https://dental-clinic-api-omega.vercel.app/)
- [API health check](https://dental-clinic-api-omega.vercel.app/api/health)

## Known limitations
Remote database persistence was skipped for the public demo; local PostgreSQL integration was verified. Authentication, role permissions, automated tests and advanced calendar conflict detection remain future improvements.


## Major Evidence Screenshots

![Application startup](screenshots/Startup_terminal.png)

![Dashboard](screenshots/dashbaord.png)

![Doctors list](screenshots/Docter_list.png)

![Add doctor form](screenshots/Add_Docter.png)

![Appointments list](screenshots/Appointment_list.png)

![API health with PostgreSQL](screenshots/API_Health.png)

