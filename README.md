# Royal Nail Store — Landing page

Trang landing một trang cho tiệm nail & spa tại Ventura, California.
Next.js 16 (App Router, Cache Components), TypeScript, Tailwind v4 + CSS thuần, `next/font`, GSAP (ScrollTrigger).

## Chạy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Cấu trúc thư mục

```
src/
  app/                    Routing & SEO files
    layout.tsx            fonts, metadata, JSON-LD NailSalon, analytics
    page.tsx              lắp ghép các section
    globals.css           import Tailwind + src/styles/*
    sitemap.ts, robots.ts, opengraph-image.jpg
    api/booking/route.ts  nhận form đặt lịch (POST)
  components/
    layout/               Header, Footer, MobileCallBar (thanh Gọi/Đặt lịch trên mobile)
    sections/             Hero, Services, Lookbook, Ritual, Booking, Visit
    motion/               HeroReveal (chuỗi neon khi tải), ScrollReveal (lộ dần khi cuộn)
    ui/                   Lotus (SVG), SocialLinks, Year
    analytics/            GA4 / Meta Pixel (bật qua .env)
  config/
    site.ts               THÔNG TIN DOANH NGHIỆP — sửa duy nhất ở đây
    seo.ts                metadata, viewport, JSON-LD
  content/                dữ liệu hiển thị: services, lookbook, ritual, navigation
  lib/gsap.ts             đăng ký plugin GSAP một lần
  styles/                 tokens, base, header, hero, sections, booking, footer
public/images/
  brand/                  neon-sign.jpg, logo-lotus.png
  gallery/                nail-01..16.jpg
template/                 bản mẫu & ảnh thô tham khảo (không build)
```

## Trước khi lên production — thay placeholder

Tất cả nằm trong `src/config/site.ts` (các dòng có `TODO`):

- `url` — domain thật (canonical, Open Graph, sitemap, JSON-LD)
- `phoneDisplay` / `phoneHref` — số điện thoại
- `address`, `geo`, `mapsUrl`, `mapsEmbedUrl` — địa chỉ & link Google Maps (Share > Embed a map)
- `hours` / `hoursShort` — giờ mở cửa
- `social` — Facebook, Instagram, TikTok, Yelp

## Form đặt lịch

`components/sections/Booking.tsx` gửi POST tới `app/api/booking/route.ts`. Hiện API chỉ kiểm tra và log.
Nối với email (Resend / SendGrid), SMS (Twilio) hoặc Square Appointments / Booksy / Fresha tại chỗ đánh dấu `TODO`.

## SEO & quảng cáo

- Metadata, Open Graph, `NailSalon` JSON-LD: `src/config/seo.ts`
- `sitemap.xml`, `robots.txt`, `opengraph-image.jpg` sinh tự động từ `src/app/`
- Mã theo dõi: copy `.env.example` → `.env.local`, điền `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`

## Chuyển động (GSAP)

- `HeroReveal`: một timeline khi tải trang (bảng hiệu neon bật sáng, dải ảnh xòe lên)
- `ScrollReveal`: `ScrollTrigger.batch` cho mọi phần tử `[data-reveal]`, parallax nhẹ ở ảnh Ritual
- Cả hai bọc trong `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`; không JS vẫn thấy đủ nội dung
