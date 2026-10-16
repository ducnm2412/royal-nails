import Image from 'next/image';
import { ritual } from '@/lib/site';

export default function Ritual() {
  return (
    <section id="ritual" className="ritual">
      <div className="wrap">
        <div className="ph">
          <Image src="/img/g04.jpg" alt="Hand with pink floral stiletto nails and gold rings" fill sizes="(max-width: 860px) 100vw, 40vw" />
          <span className="badge">Hand-sculpted at Royal</span>
        </div>
        <div>
          <span className="kicker">The Ritual</span>
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)', marginTop: '1rem' }}>Four unhurried steps</h2>
          <div className="steps">
            {ritual.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
