import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/config/site';
import { heroStrip, BOOK_PATH } from '@/content/navigation';
import { HeroReveal } from '@/components/motion/HeroReveal';

/**
 * Hero hai cột: logo neon thật làm tiêu đề, ảnh hoa anh đào lớn bên phải,
 * hoa sakura bay quanh; dải ảnh xòe quạt bên dưới nối xuống Services.
 */
export function Hero() {
  return (
    <HeroReveal>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="kicker">{site.tagline}</span>
              <h1 id="hero-title" className="hero-logo">
                <Image src="/images/brand/logo.png" alt="Royal Nails & Spa" width={900} height={702} priority sizes="(max-width: 860px) 70vw, 420px" />
              </h1>
              <p className="hero-lead">
                Manicures, pedicures, hand-painted nail art, facials, waxing and lashes in one calm, elegant studio.
                Walk in polished, walk out royal.
              </p>
              <div className="hero-ctas">
                <Link className="btn light solid pill" href={BOOK_PATH}>
                  Book an appointment
                </Link>
                <a className="btn light pill" href={site.phoneHref}>
                  Call {site.phoneDisplay}
                </a>
              </div>
              <dl className="hero-meta">
                <div>
                  <dt>Open</dt>
                  <dd>{site.hoursShort}</dd>
                </div>
                <div>
                  <dt>Walk-ins</dt>
                  <dd>Welcome when chairs are free</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Downtown Ventura</dd>
                </div>
              </dl>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <span className="petal petal-a">
                <Image src="/images/backgrounds/sakura-flower.png" alt="" width={900} height={900} sizes="180px" />
              </span>
              <span className="petal petal-b">
                <Image src="/images/backgrounds/sakura-flower.png" alt="" width={900} height={900} sizes="120px" />
              </span>
              <figure className="hero-photo">
                <Image
                  src="/images/gallery/mani-09.jpg"
                  alt=""
                  width={736}
                  height={1118}
                  priority
                  quality={90}
                  sizes="(max-width: 860px) 70vw, 420px"
                  data-lightbox="/images/gallery/mani-09.jpg"
                  data-caption="Cherry Blossom"
                />
              </figure>
              <span className="hero-badge">
                <strong>6</strong>
                <small>services, one studio</small>
              </span>
              {/* Thẻ ảnh nhỏ các dịch vụ khác */}
              <figure className="mini mini-a">
                <Image src="/images/gallery/lash-02.jpg" alt="" width={1050} height={1400} sizes="120px" quality={85} data-lightbox="/images/gallery/lash-02.jpg" data-caption="Wispy Hybrid Lashes" />
              </figure>
              <figure className="mini mini-b">
                <Image src="/images/gallery/facial-02.jpg" alt="" width={736} height={1308} sizes="120px" quality={85} data-lightbox="/images/gallery/facial-02.jpg" data-caption="Signature Facial" />
              </figure>
              <figure className="mini mini-c">
                <Image src="/images/gallery/pedi-01.jpg" alt="" width={736} height={1104} sizes="120px" quality={85} data-lightbox="/images/gallery/pedi-01.jpg" data-caption="Dotted Pedicure" />
              </figure>
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
