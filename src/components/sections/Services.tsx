import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/content/services';
import { FloralDeco } from '@/components/ui/FloralDeco';

export function Services() {
  return (
    <section id="services" className="bg-art" aria-labelledby="services-title">
      <FloralDeco variant="sakura" pos="tr" size={300} speed={1.2} />
      <div className="wrap">
        <div className="head" data-reveal>
          <div>
            <span className="kicker">Services</span>
            <h2 id="services-title">
              Everything beautiful,
              <br />
              <span className="it">under one roof.</span>
            </h2>
          </div>
          <p>
            Book one service or build a full afternoon. Every appointment opens with a short consultation on shape,
            shade and skin, so the result suits you rather than the trend.
          </p>
        </div>
        <div className="svcs">
          {services.map((s) => (
            <article className="svc" key={s.slug} data-reveal>
              {/* Ảnh mở lightbox; tiêu đề dẫn tới form đặt lịch */}
              <div className="ph">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  style={{ objectPosition: s.pos }}
                  quality={90}
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 420px"
                  data-lightbox={s.img}
                  data-caption={s.name}
                />
                <span className="n" aria-hidden="true">{s.num}</span>
              </div>
              <Link className="row" href={`/services#${s.slug}`}>
                <h3>{s.name}</h3>
                <span>{s.time}</span>
              </Link>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <div className="look-foot" data-reveal>
          <p>Starting prices and add-ons for every service.</p>
          <Link className="btn" href="/services">
            Full menu &amp; prices
          </Link>
        </div>
      </div>
    </section>
  );
}
