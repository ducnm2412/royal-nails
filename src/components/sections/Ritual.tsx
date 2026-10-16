import Image from 'next/image';
import { ritual } from '@/content/ritual';

export function Ritual() {
  return (
    <section id="ritual" className="ritual" aria-labelledby="ritual-title">
      <div className="wrap">
        <div className="ph" data-reveal data-parallax>
          <Image
            src="/images/gallery/nail-04.jpg"
            alt="Hand with pink floral stiletto nails and gold rings"
            fill
            quality={90}
            sizes="(max-width: 860px) 100vw, 520px"
            data-lightbox="/images/gallery/nail-04.jpg"
            data-caption="Hand-sculpted at Royal"
          />
          <span className="badge">Hand-sculpted at Royal</span>
        </div>
        <div>
          <div data-reveal>
            <span className="kicker">The Ritual</span>
            <h2 id="ritual-title">Four unhurried steps</h2>
          </div>
          <ol className="steps" style={{ listStyle: 'none', margin: '2.5rem 0 0', padding: 0 }}>
            {ritual.map((s) => (
              <li className="step" key={s.n} data-reveal>
                <span className="n" aria-hidden="true">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
