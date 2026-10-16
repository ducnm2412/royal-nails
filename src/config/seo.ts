import type { Metadata, Viewport } from 'next';
import { site } from './site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Nail Salon & Spa in Ventura, CA`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'nail salon Ventura',
    'manicure Ventura CA',
    'pedicure Ventura',
    'nail art Ventura',
    'facial Ventura',
    'waxing Ventura',
    'eyelash extensions Ventura',
    'Royal Nail Store',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Ventura, CA`,
    description: 'Manicure, pedicure, nail art, facials, waxing & lashes in one refined Ventura studio.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#120A0F',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/** Schema.org NailSalon — giúp Google hiển thị rich result (giờ mở cửa, địa chỉ, SĐT). */
export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  '@id': `${site.url}/#business`,
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref.replace('tel:', ''),
  email: site.email,
  image: `${site.url}/images/brand/neon-sign.jpg`,
  logo: `${site.url}/images/brand/logo-lotus.png`,
  priceRange: site.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapsUrl,
  sameAs: Object.values(site.social),
  areaServed: site.serviceArea.map((name) => ({ '@type': 'City', name })),
  openingHoursSpecification: site.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  potentialAction: {
    '@type': 'ReserveAction',
    target: `${site.url}/#book`,
    name: 'Request an appointment',
  },
};
