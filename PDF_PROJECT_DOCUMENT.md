# SmileCare Dental Clinic Management System

## Project Document

**Project:** Full-Stack Dental Clinic Management System  
**Frontend:** React, Vite, React Router  
**Backend:** Node.js, Express REST API  
**Database:** PostgreSQL  
**Local API:** `http://localhost:4000`  
**Local Frontend:** `http://localhost:5173`

---

## 1. Project Overview

SmileCare is a responsive clinic management system for managing doctors and patient appointments. Clinic staff can view, create, edit, search, filter, and delete records through a web interface. All CRUD actions are routed through the backend API and are PostgreSQL-compatible.

The application includes a dashboard with clinic summaries, a doctors management page, and an appointments management page.

---

## 2. Objectives

- Build a modern component-based React application.
- Implement client-side navigation with React Router.
- Build a reliable Express REST API.
- Persist doctors and appointments in a relational database.
- Validate data on both frontend and backend.
- Provide useful loading, empty, success, and error states.
- Create a deployment-ready project structure.

---

## 3. Application Pages

### Dashboard

- Total doctors count
- Upcoming appointments count
- TodayÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢s appointments count
- Pending appointments count
- Recent appointments list
- Loading and error feedback

### Doctors

- Search doctors by name, specialization, or email
- View doctor cards
- View detailed doctor information
- Add doctor
- Edit doctor
- Delete doctor with confirmation
- Active/inactive status display
- Availability display

### Appointments

- Search by patient or reason
- Filter by appointment status
- Add appointment
- Edit appointment
- Delete appointment with confirmation
- Doctor selector
- Date/time field
- Status field
- Loading and empty states

---

## 4. Architecture

```text
React/Vite Frontend
        |
        | HTTP JSON requests
        v
Express REST API
        |
        | PostgreSQL queries
        v
PostgreSQL Database
```

### Frontend

The frontend is located in `client/`. It contains React pages, reusable forms, modal dialogs, navigation, API calls, loading states, and responsive CSS.

### Backend

The backend is located in `server/`. It contains Express routes, validation, error handling, seed fallback data, PostgreSQL queries, and the health endpoint.

### Database

The database schema is in `server/schema.sql`. The `appointments.doctor_id` column references `doctors.id` with a foreign key.

---

## 5. Database Model

### Doctors

| Column | Type | Description |
|---|---|---|
| id | SERIAL | Primary key |
| name | VARCHAR | Doctor name |
| specialization | VARCHAR | Medical specialization |
| phone | VARCHAR | Contact phone |
| email | VARCHAR | Contact email |
| availability | TEXT | Working hours |
| active | BOOLEAN | Active/inactive status |

### Appointments

| Column | Type | Description |
|---|---|---|
| id | SERIAL | Primary key |
| patient_name | VARCHAR | Patient name |
| patient_contact | VARCHAR | Patient contact |
| doctor_id | INTEGER | Foreign key to doctors |
| date_time | TIMESTAMP | Appointment date and time |
| reason | TEXT | Appointment reason |
| status | VARCHAR | pending, confirmed, completed, cancelled |

---

## 6. API Routes

### Health

```text
GET /api/health
```

### Doctors

```text
GET    /api/doctors
POST   /api/doctors
PUT    /api/doctors/:id
DELETE /api/doctors/:id
```

### Appointments

```text
GET    /api/appointments
POST   /api/appointments
PUT    /api/appointments/:id
DELETE /api/appointments/:id
```

Successful responses use:

```json
{
  "success": true,
  "data": {}
}
```

Error responses use:

```json
{
  "success": false,
  "error": "Useful error message"
}
```

---

## 7. Validation and Business Rules

- Required doctor fields are validated on frontend and backend.
- Required appointment fields are validated on frontend and backend.
- Appointment status must be one of `pending`, `confirmed`, `completed`, or `cancelled`.
- Invalid date/time values are rejected.
- Invalid doctor references are rejected.
- A doctor cannot be deleted while related appointments exist in PostgreSQL.
- Overlapping appointments for the same doctor within one hour are rejected.
- Destructive deletes require confirmation.
- Lists refresh after every successful mutation.

---

## 8. Local Setup

```powershell
cd E:\PF\chatbot\Task1
npm install
```

Copy `.env.example` to `.env`:

```env
PORT=4000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/dental_clinic
VITE_API_URL=http://localhost:4000/api
```

Run the database schema:

```text
server/schema.sql
```

Start the application:

```powershell
npm run dev
```

Open:

```text
http://localhost:5173
```

If `DATABASE_URL` is not configured, the application uses local seed data in memory for UI demonstration.

---

## 9. Testing Notes

The following checks were completed:

- `npm install` completed successfully.
- `node --check server/index.js` passed.
- Vite production build passed.
- `/api/health` returned `status: ok`.
- Seed doctors endpoint returned data.
- Invalid overlapping appointment returned HTTP `409`.
- Frontend routes were included for dashboard, doctors, and appointments.
- CRUD forms include validation and confirmation behavior.

### Major Evidence Screenshot Placement

![Application startup](screenshots/Startup_terminal.png)

![Dashboard](screenshots/dashbaord.png)

![Doctors list](screenshots/Docter_list.png)

![Add doctor form](screenshots/Add_Docter.png)

![Appointments list](screenshots/Appointment_list.png)

![API health with PostgreSQL](screenshots/API_Health.png)

---

## 10. Deployment Notes

Render was evaluated for deployment, but the available Blueprint flow required a paid plan/payment method. For the working public demonstration, the project was deployed through Vercel.

### Public Links

- GitHub develop branch: [https://github.com/AsadAliEng/Dental-Clinic-System/tree/develop](https://github.com/AsadAliEng/Dental-Clinic-System/tree/develop)
- Vercel frontend deployment: [https://dental-clinic-system-3f11zd4e4-asad-6cc9.vercel.app/](https://dental-clinic-system-3f11zd4e4-asad-6cc9.vercel.app/)
- Vercel frontend project URL: [https://dental-clinic-system-chi.vercel.app/](https://dental-clinic-system-chi.vercel.app/)
- Vercel backend API: [https://dental-clinic-api-omega.vercel.app/](https://dental-clinic-api-omega.vercel.app/)
- API health endpoint: [https://dental-clinic-api-omega.vercel.app/api/health](https://dental-clinic-api-omega.vercel.app/api/health) 
The frontend uses `VITE_API_URL=https://dental-clinic-api-omega.vercel.app/api` and the API is deployed from the `server` directory. Neon/remote PostgreSQL was intentionally skipped because it required a paid setup. Local PostgreSQL was connected, schema-applied, and verified successfully; the public Vercel API uses its documented in-memory fallback.

---

## 11. Loom Walkthrough

The walkthrough should demonstrate:

- Dashboard metrics
- Navigation between all pages
- Doctor create, edit, view, search, and delete
- Appointment create, edit, filter, and delete
- Validation error
- Empty/loading/error states
- API health endpoint
- Live deployment

**Clickable Loom URL:** [Watch the Loom walkthrough](https://www.loom.com/share/e87f5c848fee4e3b83b1b9ab0831334a)

---

## 12. Known Limitations

- Authentication and role-based access are not included.
- Remote PostgreSQL was intentionally skipped for the public demo; local PostgreSQL was verified successfully, while the deployed API uses an in-memory fallback.
- Automated browser tests are not included.
- Appointment duration is represented by a one-hour conflict rule.
- Screenshots, public deployment links, Loom link, and Google Drive link must be added before final submission.

---

## 13. Final Submission Checklist

- [x] Public GitHub repository
- [x] Code pushed to `develop` branch
- [x] Frontend Vercel URL
- [x] Backend Vercel URL
- [x] Working `/api/health` endpoint
- [x] Screenshots added
- [x] Loom URL added as clickable link
- [x] PDF exported
- [ ] PDF uploaded to Google Drive
- [ ] Google Drive link made public

