import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/config/site';
import { lookbook } from '@/content/lookbook';
import { FloralDeco } from '@/components/ui/FloralDeco';

export function Lookbook() {
  return (
    <section id="lookbook" className="look bg-art" aria-labelledby="lookbook-title">
      <FloralDeco variant="roses" pos="bl" size={380} speed={0.8} />
      <div className="wrap">
        <div className="head" data-reveal>
          <div>
            <span className="kicker">Lookbook</span>
            <h2 id="lookbook-title">
              Fresh from
              <br />
              <span className="it">our chairs.</span>
            </h2>
          </div>
          <p>
            Every set below was done in this studio. Save the ones you love and mention them when you book; we will
            match the shape, shade and finish.
          </p>
        </div>
        <div className="bento">
          {lookbook.map((item) =>
            item.kind === 'quote' ? (
              <blockquote className={`quote ${item.cls}`} key={item.cls} data-reveal>
                <p>{item.quote}</p>
                <small>{item.by}</small>
              </blockquote>
            ) : (
              <figure className={item.cls} key={item.cls} data-reveal>
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 420px"
                  data-lightbox={item.img}
                  data-caption={item.caption}
                />
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            ),
          )}
        </div>
        <div className="look-foot">
          <p>Follow along for new sets every week.</p>
          <div className="btns">
            <Link className="btn solid" href="/gallery">
              See the gallery
            </Link>
            <a className="btn" href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
