import Link from 'next/link';
import { site } from '@/config/site';
import { services } from '@/content/services';
import { navLinks, BOOK_PATH } from '@/content/navigation';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Year } from '@/components/ui/Year';

export function Footer() {
  return (
    <footer className="bg-art">
      <div className="wrap">
        <div className="top">
          <div className="brand">
            <div className="big">Royal</div>
            <p className="blurb">
              Nails &amp; Spa in Ventura, California. Manicure, pedicure, nail art, facials, waxing and lashes.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href={BOOK_PATH}>Book</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
              </li>
              <li>{site.hoursShort}</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>
            © <Year /> {site.name}
          </span>
          <span>Ventura, California</span>
        </div>
      </div>
    </footer>
  );
}
