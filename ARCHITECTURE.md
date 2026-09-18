# Architecture Summary

`client/` contains React/Vite pages, routing, reusable forms and API calls. `server/` contains Express routes, validation, consistent JSON responses, centralized errors and PostgreSQL queries. `server/schema.sql` defines the relational doctors/appointments model with a doctor foreign key. The UI reloads data after mutations and confirms deletes.
