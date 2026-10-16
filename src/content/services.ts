export type Service = {
  slug: string;
  num: string;
  name: string;
  time: string;
  img: string;
  alt: string;
  text: string;
  /** Vị trí cắt ảnh (object-position), mặc định center. Dùng khi ảnh ngang đặt trong khung dọc. */
  pos?: string;
  /** Khung vuông thay vì 4:5 cho ảnh ngang. */
  square?: boolean;
};

/** 6 dịch vụ chính theo brief. Số La Mã là thứ tự trên menu. */
export const services: Service[] = [
  {
    slug: 'manicure',
    num: 'I',
    name: 'Manicure',
    time: '30 – 60 min',
    img: '/images/services/manicure.jpg',
    alt: 'Manicure: hands with soft pink polish beside nail lacquer and a candle',
    text: 'Classic, gel and dip powder. Cuticle care, precise shaping and a finish that lasts for weeks.',
  },
  {
    slug: 'pedicure',
    num: 'II',
    name: 'Pedicure',
    time: '45 – 75 min',
    img: '/images/services/pedicure.jpg',
    alt: 'Pedicure: feet resting in a flower bath with pink polish',
    text: 'Warm soak, exfoliation, callus care and a massage you will want to stretch out.',
  },
  {
    slug: 'nail-art',
    num: 'III',
    name: 'Nail Art',
    time: 'By design',
    img: '/images/services/nail-art.jpg',
    alt: 'Nail art: long pink nails with floral details',
    text: 'Chrome, aura ombré, French, 3D florals and hand-painted details. Bring a photo or trust our artists.',
  },
  {
    slug: 'facial',
    num: 'IV',
    name: 'Facial',
    time: '45 – 60 min',
    img: '/images/services/facial.jpg',
    alt: 'Facial: client relaxing with a hydrating mask',
    text: 'Deep cleansing and hydration tailored to your skin, finished with a soothing massage and SPF.',
  },
  {
    slug: 'waxing',
    num: 'V',
    name: 'Waxing',
    time: '10 – 45 min',
    img: '/images/services/waxing.jpg',
    alt: 'Waxing: smooth leg with a wax strip and warm pink wax',
    text: 'Brow, lip, face and body. Gentle wax, careful hands, calming aftercare.',
  },
  {
    slug: 'eyelashes',
    num: 'VI',
    name: 'Eyelashes',
    time: '60 – 120 min',
    img: '/images/services/eyelashes.jpg',
    alt: 'Eyelashes: close-up of long, natural lash extensions',
    text: 'Classic, hybrid and volume extensions, plus lifts and tints for a wide-awake, effortless look.',
  },
];

/** Lựa chọn dịch vụ trong form đặt lịch. */
export const bookingServiceOptions = [
  'Manicure',
  'Pedicure',
  'Manicure + Pedicure',
  'Nail Art',
  'Facial',
  'Waxing',
  'Eyelash Extensions',
  'Not sure yet',
];

export type PriceItem = { name: string; time: string; price: string };
export type ServiceDetail = Service & { intro: string; items: PriceItem[] };

/**
 * Menu chi tiết cho trang /services.
 * TODO: giá và thời lượng là tạm, cần khách xác nhận trước khi lên production.
 */
export const serviceDetails: ServiceDetail[] = [
  {
    ...services[0],
    intro: 'Clean, precise and long-lasting. Every manicure includes shaping, cuticle care, a hand massage and your choice of finish.',
    items: [
      { name: 'Classic Manicure', time: '30 min', price: '$25' },
      { name: 'Gel Manicure', time: '45 min', price: '$40' },
      { name: 'Dip Powder', time: '60 min', price: '$50' },
      { name: 'Gel Extensions (full set)', time: '75 min', price: '$70+' },
      { name: 'Polish Change', time: '15 min', price: '$15' },
    ],
  },
  {
    ...services[1],
    intro: 'A warm soak, exfoliation, callus care and a massage, in a chair you will not want to leave. Fresh liner in every bowl.',
    items: [
      { name: 'Classic Pedicure', time: '45 min', price: '$35' },
      { name: 'Gel Pedicure', time: '60 min', price: '$50' },
      { name: 'Royal Deluxe Pedicure', time: '75 min', price: '$65' },
      { name: 'Hot Stone Add-on', time: '+15 min', price: '$10' },
    ],
  },
  {
    ...services[2],
    intro: 'Chrome, aura ombré, French variations, 3D florals, stars and hand-painted details. Bring a photo or let our artists design for you.',
    items: [
      { name: 'French / Reverse French', time: '+15 min', price: '$10+' },
      { name: 'Chrome / Cat-eye', time: '+15 min', price: '$15+' },
      { name: 'Aura Ombré', time: '+20 min', price: '$15+' },
      { name: 'Hand-painted Art (per nail)', time: 'varies', price: '$5+' },
      { name: '3D Flowers & Charms (per nail)', time: 'varies', price: '$8+' },
    ],
  },
  {
    ...services[3],
    intro: 'Deep cleansing and hydration tailored to your skin type, finished with a soothing massage and SPF.',
    items: [
      { name: 'Express Glow Facial', time: '30 min', price: '$55' },
      { name: 'Signature Hydrating Facial', time: '60 min', price: '$95' },
      { name: 'Deep Cleansing Facial', time: '60 min', price: '$95' },
    ],
  },
  {
    ...services[4],
    intro: 'Gentle wax, careful hands and calming aftercare for smooth, comfortable results.',
    items: [
      { name: 'Eyebrows', time: '15 min', price: '$15' },
      { name: 'Lip or Chin', time: '10 min', price: '$10' },
      { name: 'Full Face', time: '30 min', price: '$40' },
      { name: 'Underarms', time: '15 min', price: '$20' },
      { name: 'Half / Full Leg', time: '30–45 min', price: '$40 / $65' },
    ],
  },
  {
    ...services[5],
    intro: 'Classic, hybrid and volume extensions, plus lifts and tints for a wide-awake, effortless look.',
    items: [
      { name: 'Classic Full Set', time: '90 min', price: '$120' },
      { name: 'Hybrid Full Set', time: '120 min', price: '$150' },
      { name: 'Volume Full Set', time: '120 min', price: '$180' },
      { name: 'Fill (2–3 weeks)', time: '60 min', price: '$65+' },
      { name: 'Lash Lift & Tint', time: '60 min', price: '$85' },
    ],
  },
];
