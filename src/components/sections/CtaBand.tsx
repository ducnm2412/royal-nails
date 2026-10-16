import Link from 'next/link';
import { site } from '@/config/site';
import { BOOK_PATH } from '@/content/navigation';

/** Dải kêu gọi đặt lịch màu rượu vang, đặt cuối các trang con. */
export function CtaBand({
  title = 'Ready for a little ceremony?',
  text = 'Reserve a chair online or call the studio. Walk-ins are welcome whenever a chair is free.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="bg" aria-hidden="true" />
      <div className="wrap">
        <div data-reveal>
          <span className="kicker">Reservations</span>
          <h2 className="display">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btns" data-reveal>
          <Link className="btn light solid" href={BOOK_PATH}>
            Book an appointment
          </Link>
          <a className="btn light" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
