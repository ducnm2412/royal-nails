import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import { serviceDetails } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services & Prices',
  description: 'Manicure, pedicure, nail art, facials, waxing and eyelash extensions in Ventura, CA. Full service menu with times and prices.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        kicker="Services & Prices"
        title="Six services,"
        italic="one quiet studio."
        text="Every appointment opens with a short consultation on shape, shade and skin. Prices below are starting prices; add-ons and longer lengths are quoted before we begin."
      />
      <nav className="sub-nav" aria-label="Service sections">
        <div className="wrap">
          {serviceDetails.map((s) => <a key={s.slug} href={`#${s.slug}`}>{s.name}</a>)}
        </div>
      </nav>
      {serviceDetails.map((s, i) => (
        <section className={`svc-detail${i % 2 ? ' flip' : ''}`} id={s.slug} key={s.slug}>
          <div className="wrap">
            <div className="ph">
              <Image src={s.img} alt={s.alt} fill sizes="(max-width: 860px) 100vw, 45vw" />
              <span className="n">{s.num}</span>
            </div>
            <div className="menu">
              <h2 className="display">{s.name}</h2>
              <p className="intro">{s.intro}</p>
              <ul className="price-list">
                {s.items.map((it) => (
                  <li key={it.name}>
                    <span className="name">{it.name}</span>
                    <span className="dots" aria-hidden="true" />
                    <span className="time">{it.time}</span>
                    <span className="price">{it.price}</span>
                  </li>
                ))}
              </ul>
              <Link className="btn solid" href={`/book?service=${encodeURIComponent(s.name)}`}>Book {s.name}</Link>
            </div>
          </div>
        </section>
      ))}
      <CtaBand title="Not sure what to choose?" text="Call us and we will help you pick, or book a consultation and decide together in the chair." />
    </>
  );
}
