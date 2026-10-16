import type { Metadata } from 'next';
import Image from 'next/image';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import { gallery, galleryFilters } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Real nail sets from Royal Nails & Spa in Ventura: nail art, French, chrome, aura ombré, short natural nails and pedicures.',
};

/**
 * Gallery with CSS-only filters: radio inputs + :has() selectors in globals.css.
 * No JavaScript required, so it also works in a static preview.
 */
export default function GalleryPage() {
  return (
    <>
      <PageHead kicker="Gallery" title="Fresh from" italic="our chairs." text="Every set here was done in this studio. Save the ones you love and mention them when you book; we will match the shape, shade and finish." />
      <section className="gallery-page">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter gallery">
            {galleryFilters.map((f, i) => (
              <span key={f.key}>
                <input type="radio" name="gf" id={`gf-${f.key}`} value={f.key} defaultChecked={i === 0} />
                <label htmlFor={`gf-${f.key}`}>{f.label}</label>
              </span>
            ))}
          </div>
          <div className="masonry">
            {gallery.map((g) => (
              <figure key={g.img} data-cat={g.cat}>
                <Image src={g.img} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Saw a set you love?" text="Book and mention its name, or bring a photo. Our artists will match it or design something just for you." />
    </>
  );
}
