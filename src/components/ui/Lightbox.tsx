'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Item = { src: string; alt: string; caption?: string };

/**
 * Lightbox dùng chung cho cả trang: bắt click trên mọi `img[data-lightbox]`
 * (event delegation), mở <dialog> với ảnh gốc, caption, prev/next, Esc.
 * Không cần truyền props; thêm `data-lightbox` vào <Image> là đủ.
 */
export function Lightbox() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [index, setIndex] = useState(-1);

  const collect = (): Item[] =>
    Array.from(document.querySelectorAll<HTMLImageElement>('img[data-lightbox]')).map((img) => ({
      src: img.dataset.lightbox || img.currentSrc || img.src,
      alt: img.alt,
      caption: img.dataset.caption,
    }));

  const open = useCallback((img: HTMLImageElement) => {
    const list = collect();
    const i = list.findIndex((it) => it.alt === img.alt && it.src === (img.dataset.lightbox || img.currentSrc || img.src));
    setItems(list);
    setIndex(i < 0 ? 0 : i);
  }, []);

  const close = useCallback(() => setIndex(-1), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (items.length ? (i + d + items.length) % items.length : i)),
    [items.length],
  );

  // Event delegation: click ảnh -> mở
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const img = (e.target as HTMLElement).closest?.('img[data-lightbox]') as HTMLImageElement | null;
      if (!img) return;
      e.preventDefault();
      open(img);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [open]);

  // Đồng bộ <dialog> với state
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (index >= 0 && !d.open) d.showModal();
    if (index < 0 && d.open) d.close();
  }, [index]);

  useEffect(() => {
    if (index < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, step]);

  const item = index >= 0 ? items[index] : null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Photo viewer"
      onClose={close}
      onClick={(e) => {
        // click ra ngoài khung ảnh thì đóng
        if (e.target === e.currentTarget) close();
      }}
    >
      {item && (
        <figure className="lb-figure">
          {/* eslint-disable-next-line @next/next/no-img-element -- ảnh gốc không qua optimizer để xem rõ nhất */}
          <img src={item.src} alt={item.alt} />
          <figcaption>
            <span>{item.caption ?? item.alt}</span>
            <small>
              {index + 1} / {items.length}
            </small>
          </figcaption>
        </figure>
      )}
      <button type="button" className="lb-btn lb-close" onClick={close} aria-label="Close">
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      {items.length > 1 && (
        <>
          <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous photo">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next photo">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}
    </dialog>
  );
}
