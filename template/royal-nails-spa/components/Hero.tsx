import Image from 'next/image';
import { site } from '@/lib/site';

const strip = [
  { src: '/img/g03.jpg', alt: 'Pink stiletto nails with 3D flowers', w: 408, h: 408 },
  { src: '/img/g05.jpg', alt: 'Silver chrome nails with crystals', w: 298, h: 298 },
  { src: '/img/g10.jpg', alt: 'Black French tip almond nails', w: 238, h: 297 },
  { src: '/img/g06.jpg', alt: 'Iridescent pink nails with red hearts', w: 298, h: 298 },
  { src: '/img/g01.jpg', alt: 'Navy nails with gold stars', w: 419, h: 628 },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-copy">
          <span className="kicker">{site.tagline}</span>
          <h1>
            <span className="script">Royal</span>
            <span className="sub">Nails &amp; Spa</span>
          </h1>
          <p>
            Manicures, pedicures, hand-painted nail art, facials, waxing and lashes in one calm, elegant studio.
            Walk in polished, walk out royal.
          </p>
          <div className="hero-ctas">
            <a className="btn light solid" href="#book">Book an Appointment</a>
            <a className="btn light" href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </div>
          <div className="hero-meta">
            <div><strong>Open</strong>Mon – Sat 9:30am – 7pm · Sun 10am – 5pm</div>
            <div><strong>Walk-ins</strong>Welcome when chairs are free</div>
            <div><strong>Location</strong>Downtown Ventura</div>
          </div>
        </div>
        <div className="hero-strip">
          {strip.map((s, i) => (
            <Image key={s.src} src={s.src} alt={s.alt} width={s.w} height={s.h} priority={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
