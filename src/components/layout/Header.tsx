'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, BOOK_PATH } from '@/content/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Royal Nail Store, home">
          Royal
        </Link>
        <nav className="links" aria-label="Main">
          {navLinks.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} aria-current={active ? 'page' : undefined}>
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="cta">
          <Link className="btn solid" href={BOOK_PATH}>
            Book
          </Link>
        </div>
      </div>
    </header>
  );
}
