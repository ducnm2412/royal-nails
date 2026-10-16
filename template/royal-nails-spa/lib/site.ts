/**
 * Single place for business details. Replace the placeholders below
 * with the client's real information before going live.
 */
export const site = {
  name: 'Royal Nails & Spa',
  tagline: 'Nail & Beauty Atelier · Ventura, California',
  phoneDisplay: '(805) 555-0100',          // TODO: real phone number
  phoneHref: 'tel:+18055550100',           // TODO: real phone number (E.164)
  address: {
    street: '123 Main Street, Suite A',    // TODO: real street address
    city: 'Ventura',
    region: 'CA',
    postal: '93001',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Royal+Nails+%26+Spa+Ventura+CA', // TODO: real Google Maps link
  hours: [
    { label: 'Mon – Sat', value: '9:30 am – 7:00 pm' },
    { label: 'Sunday', value: '10:00 am – 5:00 pm' },
  ],
  social: {
    facebook: 'https://www.facebook.com/',   // TODO
    instagram: 'https://www.instagram.com/', // TODO
    tiktok: 'https://www.tiktok.com/',       // TODO
    yelp: 'https://www.yelp.com/',           // TODO
  },
  url: 'https://www.example.com',            // TODO: production domain (used for SEO metadata)
};

export const services = [
  { num: 'I',   name: 'Manicure',  time: '30 – 60 min',  img: '/img/g06.jpg', alt: 'Iridescent pink almond nails with tiny red hearts', text: 'Classic, gel and dip powder. Cuticle care, precise shaping and a finish that lasts for weeks.' },
  { num: 'II',  name: 'Pedicure',  time: '45 – 75 min',  img: '/img/g13.jpg', alt: 'Pedicure with black and white nail art in the spa chair', text: 'Warm soak, exfoliation, callus care and a massage you will want to stretch out.' },
  { num: 'III', name: 'Nail Art',  time: 'By design',    img: '/img/g04.jpg', alt: 'Pink stiletto nails with hand-sculpted flowers and gold rings', text: 'Chrome, aura ombré, French, 3D florals and hand-painted details. Bring a photo or trust our artists.' },
  { num: 'IV',  name: 'Facial',    time: '45 – 60 min',  img: '/img/g08.jpg', alt: 'Holographic nails catching the sunlight', text: 'Deep cleansing and hydration tailored to your skin, finished with a soothing massage and SPF.' },
  { num: 'V',   name: 'Waxing',    time: '10 – 45 min',  img: '/img/g10.jpg', alt: 'Clean black French tips on almond nails', text: 'Brow, lip, face and body. Gentle wax, careful hands, calming aftercare.' },
  { num: 'VI',  name: 'Eyelashes', time: '60 – 120 min', img: '/img/g12.jpg', alt: 'Pink aura ombré nails', text: 'Classic, hybrid and volume extensions, plus lifts and tints for a wide-awake, effortless look.' },
];

export const lookbook = [
  { cls: 'b1',  img: '/img/g02.jpg', alt: 'Navy and gold celestial nails', caption: 'Celestial', w: 419, h: 628 },
  { cls: 'b2',  img: '/img/g07.jpg', alt: 'Blue striped nails with black stars', caption: 'Starry Stripes', w: 419, h: 314 },
  { cls: 'b3',  quote: '“A manicure should feel like a small ceremony.”', by: 'Royal house philosophy' },
  { cls: 'b4',  img: '/img/g05.jpg', alt: 'Silver chrome nails with crystals', caption: 'Chrome & Crystal', w: 298, h: 298 },
  { cls: 'b5',  img: '/img/g14.jpg', alt: 'Sheer pink nails with white swirls', w: 218, h: 159 },
  { cls: 'b6',  img: '/img/g16.jpg', alt: 'Mixed purple and chrome stiletto nails', w: 218, h: 159 },
  { cls: 'b7',  img: '/img/g09.jpg', alt: 'French tips with wildflower art', caption: 'Wildflower French', w: 224, h: 298 },
  { cls: 'b8',  img: '/img/g03.jpg', alt: 'Pink stiletto nails with 3D flowers', caption: '3D Blossom', w: 408, h: 408 },
  { cls: 'b9',  img: '/img/g11.jpg', alt: 'Nude nails with green evil eye art', caption: 'Evil Eye', w: 224, h: 298 },
  { cls: 'b10', img: '/img/g15.jpg', alt: 'Brown and copper nails with leopard accent', w: 218, h: 159 },
  { cls: 'b11', img: '/img/g06.jpg', alt: 'Iridescent nails with hearts', w: 298, h: 298 },
] as const;

export const ritual = [
  { n: 1, title: 'Consult', text: 'We look at your hands, your lifestyle and your inspiration photos, then agree on shape, length and shade together.' },
  { n: 2, title: 'Prepare', text: 'Freshly sanitized tools for every guest and a new liner in every pedicure bowl. Cuticles and skin are cared for before any color.' },
  { n: 3, title: 'Create',  text: 'Our artists paint, sculpt and set each nail by hand, from a clean French line to layered 3D florals.' },
  { n: 4, title: 'Finish',  text: 'A long-wear top coat, a hand massage and aftercare advice so your set looks new for weeks.' },
];
