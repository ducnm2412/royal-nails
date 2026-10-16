import Image from 'next/image';
import { site } from '@/lib/site';

export default function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="wrap">
        <div className="text">
          <span className="kicker">Visit</span>
          <p className="addr">
            {site.name}<br />
            {site.address.street}<br />
            {site.address.city}, {site.address.region} {site.address.postal}
          </p>
          <p className="m">
            In the heart of Ventura, minutes from Downtown and the 101, with free parking out front. We welcome guests
            from Oxnard, Camarillo, Ojai and Santa Paula.
          </p>
          <div className="btns">
            <a className="btn solid" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            <a className="btn" href={site.phoneHref}>Call us</a>
          </div>
        </div>
        <div className="ph">
          <Image src="/img/logo.jpg" alt="Royal Nails & Spa neon sign with pink lotus" fill sizes="(max-width: 860px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
