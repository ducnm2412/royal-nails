'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';

/**
 * Hiệu ứng cuộn dùng chung cho mọi trang (gsap-scrolltrigger):
 *  - Header tự ẩn khi cuộn xuống, hiện lại khi cuộn lên (ScrollTrigger.create + direction)
 *  - Nền đầu trang con và CTA band trôi parallax (scrub)
 *  - Ảnh có [data-parallax] trôi chậm hơn nội dung
 *  - Thanh mục dịch vụ (.sub-nav) tự tô sáng mục đang xem (toggleClass)
 * Chạy lại mỗi khi đổi route; tôn trọng prefers-reduced-motion.
 */
export function PageMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const nav = document.querySelector<HTMLElement>('.nav');

        // 1. Header ẩn/hiện theo hướng cuộn
        if (nav) {
          ScrollTrigger.create({
            start: 160,
            end: 'max',
            onUpdate: (self) => {
              const hide = self.direction === 1 && self.scroll() > 160;
              nav.classList.toggle('is-hidden', hide);
            },
            onLeaveBack: () => nav.classList.remove('is-hidden'),
          });
        }

        // 2. Parallax nền đầu trang con
        gsap.utils.toArray<HTMLElement>('.page-head').forEach((head) => {
          const bg = head.querySelector('.page-head-bg');
          const copy = head.querySelector('.wrap');
          if (!bg) return;
          gsap.to(bg, { yPercent: 18, ease: 'none', scrollTrigger: { trigger: head, start: 'top top', end: 'bottom top', scrub: true } });
          if (copy) gsap.to(copy, { yPercent: 12, autoAlpha: 0.35, ease: 'none', scrollTrigger: { trigger: head, start: 'top top', end: 'bottom top', scrub: true } });
        });

        // 3. Ảnh parallax
        gsap.utils.toArray<HTMLElement>('[data-parallax] img').forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            { yPercent: 6, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
          );
        });

        // 4. Nền CTA band
        gsap.utils.toArray<HTMLElement>('.cta-band .bg').forEach((bg) => {
          gsap.to(bg, { yPercent: 14, ease: 'none', scrollTrigger: { trigger: bg.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
        });

        // 5. Sub-nav highlight theo section đang xem
        const subLinks = gsap.utils.toArray<HTMLAnchorElement>('.sub-nav a');
        subLinks.forEach((a) => {
          const id = a.getAttribute('href')?.slice(1);
          const target = id && document.getElementById(id);
          if (!target) return;
          ScrollTrigger.create({
            trigger: target,
            start: 'top 45%',
            end: 'bottom 45%',
            toggleClass: { targets: a, className: 'is-active' },
          });
        });
      });

      // Dàn lại layout sau khi ảnh tải xong
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh);
      return () => {
        window.removeEventListener('load', refresh);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  // Đổi trang: cuộn về đầu và bảo đảm header hiện
  useEffect(() => {
    document.querySelector('.nav')?.classList.remove('is-hidden');
  }, [pathname]);

  return null;
}
