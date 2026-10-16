import { navLinks } from '@/content/navigation';

export function Header() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Royal Nail Store, back to top">
          Royal
        </a>
        <nav className="links" aria-label="Sections">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="cta">
          <a className="btn solid" href="#book">
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
