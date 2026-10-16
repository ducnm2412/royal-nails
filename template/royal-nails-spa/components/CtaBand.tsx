import Link from 'next/link';
import { site } from '@/lib/site';

export default function CtaBand({ title = 'Ready for a little ceremony?', text = 'Reserve a chair online or call the studio. Walk-ins are welcome whenever a chair is free.' }: { title?: string; text?: string }) {
  return (
    <section className="cta-band">
      <div className="bg" aria-hidden="true" />
      <div className="wrap">
        <div>
          <span className="kicker">Reservations</span>
          <h2 className="display">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btns">
          <Link className="btn light solid" href="/book">Book an Appointment</Link>
          <a className="btn light" href={site.phoneHref}>Call {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
