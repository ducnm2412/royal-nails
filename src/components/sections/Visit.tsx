import { site } from '@/config/site';

export function Visit() {
  return (
    <section id="visit" className="visit bg-art bg-cover" aria-labelledby="visit-title">
      <div className="wrap">
        <div className="text" data-reveal>
          <span className="kicker">Visit</span>
          <p className="addr" id="visit-title">
            {site.name}
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
          </p>
          <p className="m">
            In the heart of Ventura, minutes from Downtown and the 101, with free parking out front. We welcome guests
            from {site.serviceArea.slice(1).join(', ')}.
          </p>
          <div className="btns">
            <a className="btn solid" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
            <a className="btn" href={site.phoneHref}>
              Call us
            </a>
          </div>
        </div>
        <div className="map" data-reveal>
          <iframe
            src={site.mapsEmbedUrl}
            title={`Map to ${site.name}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
