require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null;
const STATUSES = ['pending', 'confirmed', 'completed', 'cancelled'];
let doctors = [
  { id: 1, name: 'Dr. Sarah Ahmed', specialization: 'General Dentistry', phone: '+92 300 1112223', email: 'sarah@smilecare.test', availability: 'Mon-Fri, 9:00-17:00', active: true },
  { id: 2, name: 'Dr. Hamza Khan', specialization: 'Orthodontics', phone: '+92 301 4445566', email: 'hamza@smilecare.test', availability: 'Tue-Sat, 10:00-18:00', active: true }
];
let appointments = [
  { id: 1, patientName: 'Ayesha Malik', patientContact: '+92 333 5556667', doctorId: 1, dateTime: '2026-09-22T10:00', reason: 'Routine check-up', status: 'confirmed' },
  { id: 2, patientName: 'Bilal Raza', patientContact: '+92 322 8889990', doctorId: 2, dateTime: '2026-09-23T14:30', reason: 'Braces consultation', status: 'pending' }
];

async function q(text, params = []) { return pool ? pool.query(text, params) : null; }
function doctorError(d) { return !d.name || !d.specialization || !d.phone || !d.email ? 'Name, specialization, phone and email are required.' : null; }
function appointmentError(a) {
  if (!a.patientName || !a.patientContact || !a.doctorId || !a.dateTime || !a.reason || !a.status) return 'Patient, contact, doctor, date/time, reason and status are required.';
  if (!STATUSES.includes(a.status)) return 'Status must be pending, confirmed, completed or cancelled.';
  if (Number.isNaN(Date.parse(a.dateTime))) return 'Date/time must be valid.';
  return null;
}
async function doctorExists(id) {
  if (pool) { const r = await q('SELECT 1 FROM doctors WHERE id=$1', [id]); return r.rowCount > 0; }
  return doctors.some(d => d.id === id);
}
async function hasOverlap(a, excludeId = null) {
  if (a.status === 'cancelled') return false;
  const when = new Date(a.dateTime).getTime();
  if (pool) {
    const r = await q("SELECT 1 FROM appointments WHERE doctor_id=$1 AND status <> 'cancelled' AND ($2::int IS NULL OR id <> $2) AND date_time BETWEEN ($3::timestamp - interval '59 minutes') AND ($3::timestamp + interval '59 minutes') LIMIT 1", [a.doctorId, excludeId, a.dateTime]);
    return r.rowCount > 0;
  }
  return appointments.some(x => x.id !== excludeId && x.doctorId === Number(a.doctorId) && x.status !== 'cancelled' && Math.abs(new Date(x.dateTime).getTime() - when) < 60 * 60 * 1000);
}
function appointmentResponse(a) { return { ...a, doctorId: a.doctor_id ?? a.doctorId, patientName: a.patient_name ?? a.patientName, patientContact: a.patient_contact ?? a.patientContact, dateTime: a.date_time ?? a.dateTime }; }

app.get('/api/health', (_req, res) => res.json({ success: true, status: 'ok', database: !!pool }));
app.get('/api/doctors', async (_req, res, next) => { try { const r = await q('SELECT * FROM doctors ORDER BY id DESC'); res.json({ success: true, data: r ? r.rows : doctors }); } catch (e) { next(e); } });
app.post('/api/doctors', async (req, res, next) => { try {
  const error = doctorError(req.body); if (error) return res.status(400).json({ success: false, error });
  const d = { ...req.body, active: req.body.active !== false };
  if (pool) { const r = await q('INSERT INTO doctors(name,specialization,phone,email,availability,active) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [d.name,d.specialization,d.phone,d.email,d.availability || '',d.active]); return res.status(201).json({ success: true, data: r.rows[0] }); }
  d.id = Date.now(); doctors.push(d); res.status(201).json({ success: true, data: d });
} catch (e) { next(e); } });
app.put('/api/doctors/:id', async (req, res, next) => { try {
  const id = Number(req.params.id), error = doctorError(req.body); if (error) return res.status(400).json({ success: false, error });
  if (pool) { const r = await q('UPDATE doctors SET name=$1,specialization=$2,phone=$3,email=$4,availability=$5,active=$6 WHERE id=$7 RETURNING *', [req.body.name,req.body.specialization,req.body.phone,req.body.email,req.body.availability || '',req.body.active !== false,id]); if (!r.rowCount) return res.status(404).json({ success: false, error: 'Doctor not found' }); return res.json({ success: true, data: r.rows[0] }); }
  const i = doctors.findIndex(d => d.id === id); if (i < 0) return res.status(404).json({ success: false, error: 'Doctor not found' }); doctors[i] = { ...doctors[i], ...req.body, id }; res.json({ success: true, data: doctors[i] });
} catch (e) { next(e); } });
app.delete('/api/doctors/:id', async (req, res, next) => { try {
  const id = Number(req.params.id); if (pool) { const r = await q('DELETE FROM doctors WHERE id=$1', [id]); if (!r.rowCount) return res.status(404).json({ success: false, error: 'Doctor not found' }); } else doctors = doctors.filter(d => d.id !== id); res.json({ success: true });
} catch (e) { if (e.code === '23503' || e.code === '23001') return res.status(409).json({ success: false, error: 'Doctor has appointments and cannot be deleted. Remove or reassign the appointments first.' }); next(e); } });
app.get('/api/appointments', async (_req, res, next) => { try { const r = await q('SELECT * FROM appointments ORDER BY date_time ASC'); res.json({ success: true, data: r ? r.rows.map(appointmentResponse) : appointments }); } catch (e) { next(e); } });
app.post('/api/appointments', async (req, res, next) => { try {
  const error = appointmentError(req.body); if (error) return res.status(400).json({ success: false, error });
  const a = { ...req.body, doctorId: Number(req.body.doctorId) };
  if (!(await doctorExists(a.doctorId))) return res.status(400).json({ success: false, error: 'Selected doctor does not exist.' });
  if (await hasOverlap(a)) return res.status(409).json({ success: false, error: 'This doctor already has an appointment within the same hour.' });
  if (pool) { const r = await q('INSERT INTO appointments(patient_name,patient_contact,doctor_id,date_time,reason,status) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [a.patientName,a.patientContact,a.doctorId,a.dateTime,a.reason,a.status]); return res.status(201).json({ success: true, data: appointmentResponse(r.rows[0]) }); }
  a.id = Date.now(); appointments.push(a); res.status(201).json({ success: true, data: a });
} catch (e) { next(e); } });
app.put('/api/appointments/:id', async (req, res, next) => { try {
  const id = Number(req.params.id), error = appointmentError(req.body); if (error) return res.status(400).json({ success: false, error });
  const a = { ...req.body, doctorId: Number(req.body.doctorId) }; if (!(await doctorExists(a.doctorId))) return res.status(400).json({ success: false, error: 'Selected doctor does not exist.' });
  if (await hasOverlap(a, id)) return res.status(409).json({ success: false, error: 'This doctor already has an appointment within the same hour.' });
  if (pool) { const r = await q('UPDATE appointments SET patient_name=$1,patient_contact=$2,doctor_id=$3,date_time=$4,reason=$5,status=$6 WHERE id=$7 RETURNING *', [a.patientName,a.patientContact,a.doctorId,a.dateTime,a.reason,a.status,id]); if (!r.rowCount) return res.status(404).json({ success: false, error: 'Appointment not found' }); return res.json({ success: true, data: appointmentResponse(r.rows[0]) }); }
  const i = appointments.findIndex(x => x.id === id); if (i < 0) return res.status(404).json({ success: false, error: 'Appointment not found' }); appointments[i] = { ...appointments[i], ...a, id }; res.json({ success: true, data: appointments[i] });
} catch (e) { next(e); } });
app.delete('/api/appointments/:id', async (req, res, next) => { try { const id = Number(req.params.id); if (pool) { const r = await q('DELETE FROM appointments WHERE id=$1', [id]); if (!r.rowCount) return res.status(404).json({ success: false, error: 'Appointment not found' }); } else appointments = appointments.filter(a => a.id !== id); res.json({ success: true }); } catch (e) { next(e); } });
app.use((err, _req, res, _next) => { console.error(err); res.status(500).json({ success: false, error: 'Internal server error' }); });
app.listen(process.env.PORT || 4000, () => console.log('API running'));
