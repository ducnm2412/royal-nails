import type { Metadata } from 'next';
import { PageHead } from '@/components/ui/PageHead';
import { Visit } from '@/components/sections/Visit';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact & Hours',
  description: 'Royal Nail Store, Ventura CA: address, opening hours, phone and directions.',
  alternates: { canonical: '/contact' },
};

const socials = [
  { label: 'Instagram', href: site.social.instagram },
  { label: 'Facebook', href: site.social.facebook },
  { label: 'TikTok', href: site.social.tiktok },
  { label: 'Yelp', href: site.social.yelp },
];

export default function ContactPage() {
  return (
    <>
      <PageHead
        kicker="Contact"
        title="Come say"
        italic="hello."
        text="Walk-ins are welcome whenever a chair is free; appointments guarantee your time."
      />
      <ScrollReveal>
        <section className="contact-cards bg-art" aria-label="Contact details">
          <div className="wrap">
            <div className="card" data-reveal>
              <span className="kicker">Call or text</span>
              <a className="big-link" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
              <p>We answer during opening hours and reply to texts within the day.</p>
            </div>
            <div className="card" data-reveal>
              <span className="kicker">Hours</span>
              <dl className="hours">
                {site.hours.map((h) => (
                  <div key={h.label} style={{ display: 'contents' }}>
                    <dt>{h.label}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
              <p>Closed on major holidays.</p>
            </div>
            <div className="card" data-reveal>
              <span className="kicker">Follow</span>
              <ul className="plain">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Visit />
      </ScrollReveal>
    </>
  );
}
