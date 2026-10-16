import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import Visit from '@/components/Visit';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Hours',
  description: 'Royal Nails & Spa, Ventura CA: address, opening hours, phone and directions.',
};

export default function ContactPage() {
  return (
    <>
      <PageHead kicker="Contact" title="Come say" italic="hello." text="Walk-ins are welcome whenever a chair is free; appointments guarantee your time." />
      <section className="contact-cards">
        <div className="wrap">
          <div className="card">
            <span className="kicker">Call or text</span>
            <a className="big-link" href={site.phoneHref}>{site.phoneDisplay}</a>
            <p>We answer during opening hours and reply to texts within the day.</p>
          </div>
          <div className="card">
            <span className="kicker">Hours</span>
            <dl className="hours">
              {site.hours.map((h) => (<div key={h.label} style={{ display: 'contents' }}><dt>{h.label}</dt><dd>{h.value}</dd></div>))}
            </dl>
            <p>Closed on major holidays.</p>
          </div>
          <div className="card">
            <span className="kicker">Follow</span>
            <ul className="plain">
              <li><a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={site.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href={site.social.yelp} target="_blank" rel="noopener noreferrer">Yelp</a></li>
            </ul>
          </div>
        </div>
      </section>
      <Visit />
    </>
  );
}
