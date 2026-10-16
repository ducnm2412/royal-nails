'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';

/**
 * Lộ dần nội dung theo cuộn cho mọi phần tử có [data-reveal] bên trong.
 * Dùng ScrollTrigger.batch để các thẻ vào viewport cùng lúc được stagger chung.
 * Trạng thái ẩn đặt bằng JS nên không có JS / reduced-motion vẫn hiển thị đủ.
 */
export function ScrollReveal({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
        gsap.set(items, { autoAlpha: 0, y: 28 });
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', overwrite: true }),
        });

        // Ảnh phần Ritual trôi chậm hơn nội dung (parallax nhẹ)
        gsap.to('.ritual .ph img', {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: '.ritual', start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
