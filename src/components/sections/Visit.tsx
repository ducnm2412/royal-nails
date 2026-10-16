import { site } from '@/config/site';
import { FloralDeco } from '@/components/ui/FloralDeco';

export function Visit() {
  return (
    <section id="visit" className="visit bg-art bg-cover" aria-labelledby="visit-title">
      <FloralDeco variant="roses" pos="tl" size={320} speed={0.7} />
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
            On Johnson Drive just off the 101, next to the North Bank Shopping Center, with free parking out front. We welcome guests
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
