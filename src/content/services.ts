export type Service = {
  slug: string;
  num: string;
  name: string;
  time: string;
  img: string;
  alt: string;
  text: string;
};

/** 6 dịch vụ chính theo brief. Số La Mã là thứ tự trên menu. */
export const services: Service[] = [
  {
    slug: 'manicure',
    num: 'I',
    name: 'Manicure',
    time: '30 – 60 min',
    img: '/images/gallery/nail-06.jpg',
    alt: 'Iridescent pink almond nails with tiny red hearts',
    text: 'Classic, gel and dip powder. Cuticle care, precise shaping and a finish that lasts for weeks.',
  },
  {
    slug: 'pedicure',
    num: 'II',
    name: 'Pedicure',
    time: '45 – 75 min',
    img: '/images/gallery/nail-13.jpg',
    alt: 'Pedicure with black and white nail art in the spa chair',
    text: 'Warm soak, exfoliation, callus care and a massage you will want to stretch out.',
  },
  {
    slug: 'nail-art',
    num: 'III',
    name: 'Nail Art',
    time: 'By design',
    img: '/images/gallery/nail-04.jpg',
    alt: 'Pink stiletto nails with hand-sculpted flowers and gold rings',
    text: 'Chrome, aura ombré, French, 3D florals and hand-painted details. Bring a photo or trust our artists.',
  },
  {
    slug: 'facial',
    num: 'IV',
    name: 'Facial',
    time: '45 – 60 min',
    img: '/images/gallery/nail-08.jpg',
    alt: 'Holographic nails catching the sunlight',
    text: 'Deep cleansing and hydration tailored to your skin, finished with a soothing massage and SPF.',
  },
  {
    slug: 'waxing',
    num: 'V',
    name: 'Waxing',
    time: '10 – 45 min',
    img: '/images/gallery/nail-10.jpg',
    alt: 'Clean black French tips on almond nails',
    text: 'Brow, lip, face and body. Gentle wax, careful hands, calming aftercare.',
  },
  {
    slug: 'eyelashes',
    num: 'VI',
    name: 'Eyelashes',
    time: '60 – 120 min',
    img: '/images/gallery/nail-12.jpg',
    alt: 'Pink aura ombré nails',
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
