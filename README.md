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
    layout.tsx            fonts, metadata, JSON-LD, Header/Footer/Lightbox dùng chung
    page.tsx              trang chủ (lắp ghép các section)
    services/ gallery/ about/ contact/ book/   các trang con
    globals.css           import Tailwind + src/styles/*
    sitemap.ts, robots.ts, opengraph-image.jpg
    api/booking/route.ts  nhận form đặt lịch (POST)
  components/
    layout/               Header (dropdown Services + menu mobile), Footer, MobileCallBar
    sections/             Hero, Services, Lookbook, Ritual, Booking, Visit, CtaBand
    motion/               HeroReveal (neon khi tải), ScrollReveal (lộ dần), PageMotion (header ẩn/hiện, parallax, sub-nav)
    ui/                   Lotus (SVG), SocialLinks, Year, PageHead, Lightbox, FloralDeco
    analytics/            GA4 / Meta Pixel (bật qua .env)
  config/
    site.ts               THÔNG TIN DOANH NGHIỆP — sửa duy nhất ở đây
    seo.ts                metadata, viewport, JSON-LD
  content/                dữ liệu hiển thị: services (+ menu giá), gallery, lookbook, ritual, about, navigation
  lib/gsap.ts             đăng ký plugin GSAP một lần
  styles/                 tokens, base, header, hero, sections, booking, footer, lightbox, pages
public/images/
  brand/                  logo.png (header), logo-lotus.png (gốc), neon-sign.jpg
  backgrounds/            hoạ tiết nền + sakura-flower.png / watercolor-roses.png (hoa trang trí nổi, FloralDeco)
  gallery/                mani-*, pedi-*, lash-*, facial-*, wax-* (ảnh theo dịch vụ)
template/                 bản mẫu & ảnh thô tham khảo (không build)
```

## Trước khi lên production — thay placeholder

Tất cả nằm trong `src/config/site.ts` (các dòng có `TODO`):

- `url` — domain thật (canonical, Open Graph, sitemap, JSON-LD)
- `phoneDisplay` / `phoneHref` — số điện thoại
- `address`, `geo`, `mapsUrl`, `mapsEmbedUrl` — địa chỉ & link Google Maps (Share > Embed a map)
- `hours` / `hoursShort` — giờ mở cửa
- `social` — Facebook, Instagram, TikTok, Yelp
- Giá dịch vụ trong `src/content/services.ts` (`serviceDetails`) đang là tạm, cần khách xác nhận

## Các trang

| Route | Nội dung |
|---|---|
| `/` | Hero neon, dịch vụ, lookbook, quy trình, form đặt lịch, bản đồ |
| `/services` | Menu giá 6 dịch vụ, thanh nhảy mục, nút đặt lịch chọn sẵn dịch vụ |
| `/gallery` | Toàn bộ ảnh, bộ lọc theo kiểu (CSS-only), click mở lightbox |
| `/about` | Câu chuyện, 4 giá trị, quy trình, ảnh studio |
| `/contact` | Gọi/giờ mở cửa/mạng xã hội, bản đồ Google Maps |
| `/book` | Form đặt lịch, nhận `?service=` để chọn sẵn |

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
- `PageMotion` (layout, mọi trang): header tự ẩn khi cuộn xuống và hiện khi cuộn lên, parallax nền đầu trang / ảnh `[data-parallax]` / CTA band, thanh mục dịch vụ tự tô sáng mục đang xem
- Tất cả bọc trong `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`; không JS vẫn thấy đủ nội dung
