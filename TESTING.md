# Testing Checklist

- Start API and frontend with `npm run dev`.
- Check `GET http://localhost:4000/api/health`.
- Open dashboard, doctors, and appointments routes.
- Create, edit, and delete a doctor; confirm deletion first.
- Search doctors and verify active status display.
- Create, edit, and delete an appointment; confirm deletion first.
- Submit incomplete forms and verify useful validation errors.
- Verify the appointment doctor selector only uses existing doctors.
- Verify lists refresh after every mutation.
- Resize the browser to confirm responsive layout.
- With PostgreSQL configured, restart the API and verify records remain persisted.
