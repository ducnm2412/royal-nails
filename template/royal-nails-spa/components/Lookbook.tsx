import Image from 'next/image';
import { lookbook, site } from '@/lib/site';

export default function Lookbook() {
  return (
    <section id="lookbook" className="look">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="kicker">Lookbook</span>
            <h2 style={{ marginTop: '1rem' }}>
              Fresh from<br />
              <span className="it" style={{ color: 'var(--lotus)' }}>our chairs.</span>
            </h2>
          </div>
          <p>
            Every set below was done in this studio. Save the ones you love and mention them when you book; we will
            match the shape, shade and finish.
          </p>
        </div>
        <div className="bento">
          {lookbook.map((item) =>
            'quote' in item ? (
              <div className={`quote ${item.cls}`} key={item.cls}>
                <p>{item.quote}</p>
                <small>{item.by}</small>
              </div>
            ) : (
              <figure className={item.cls} key={item.cls}>
                <Image src={item.img} alt={item.alt} fill sizes="(max-width: 560px) 50vw, 33vw" />
                {'caption' in item && item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            ),
          )}
        </div>
        <div className="look-foot">
          <p>Follow along for new sets every week.</p>
          <a className="btn" href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  );
}
