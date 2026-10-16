import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHead } from '@/components/ui/PageHead';
import { Lotus } from '@/components/ui/Lotus';
import { Ritual } from '@/components/sections/Ritual';
import { CtaBand } from '@/components/sections/CtaBand';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { values, story, studioStrip } from '@/content/about';

export const metadata: Metadata = {
  title: 'About the Studio',
  description:
    'The story and values behind Royal Nail Store, a calm, elegant nail and beauty atelier in Ventura, California.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHead
        kicker="About"
        title="A small ceremony,"
        italic="every time."
        text="Royal Nail Store is a Ventura atelier where beauty rituals are done slowly and well."
      />
      <ScrollReveal>
        <section className="about bg-art bg-cover" aria-labelledby="story-title">
          <div className="wrap">
            <div className="about-grid">
              {/* Collage: bảng hiệu neon đúng tỉ lệ 3:2 + hai bộ móng, viền giấy như ảnh dán album */}
              <div className="collage" data-reveal>
                <figure className="c-neon">
                  <Image
                    src="/images/brand/logo-lotus.png"
                    alt="Royal Nails & Spa neon sign with pink lotus"
                    width={1536}
                    height={1024}
                    quality={90}
                    sizes="(max-width: 860px) 100vw, 520px"
                    data-lightbox="/images/brand/logo-lotus.png"
                    data-caption="The Royal neon sign"
                  />
                </figure>
                <figure className="c-a">
                  <Image src="/images/gallery/mani-06.jpg" alt="Rose pink nails with cream daisies" width={736} height={1104} quality={90} sizes="240px" data-lightbox="/images/gallery/mani-06.jpg" />
                </figure>
                <figure className="c-b">
                  <Image src="/images/gallery/mani-02.jpg" alt="Sheer French tips with white dots" width={736} height={960} quality={90} sizes="240px" data-lightbox="/images/gallery/mani-02.jpg" />
                </figure>
                <span className="c-badge">Est. Ventura</span>
              </div>
              <div className="story" data-reveal>
                <h2 className="display" id="story-title">Our story</h2>
                {story.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <div className="values">
              {values.map((v) => (
                <div className="value" key={v.title} data-reveal>
                  <Lotus className="lotus dot" />
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Ritual />
        <section className="studio-strip" aria-label="Studio photos">
          <div className="wrap">
            {studioStrip.map((s) => (
              <figure key={s.src} data-reveal>
                <Image src={s.src} alt={s.alt} width={s.w} height={s.h} quality={90} sizes="(max-width: 700px) 50vw, 300px" data-lightbox={s.src} />
              </figure>
            ))}
          </div>
        </section>
        <CtaBand />
      </ScrollReveal>
    </>
  );
}
