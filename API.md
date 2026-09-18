# API Reference

- `GET /api/health`
- `GET/POST /api/doctors`
- `PUT/DELETE /api/doctors/:id`
- `GET/POST /api/appointments`
- `PUT/DELETE /api/appointments/:id`

Successful responses use `{ success: true, data }`; errors use `{ success: false, error }`. Doctor fields: name, specialization, phone, email, availability, active. Appointment fields: patientName, patientContact, doctorId, dateTime, reason, status.
