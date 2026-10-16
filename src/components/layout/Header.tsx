'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, BOOK_PATH } from '@/content/navigation';
import { services } from '@/content/services';
import { site } from '@/config/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  // Khoá cuộn khi mở; menu tự đóng khi đổi trang nhờ key={pathname} ở layout
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Royal Nail Store, home">
          Royal
        </Link>

        <nav className="links" aria-label="Main">
          {navLinks.map((l) =>
            l.href === '/services' ? (
              <div className="has-menu" key={l.href}>
                <Link href={l.href} aria-current={isActive(l.href) ? 'page' : undefined} aria-haspopup="true">
                  {l.label}
                  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
                </Link>
                {/* Dropdown: 6 dịch vụ kèm ảnh nhỏ */}
                <div className="mega" role="menu">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services#${s.slug}`} role="menuitem" className="mega-item">
                      <span className="thumb">
                        <Image src={s.img} alt="" width={56} height={56} style={{ objectPosition: s.pos }} />
                      </span>
                      <span className="meta">
                        <strong>{s.name}</strong>
                        <small>{s.time}</small>
                      </span>
                    </Link>
                  ))}
                  <Link href="/services" className="mega-all">
                    Full menu &amp; prices
                  </Link>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="cta">
          <Link className="btn solid" href={BOOK_PATH}>
            Book
          </Link>
          <button
            type="button"
            className={`burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menu điện thoại */}
      <div id="mobile-menu" className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l) =>
            l.href === '/services' ? (
              <div key={l.href} className="drawer-group">
                <div className="drawer-row">
                  <Link href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
                    {l.label}
                  </Link>
                  <button
                    type="button"
                    className={`drawer-toggle${mobileServices ? ' is-open' : ''}`}
                    aria-label={mobileServices ? 'Hide services' : 'Show services'}
                    aria-expanded={mobileServices}
                    onClick={() => setMobileServices((v) => !v)}
                  >
                    <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
                  </button>
                </div>
                <div className="drawer-sub" hidden={!mobileServices}>
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services#${s.slug}`} className="mega-item">
                      <span className="thumb">
                        <Image src={s.img} alt="" width={48} height={48} style={{ objectPosition: s.pos }} />
                      </span>
                      <span className="meta">
                        <strong>{s.name}</strong>
                        <small>{s.time}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <div className="drawer-foot">
          <Link className="btn solid" href={BOOK_PATH}>
            Book an appointment
          </Link>
          <a className="btn" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
          <small>{site.hoursShort}</small>
        </div>
      </div>
    </header>
  );
}
