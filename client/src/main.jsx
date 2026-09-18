import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './styles.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
async function api(path, options = {}) {
  const response = await fetch(API + path, { headers: { 'Content-Type': 'application/json' }, ...options });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || 'Request failed');
  return body.data;
}
function Notice({ message, error = false }) { return message ? <div className={error ? 'notice error' : 'notice'}>{message}</div> : null; }
function Layout({ children }) { return <><header><b>✦ SmileCare</b><nav><NavLink to="/dashboard">Dashboard</NavLink><NavLink to="/doctors">Doctors</NavLink><NavLink to="/appointments">Appointments</NavLink></nav></header><main>{children}</main></>; }
function Page({ title, action, children }) { return <section><div className="head"><div><small>SMILECARE CLINIC</small><h1>{title}</h1></div>{action}</div>{children}</section>; }
function Modal({ children }) { return <div className="modal">{children}</div>; }

function Doctors() {
  const [data, setData] = useState([]), [loading, setLoading] = useState(true), [edit, setEdit] = useState(null), [detail, setDetail] = useState(null), [query, setQuery] = useState(''), [notice, setNotice] = useState(''), [error, setError] = useState('');
  const load = () => { setLoading(true); setError(''); api('/doctors').then(setData).catch(e => setError(e.message)).finally(() => setLoading(false)); };
  useEffect(load, []);
  const remove = async id => { if (!confirm('Delete this doctor?')) return; try { await api('/doctors/' + id, { method: 'DELETE' }); setNotice('Doctor deleted successfully.'); load(); } catch (e) { setError(e.message); } };
  const filtered = data.filter(x => (x.name + x.specialization + x.email).toLowerCase().includes(query.toLowerCase()));
  return <Page title="Doctors" action={<button onClick={() => setEdit({ active: true })}>+ Add doctor</button>}>
    <Notice message={notice} /><Notice message={error} error />
    <input className="search" placeholder="Search by name, specialization or email…" value={query} onChange={e => setQuery(e.target.value)} />
    {loading ? <p className="state">Loading doctors…</p> : !filtered.length ? <p className="state">No doctors found.</p> : <div className="cards">{filtered.map(x => <article className="card" key={x.id}><i>{x.name.split(' ').pop()[0]}</i><div className="grow"><h3>{x.name}</h3><p>{x.specialization}</p><small>{x.phone} · {x.email}<br />{x.availability}</small></div><span className="badge">{x.active ? 'Active' : 'Inactive'}</span><button onClick={() => setDetail(x)}>View</button><button onClick={() => setEdit(x)}>Edit</button><button className="danger" onClick={() => remove(x.id)}>Delete</button></article>)}</div>}
    {edit && <DoctorForm value={edit} close={() => setEdit(null)} save={() => { setEdit(null); setNotice('Doctor saved successfully.'); load(); }} />}
    {detail && <Modal><div className="form"><h2>{detail.name}</h2><p><b>Specialization:</b> {detail.specialization}</p><p><b>Phone:</b> {detail.phone}</p><p><b>Email:</b> {detail.email}</p><p><b>Availability:</b> {detail.availability}</p><p><b>Status:</b> {detail.active ? 'Active' : 'Inactive'}</p><button onClick={() => setDetail(null)}>Close</button></div></Modal>}
  </Page>;
}
function DoctorForm({ value, close, save }) {
  const [form, setForm] = useState(value), [error, setError] = useState('');
  const submit = async event => { event.preventDefault(); try { await api(form.id ? '/doctors/' + form.id : '/doctors', { method: form.id ? 'PUT' : 'POST', body: JSON.stringify(form) }); save(); } catch (e) { setError(e.message); } };
  return <Modal><form className="form" onSubmit={submit}><h2>{form.id ? 'Edit' : 'Add'} doctor</h2><Notice message={error} error />{['name','specialization','phone','email','availability'].map(key => <label key={key}>{key.replace(/^./, x => x.toUpperCase())}<input required={key !== 'availability'} value={form[key] || ''} onChange={e => setForm({ ...form, [key]: e.target.value })} /></label>)}<label><input type="checkbox" checked={form.active !== false} onChange={e => setForm({ ...form, active: e.target.checked })} /> Active</label><div className="form-actions"><button type="button" onClick={close}>Cancel</button><button>Save doctor</button></div></form></Modal>;
}

function Appointments() {
  const [data, setData] = useState([]), [doctors, setDoctors] = useState([]), [loading, setLoading] = useState(true), [edit, setEdit] = useState(null), [filter, setFilter] = useState('all'), [query, setQuery] = useState(''), [notice, setNotice] = useState(''), [error, setError] = useState('');
  const load = () => { setLoading(true); setError(''); Promise.all([api('/appointments'), api('/doctors')]).then(([a, d]) => { setData(a); setDoctors(d); }).catch(e => setError(e.message)).finally(() => setLoading(false)); };
  useEffect(load, []);
  const remove = async id => { if (!confirm('Delete this appointment?')) return; try { await api('/appointments/' + id, { method: 'DELETE' }); setNotice('Appointment deleted successfully.'); load(); } catch (e) { setError(e.message); } };
  const visible = data.filter(x => (filter === 'all' || x.status === filter) && (x.patientName + x.patientContact + x.reason).toLowerCase().includes(query.toLowerCase()));
  return <Page title="Appointments" action={<button onClick={() => setEdit({ status: 'pending' })}>+ Add appointment</button>}>
    <Notice message={notice} /><Notice message={error} error />
    <div className="filters"><input className="search" placeholder="Search patient or reason…" value={query} onChange={e => setQuery(e.target.value)} /><select value={filter} onChange={e => setFilter(e.target.value)}><option value="all">All statuses</option>{['pending','confirmed','completed','cancelled'].map(x => <option key={x}>{x}</option>)}</select></div>
    {loading ? <p className="state">Loading appointments…</p> : !visible.length ? <p className="state">No appointments found.</p> : <div className="table"><table><thead><tr><th>Patient</th><th>Doctor</th><th>Date/time</th><th>Reason</th><th>Status</th><th></th></tr></thead><tbody>{visible.map(x => <tr key={x.id}><td><b>{x.patientName}</b><small>{x.patientContact}</small></td><td>{doctors.find(y => y.id == x.doctorId)?.name || 'Unknown'}</td><td>{new Date(x.dateTime).toLocaleString()}</td><td>{x.reason}</td><td><span className="badge">{x.status}</span></td><td><button onClick={() => setEdit(x)}>Edit</button><button className="danger" onClick={() => remove(x.id)}>Delete</button></td></tr>)}</tbody></table></div>}
    {edit && <AppointmentForm value={edit} doctors={doctors} close={() => setEdit(null)} save={() => { setEdit(null); setNotice('Appointment saved successfully.'); load(); }} />}
  </Page>;
}
function AppointmentForm({ value, doctors, close, save }) {
  const [form, setForm] = useState({ ...value, dateTime: value.dateTime ? value.dateTime.replace(' ', 'T').slice(0, 16) : '' }), [error, setError] = useState('');
  const submit = async event => { event.preventDefault(); try { await api(form.id ? '/appointments/' + form.id : '/appointments', { method: form.id ? 'PUT' : 'POST', body: JSON.stringify(form) }); save(); } catch (e) { setError(e.message); } };
  return <Modal><form className="form" onSubmit={submit}><h2>{form.id ? 'Edit' : 'Add'} appointment</h2><Notice message={error} error />{[['patientName','Patient name'],['patientContact','Contact'],['reason','Reason']].map(([key, label]) => <label key={key}>{label}<input required value={form[key] || ''} onChange={e => setForm({ ...form, [key]: e.target.value })} /></label>)}<label>Doctor<select required value={form.doctorId || ''} onChange={e => setForm({ ...form, doctorId: Number(e.target.value) })}><option value="">Select doctor</option>{doctors.map(x => <option value={x.id} key={x.id}>{x.name}</option>)}</select></label><label>Date/time<input required type="datetime-local" value={form.dateTime || ''} onChange={e => setForm({ ...form, dateTime: e.target.value })} /></label><label>Status<select value={form.status || 'pending'} onChange={e => setForm({ ...form, status: e.target.value })}>{['pending','confirmed','completed','cancelled'].map(x => <option key={x}>{x}</option>)}</select></label><div className="form-actions"><button type="button" onClick={close}>Cancel</button><button>Save appointment</button></div></form></Modal>;
}

function Dashboard() {
  const [doctors, setDoctors] = useState([]), [appointments, setAppointments] = useState([]), [loading, setLoading] = useState(true), [error, setError] = useState('');
  useEffect(() => { Promise.all([api('/doctors'), api('/appointments')]).then(([d, a]) => { setDoctors(d); setAppointments(a); }).catch(e => setError(e.message)).finally(() => setLoading(false)); }, []);
  const now = new Date(), upcoming = appointments.filter(x => new Date(x.dateTime) >= now), today = appointments.filter(x => new Date(x.dateTime).toDateString() === now.toDateString());
  return <Page title="Good morning"><Notice message={error} error />{loading ? <p className="state">Loading dashboard…</p> : <><div className="stats">{[['Total doctors', doctors.length],['Upcoming appointments', upcoming.length],['Today’s appointments', today.length],['Pending status', appointments.filter(x => x.status === 'pending').length]].map(x => <div key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong></div>)}</div><div className="panel"><h2>Recent appointments</h2>{!appointments.length ? <p className="state">No appointments found.</p> : appointments.slice(0, 5).map(x => <p className="row" key={x.id}><b>{x.patientName}<small>{x.reason}</small></b><span>{new Date(x.dateTime).toLocaleString()} · {x.status}</span></p>)}</div></>}</Page>;
}
function App() { return <Layout><Routes><Route path="/" element={<Dashboard />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/doctors" element={<Doctors />} /><Route path="/appointments" element={<Appointments />} /></Routes></Layout>; }
createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);
