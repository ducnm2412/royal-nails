/**
 * Thông tin doanh nghiệp — nơi DUY NHẤT cần sửa khi khách gửi dữ liệu thật.
 * Các mục đánh dấu TODO đang là placeholder chờ khách xác nhận.
 */
export const site = {
  name: 'Royal Nail Store',
  legalName: 'Royal Nails & Spa',
  tagline: 'Nail & Beauty Atelier · Ventura, California',
  description:
    'Royal Nail Store in Ventura, CA. Manicure, pedicure, nail art, facials, waxing and eyelash extensions in one elegant studio. Book your appointment today.',
  url: 'https://www.royalnailstore.com', // TODO: domain thật (canonical, OG, JSON-LD)

  phoneDisplay: '(805) 555-0100', // TODO: số điện thoại thật
  phoneHref: 'tel:+18055550100', // TODO: định dạng E.164
  email: 'hello@royalnailstore.com', // TODO

  address: {
    street: '2855 Johnson Drive, Suite V',
    city: 'Ventura',
    region: 'CA',
    postal: '93003',
    country: 'US',
  },
  geo: { lat: 34.2592, lng: -119.2223 }, // Johnson Dr & Ventura Blvd (ước tính)

  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Royal+Nails+%26+Spa%2C+2855+Johnson+Dr+Suite+V%2C+Ventura%2C+CA+93003',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Royal+Nails+%26+Spa%2C+2855+Johnson+Dr+Suite+V%2C+Ventura%2C+CA+93003&output=embed',

  hours: [
    {
      label: 'Mon – Sat',
      value: '9:30 am – 7:00 pm',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:00',
    },
    { label: 'Sunday', value: '10:00 am – 5:00 pm', days: ['Sunday'], opens: '10:00', closes: '17:00' },
  ],
  hoursShort: 'Mon – Sat 9:30am – 7pm · Sun 10am – 5pm',

  social: {
    facebook: 'https://www.facebook.com/', // TODO: Facebook Page
    instagram: 'https://www.instagram.com/', // TODO
    tiktok: 'https://www.tiktok.com/', // TODO
    yelp: 'https://www.yelp.com/', // TODO
  },

  serviceArea: ['Ventura', 'Oxnard', 'Camarillo', 'Ojai', 'Santa Paula'],
  priceRange: '$$',
} as const;

export type Site = typeof site;
