'use client';

import { FormEvent, useState } from 'react';
import { site } from '@/lib/site';

const today = () => new Date().toISOString().slice(0, 10);

export default function Booking() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!data.name?.trim() || !data.phone?.trim() || !data.service) {
      setStatus('error');
      setMessage('Please add your name, phone number and a service so we can reach you.');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/booking', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('bad response');
      const when = data.date
        ? ' on ' + new Date(data.date + 'T12:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
        : '';
      setMessage(`Thank you, ${data.name.trim()}. We received your request for ${data.service}${when} and will text or call ${data.phone.trim()} to confirm.`);
      setStatus('sent');
    } catch {
      setStatus('error');
      setMessage(`Something went wrong sending your request. Please call us at ${site.phoneDisplay}.`);
    }
  }

  const hide = status === 'sent' ? ' h' : '';

  return (
    <section id="book" className="book">
      <div className="bg" aria-hidden="true" />
      <div className="wrap">
        <div className="side">
          <span className="kicker">Reservations</span>
          <h2>Reserve<br />your chair.</h2>
          <p>Send a request and we will confirm by text or call during business hours. For same-day visits, calling is fastest.</p>
          <a className="tel" href={site.phoneHref}>{site.phoneDisplay}</a>
          <dl className="hours">
            {site.hours.map((h) => (
              <div key={h.label} style={{ display: 'contents' }}>
                <dt>{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <form id="booking" className={status === 'sent' ? 'sent' : ''} onSubmit={onSubmit} noValidate>
          <label className={`h${hide}`}>Full name<input id="f-name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" required /></label>
          <label className={`h${hide}`}>Phone<input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="(805) 000-0000" required /></label>
          <label className={`h${hide}`}>Service
            <select id="f-service" name="service" required defaultValue="">
              <option value="">Choose a service</option>
              <option>Manicure</option><option>Pedicure</option><option>Manicure + Pedicure</option><option>Nail Art</option>
              <option>Facial</option><option>Waxing</option><option>Eyelash Extensions</option><option>Not sure yet</option>
            </select>
          </label>
          <label className={`h${hide}`}>Preferred date<input id="f-date" name="date" type="date" min={today()} /></label>
          <label className={`h${hide}`}>Preferred time
            <select id="f-time" name="time" defaultValue="">
              <option value="">Any time</option><option>Morning (9:30 – 12)</option><option>Afternoon (12 – 4)</option><option>Evening (4 – 7)</option>
            </select>
          </label>
          <label className={`h${hide}`}>Technician (optional)<input id="f-tech" name="tech" type="text" placeholder="Any available" /></label>
          <label className={`full h${hide}`}>Notes or inspiration<textarea id="f-notes" name="notes" placeholder="Describe the look, or paste a photo link" /></label>
          <button className={`btn solid h${hide}`} type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Request appointment'}
          </button>
          <small className={`h${hide}`}>By requesting, you agree to be contacted about your appointment. No spam, ever.</small>
          {message && <div className="ok" role="status" style={{ display: 'block' }}>{message}</div>}
        </form>
      </div>
    </section>
  );
}
