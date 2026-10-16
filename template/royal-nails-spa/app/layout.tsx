import type { Metadata } from 'next';
import { Italiana, Cormorant_Garamond, Figtree, Pinyon_Script } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const italiana = Italiana({ weight: '400', subsets: ['latin'], variable: '--font-italiana', display: 'swap' });
const cormorant = Cormorant_Garamond({ weight: ['400', '500'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-cormorant', display: 'swap' });
const figtree = Figtree({ weight: ['300', '400', '500'], subsets: ['latin'], variable: '--font-figtree', display: 'swap' });
const pinyon = Pinyon_Script({ weight: '400', subsets: ['latin'], variable: '--font-pinyon', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Ventura, CA`,
  description:
    'Royal Nails & Spa in Ventura, CA. An elegant atelier for manicures, pedicures, nail art, facials, waxing and lashes. Book your appointment.',
  keywords: ['nail salon Ventura', 'manicure Ventura', 'pedicure Ventura', 'nail art', 'facial', 'waxing', 'eyelash extensions', 'Royal Nails & Spa'],
  openGraph: {
    title: `${site.name} | Ventura`,
    description: 'Manicure, pedicure, nail art, facials, waxing & lashes in one refined Ventura studio.',
    images: ['/img/logo.jpg'],
    type: 'website',
  },
  alternates: { canonical: '/' },
};

export const viewport = { themeColor: '#120A0F', width: 'device-width', initialScale: 1, viewportFit: 'cover' as const };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  name: site.name,
  image: `${site.url}/img/logo.jpg`,
  telephone: site.phoneHref.replace('tel:', ''),
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '17:00' },
  ],
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${italiana.variable} ${cormorant.variable} ${figtree.variable} ${pinyon.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
