import Link from 'next/link';
import { Lotus } from './LotusSymbol';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#lookbook', label: 'Lookbook' },
  { href: '#ritual', label: 'The Ritual' },
  { href: '#visit', label: 'Visit' },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="#top">
          <Lotus />
          Royal
        </Link>
        <nav className="links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="cta">
          <a className="btn solid" href="#book">Book</a>
        </div>
      </div>
    </header>
  );
}
