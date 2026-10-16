# Royal Nails & Spa — Next.js landing page

Elegant one-page site for a nail & beauty studio in Ventura, CA.
Built with Next.js 14 (App Router), TypeScript, plain CSS and `next/font`.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify or any Node host. For static hosting, add `output: 'export'` in `next.config.mjs`
and swap `fill` images for fixed `width/height` (or set `images.unoptimized: true`).

## Before going live — replace placeholders

Everything client-specific lives in **`lib/site.ts`**:

- `phoneDisplay` / `phoneHref` — real phone number
- `address` and `mapsUrl` — real address and Google Maps link
- `hours` — opening hours (also update the `openingHoursSpecification` in `app/layout.tsx` and the text in `components/Hero.tsx` / `Footer.tsx`)
- `social` — Facebook, Instagram, TikTok, Yelp links
- `url` — production domain (used for canonical URL, Open Graph and JSON-LD)

## Booking form

`components/Booking.tsx` posts to `app/api/booking/route.ts`, which currently validates and logs the request.
Connect it to email (Resend / SendGrid), SMS (Twilio) or a booking tool such as Square Appointments, Booksy or Fresha.

## SEO / Ads

- Metadata, Open Graph and `NailSalon` JSON-LD are in `app/layout.tsx`.
- Add your Google Analytics / Meta Pixel / Google Ads tag in `app/layout.tsx` with `next/script` (`strategy="afterInteractive"`).
- Add `app/sitemap.ts` and `app/robots.ts` once the domain is final.

## Structure

```
app/            layout (fonts, metadata, JSON-LD), page, globals.css, api/booking
components/     Nav, Hero, Services, Lookbook, Ritual, Booking, Visit, Footer, CallBar, LotusSymbol
lib/site.ts     business details + content data
public/img/     photos (g01–g16) and logo
```
