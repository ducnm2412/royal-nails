'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

/**
 * Chuỗi chuyển động DUY NHẤT khi tải trang: bảng hiệu neon "bật sáng",
 * rồi dải ảnh xòe lên như quạt. Dùng gsap.matchMedia để tôn trọng prefers-reduced-motion.
 */
export function HeroReveal({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.hero-bg', { autoAlpha: 0, scale: 1.06, duration: 1.4, ease: 'power2.out' })
          .from('.hero-copy .kicker', { autoAlpha: 0, y: 12, duration: 0.6 }, 0.3)
          // Logo neon bật sáng nhấp nháy như đèn ống
          .fromTo(
            '.hero-logo img',
            { autoAlpha: 0, filter: 'brightness(0.4)' },
            { keyframes: { autoAlpha: [0, 1, 0.35, 1, 0.7, 1], filter: ['brightness(.4)', 'brightness(1.3)', 'brightness(.8)', 'brightness(1.15)', 'brightness(1)'] }, duration: 1.1, ease: 'none' },
            0.45,
          )
          .from('.hero-lead, .hero-ctas, .hero-meta', { autoAlpha: 0, y: 18, duration: 0.7, stagger: 0.12 }, 1.0)
          .from('.hero-photo', { autoAlpha: 0, x: 60, rotation: 4, duration: 1, ease: 'power3.out' }, 0.6)
          .from('.petal', { autoAlpha: 0, scale: 0.4, duration: 0.8, stagger: 0.15, ease: 'back.out(1.6)', clearProps: 'transform' }, 1.2)
          .from('.hero-badge', { autoAlpha: 0, y: 20, duration: 0.6 }, 1.5)
          // Ảnh xòe lên từ dưới; clearProps trả transform về CSS để giữ góc nghiêng và hiệu ứng hover
          .from('.hero-strip img', { autoAlpha: 0, y: '+=80', duration: 0.9, stagger: { each: 0.08, from: 'center' }, ease: 'back.out(1.4)', clearProps: 'transform,opacity,visibility' }, 1.3);

        // Hào quang neon thở nhẹ sau khi bật
        gsap.to('.hero-logo img', { filter: 'brightness(1.1)', duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.4 });
      });
      return () => mm.revert();
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
