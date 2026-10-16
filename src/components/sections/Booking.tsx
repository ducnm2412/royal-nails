'use client';

import { FormEvent, useState, useSyncExternalStore } from 'react';
import { site } from '@/config/site';
import { bookingServiceOptions } from '@/content/services';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const noop = () => () => {};
const todayISO = () => new Date().toISOString().slice(0, 10);

export function Booking({ preselect }: { preselect?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  // Ngày tối thiểu chỉ tính ở client để prerender tĩnh không phụ thuộc Date.
  const minDate = useSyncExternalStore(noop, todayISO, () => undefined);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;

    if (!data.name?.trim() || !data.phone?.trim() || !data.service) {
      setStatus('error');
      setMessage('Add your name, phone number and a service so we can reach you.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('bad response');
      const when = data.date
        ? ' on ' + new Date(data.date + 'T12:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
        : '';
      setMessage(
        `Thank you, ${data.name.trim()}. We received your request for ${data.service}${when} and will text or call ${data.phone.trim()} to confirm.`,
      );
      setStatus('sent');
    } catch {
      setStatus('error');
      setMessage(`Your request did not go through. Please call us at ${site.phoneDisplay}.`);
    }
  }

  const sent = status === 'sent';

  return (
    <section id="book" className="book" aria-labelledby="book-title">
      <div className="bg" aria-hidden="true" />
      <div className="wrap">
        <div className="side" data-reveal>
          <span className="kicker">Reservations</span>
          <h2 id="book-title">
            Reserve
            <br />
            your chair.
          </h2>
          <p>
            Send a request and we will confirm by text or call during business hours. For same-day visits, calling is
            fastest.
          </p>
          <a className="tel" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <dl className="hours">
            {site.hours.map((h) => (
              <div key={h.label} style={{ display: 'contents' }}>
                <dt>{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form className={`booking-form${sent ? ' sent' : ''}`} onSubmit={onSubmit} noValidate data-reveal>
          <label className="h">
            Full name
            <input name="name" type="text" autoComplete="name" placeholder="Jane Doe" required />
          </label>
          <label className="h">
            Phone
            <input name="phone" type="tel" autoComplete="tel" placeholder="(805) 000-0000" required />
          </label>
          <label className="h">
            Service
            <select name="service" required defaultValue={preselect && bookingServiceOptions.includes(preselect) ? preselect : ''}>
              <option value="">Choose a service</option>
              {bookingServiceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="h">
            Preferred date
            <input name="date" type="date" min={minDate} />
          </label>
          <label className="h">
            Preferred time
            <select name="time" defaultValue="">
              <option value="">Any time</option>
              <option>Morning (9:30 – 12)</option>
              <option>Afternoon (12 – 4)</option>
              <option>Evening (4 – 7)</option>
            </select>
          </label>
          <label className="h">
            Technician (optional)
            <input name="tech" type="text" placeholder="Any available" />
          </label>
          <label className="full h">
            Notes or inspiration
            <textarea name="notes" placeholder="Describe the look, or paste a photo link" />
          </label>
          <button className="btn solid h" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Request appointment'}
          </button>
          <small className="h">By requesting, you agree to be contacted about your appointment. No spam, ever.</small>
          {message && (
            <div className={`msg${status === 'error' ? ' err' : ''}`} role="status" aria-live="polite">
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
