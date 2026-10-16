import Image from 'next/image';
import { services } from '@/lib/site';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="kicker">Services</span>
            <h2 style={{ marginTop: '1rem' }}>
              Everything beautiful,<br />
              <span className="it" style={{ color: 'var(--lotus)' }}>under one roof.</span>
            </h2>
          </div>
          <p>
            Book one service or build a full afternoon. Every appointment opens with a short consultation on shape,
            shade and skin, so the result suits you rather than the trend.
          </p>
        </div>
        <div className="svcs">
          {services.map((s) => (
            <a className="svc" href="#book" key={s.name}>
              <div className="ph">
                <Image src={s.img} alt={s.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                <span className="n">{s.num}</span>
              </div>
              <div className="row">
                <h3>{s.name}</h3>
                <span>{s.time}</span>
              </div>
              <p>{s.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
