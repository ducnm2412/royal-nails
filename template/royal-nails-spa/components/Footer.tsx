import { site, services } from '@/lib/site';

const Icon = {
  facebook: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4V14h2.8v8h3.3z" /></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>,
  tiktok: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.3 1.7 3.7 4 4v3c-1.5 0-2.9-.5-4-1.3V15a6 6 0 1 1-5-5.9v3.1a3 3 0 1 0 2 2.8V3h3z" /></svg>,
  yelp: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 3l1 9-2 1-5-6 6-4zm-7 8l6 2v2l-6 2v-6zm9 4l5 4-3 3-4-5 2-2zm0-3l6-3 1 4-7 1v-2z" /></svg>,
};

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="top">
          <div>
            <div className="big">Royal</div>
            <p style={{ color: 'var(--muted)', marginTop: '.8rem', maxWidth: '34ch', fontSize: '.95rem' }}>
              Nails &amp; Spa in Ventura, California. Manicure, pedicure, nail art, facials, waxing and lashes.
            </p>
            <div className="social">
              {(Object.keys(Icon) as (keyof typeof Icon)[]).map((k) => (
                <a key={k} href={site.social[k]} aria-label={k} target="_blank" rel="noopener noreferrer">{Icon[k]}</a>
              ))}
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>{services.map((s) => <li key={s.name}><a href="#services">{s.name}</a></li>)}</ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><a href="#lookbook">Lookbook</a></li>
              <li><a href="#ritual">The Ritual</a></li>
              <li><a href="#book">Reservations</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
              <li>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postal}</li>
              <li>Mon – Sat 9:30 – 7<br />Sun 10 – 5</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Ventura, California</span>
        </div>
      </div>
    </footer>
  );
}
