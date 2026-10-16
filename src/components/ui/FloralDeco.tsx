import Image from 'next/image';

type Variant = 'sakura' | 'roses';

const art: Record<Variant, { src: string; w: number; h: number }> = {
  sakura: { src: '/images/backgrounds/sakura-flower.png', w: 900, h: 900 },
  roses: { src: '/images/backgrounds/watercolor-roses.png', w: 900, h: 900 },
};

/**
 * Hoa trang trí nổi (PNG nền trong suốt, cắt từ ảnh khách gửi).
 * `pos` chọn góc; GSAP trong PageMotion làm trôi nhẹ theo cuộn qua [data-deco].
 */
export function FloralDeco({
  variant = 'sakura',
  pos = 'tr',
  size = 260,
  speed = 1,
}: {
  variant?: Variant;
  pos?: 'tl' | 'tr' | 'bl' | 'br';
  size?: number;
  speed?: number;
}) {
  const a = art[variant];
  return (
    <span className={`deco deco-${pos}`} style={{ width: size }} data-deco={speed} aria-hidden="true">
      <Image src={a.src} alt="" width={a.w} height={a.h} sizes={`${size}px`} />
    </span>
  );
}
