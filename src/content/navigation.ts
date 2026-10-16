/** Dải ảnh xòe quạt dưới hero. Kích thước thật của file để tránh layout shift. */
export const heroStrip = [
  { src: '/images/gallery/nail-03.jpg', alt: 'Pink stiletto nails with 3D flowers', w: 1600, h: 1600 },
  { src: '/images/gallery/nail-05.jpg', alt: 'Silver chrome nails with crystals', w: 1600, h: 1600 },
  { src: '/images/gallery/nail-10.jpg', alt: 'Black French tip almond nails', w: 1344, h: 1728 },
  { src: '/images/gallery/nail-06.jpg', alt: 'Iridescent pink nails with red hearts', w: 1600, h: 1600 },
  { src: '/images/gallery/nail-01.jpg', alt: 'Navy nails with gold stars', w: 1280, h: 1920 },
];

/** Menu chính — dùng cho Header (active theo pathname) và Footer. */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

/** Giá trị cho tham số ?service= trên /book, khớp với bookingServiceOptions. */
export const BOOK_PATH = '/book';
