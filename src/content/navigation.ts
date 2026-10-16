/** Dải ảnh xòe quạt dưới hero. Kích thước thật của file để tránh layout shift. */
export const heroStrip = [
  { src: '/images/gallery/mani-06.jpg', alt: 'Rose pink nails with cream daisies', w: 736, h: 1104 },
  { src: '/images/gallery/mani-02.jpg', alt: 'Sheer French tips with white dots', w: 736, h: 960 },
  { src: '/images/gallery/mani-09.jpg', alt: 'Cherry blossom branches on sheer pink nails', w: 736, h: 1118 },
  { src: '/images/gallery/mani-08.jpg', alt: 'French tips with gold lines and pearls', w: 736, h: 1104 },
  { src: '/images/gallery/mani-04.jpg', alt: 'Dusty pink nails with daisies and hearts', w: 933, h: 1400 },
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
