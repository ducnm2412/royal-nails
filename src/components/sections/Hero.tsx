import Image from 'next/image';
import { site } from '@/config/site';
import { heroStrip } from '@/content/navigation';
import { HeroReveal } from '@/components/motion/HeroReveal';

export function Hero() {
  return (
    <HeroReveal>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-copy">
            <span className="kicker">{site.tagline}</span>
            <h1 id="hero-title">
              <span className="script">Royal</span>
              <span className="sub">Nails &amp; Spa</span>
            </h1>
            <p>
              Manicures, pedicures, hand-painted nail art, facials, waxing and lashes in one calm, elegant studio.
              Walk in polished, walk out royal.
            </p>
            <div className="hero-ctas">
              <a className="btn light solid pill" href="#book">
                Book an appointment
              </a>
              <a className="btn light pill" href={site.phoneHref}>
                Call {site.phoneDisplay}
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>Open</strong>
                {site.hoursShort}
              </div>
              <div>
                <strong>Walk-ins</strong>Welcome when chairs are free
              </div>
              <div>
                <strong>Location</strong>Downtown Ventura
              </div>
            </div>
          </div>
          <div className="hero-strip">
            {heroStrip.map((s, i) => (
              <Image key={s.src} src={s.src} alt={s.alt} width={s.w} height={s.h} priority={i < 3} quality={90} sizes="(max-width: 700px) 50vw, 260px" data-lightbox={s.src} />
            ))}
          </div>
        </div>
      </section>
    </HeroReveal>
  );
}
