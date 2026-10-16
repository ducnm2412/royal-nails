/** Dải ảnh xòe quạt dưới hero. Kích thước thật của file để tránh layout shift. */
export const heroStrip = [
  { src: '/images/gallery/mani-13.jpg', alt: 'Blush nails with 3D hearts and daisies', w: 735, h: 919 },
  { src: '/images/gallery/mani-16.jpg', alt: 'Pink marble nails with gold bows', w: 1134, h: 1400 },
  { src: '/images/gallery/mani-09.jpg', alt: 'Cherry blossom branches on sheer pink nails', w: 736, h: 1118 },
  { src: '/images/gallery/mani-08.jpg', alt: 'French tips with gold lines and pearls', w: 736, h: 1104 },
  { src: '/images/gallery/mani-15.jpg', alt: 'Cream and blush nails with plaid and tulips', w: 736, h: 1104 },
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
