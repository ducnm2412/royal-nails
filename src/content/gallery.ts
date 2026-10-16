export type GalleryCategory = 'nail-art' | 'french' | 'short-natural' | 'pedicure' | 'lashes' | 'facial' | 'waxing';

export type GalleryItem = {
  img: string;
  alt: string;
  caption: string;
  cat: GalleryCategory;
  w: number;
  h: number;
};

/** Bộ lọc trên trang /gallery (CSS-only, xem styles/pages.css). "all" luôn đứng đầu. */
export const galleryFilters: { key: 'all' | GalleryCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'nail-art', label: 'Nail Art' },
  { key: 'french', label: 'French' },
  { key: 'short-natural', label: 'Short & Natural' },
  { key: 'pedicure', label: 'Pedicure' },
  { key: 'lashes', label: 'Lashes' },
  { key: 'facial', label: 'Facial' },
  { key: 'waxing', label: 'Waxing' },
];

/** Toàn bộ ảnh trong public/images/gallery, kích thước thật để masonry không nhảy layout. */
export const gallery: GalleryItem[] = [
  { img: '/images/gallery/mani-09.jpg', alt: 'Cherry blossom branches on sheer pink nails', caption: 'Cherry Blossom', cat: 'nail-art', w: 736, h: 1118 },
  { img: '/images/gallery/lash-02.jpg', alt: 'Wispy hybrid lash extensions close-up', caption: 'Wispy Hybrid', cat: 'lashes', w: 1050, h: 1400 },
  { img: '/images/gallery/mani-07.jpg', alt: 'Pearl French tips with 3D white flowers', caption: 'Pearl Blossom French', cat: 'french', w: 736, h: 1104 },
  { img: '/images/gallery/facial-02.jpg', alt: 'Facial mask applied with a brush beside lotus flowers', caption: 'Signature Facial', cat: 'facial', w: 736, h: 1308 },
  { img: '/images/gallery/mani-16.jpg', alt: 'Pink marble nails with gold bows and sparkles', caption: 'Marble Bows', cat: 'nail-art', w: 1134, h: 1400 },
  { img: '/images/gallery/pedi-01.jpg', alt: 'Nude pedicure with brown polka dots and French tips', caption: 'Dotted Pedicure', cat: 'pedicure', w: 736, h: 1104 },
  { img: '/images/gallery/mani-04.jpg', alt: 'Dusty pink nails with daisies, hearts and pearls', caption: 'Daisy Hearts', cat: 'short-natural', w: 933, h: 1400 },
  { img: '/images/gallery/lash-01.jpg', alt: 'Full volume lash extensions with soft glam makeup', caption: 'Volume Lashes', cat: 'lashes', w: 1024, h: 1024 },
  { img: '/images/gallery/mani-13.jpg', alt: 'Blush nails with 3D hearts and daisies', caption: 'Sweetheart', cat: 'nail-art', w: 735, h: 919 },
  { img: '/images/gallery/wax-02.jpg', alt: 'Sugaring wax treatment on legs in a bright spa room', caption: 'Sugaring', cat: 'waxing', w: 1074, h: 1400 },
  { img: '/images/gallery/mani-01.jpg', alt: 'Nude almond nails with delicate pink and white blossoms', caption: 'Blossom Nude', cat: 'nail-art', w: 736, h: 939 },
  { img: '/images/gallery/facial-04.jpg', alt: 'Rose clay mask facial surrounded by pink roses', caption: 'Rose Clay Facial', cat: 'facial', w: 736, h: 1016 },
  { img: '/images/gallery/mani-14.jpg', alt: 'Sheer pink nails with a bunny, bows and tulips', caption: 'Bunny Garden', cat: 'nail-art', w: 736, h: 1307 },
  { img: '/images/gallery/lash-04.jpg', alt: 'Natural cat-eye lash extensions', caption: 'Natural Cat-Eye', cat: 'lashes', w: 736, h: 980 },
  { img: '/images/gallery/mani-02.jpg', alt: 'Sheer French tips with tiny white dots', caption: 'Dotted French', cat: 'french', w: 736, h: 960 },
  { img: '/images/gallery/facial-01.jpg', alt: 'Pink glow mask facial with cherry blossoms', caption: 'Pink Glow Mask', cat: 'facial', w: 736, h: 1104 },
  { img: '/images/gallery/mani-05.jpg', alt: 'Mauve almond nails with wildflower accents', caption: 'Wildflower Mauve', cat: 'short-natural', w: 736, h: 1104 },
  { img: '/images/gallery/mani-12.jpg', alt: 'Butter yellow dotted French tips with 3D flowers', caption: 'Butter Dots', cat: 'french', w: 933, h: 1400 },
  { img: '/images/gallery/lash-03.jpg', alt: 'Dense classic lash set on a green eye', caption: 'Classic Full Set', cat: 'lashes', w: 736, h: 1308 },
  { img: '/images/gallery/mani-08.jpg', alt: 'French tips with gold lines, pearls and petals', caption: 'Gilded French', cat: 'french', w: 736, h: 1104 },
  { img: '/images/gallery/wax-03.jpg', alt: 'Golden wax shaping an eyebrow', caption: 'Brow Waxing', cat: 'waxing', w: 736, h: 736 },
  { img: '/images/gallery/mani-03.jpg', alt: 'Pink to white ombré with sakura accent nails', caption: 'Sakura Ombré', cat: 'nail-art', w: 735, h: 919 },
  { img: '/images/gallery/facial-03.jpg', alt: 'Hydrating gel mask facial with tropical flowers', caption: 'Hydrating Facial', cat: 'facial', w: 736, h: 1005 },
  { img: '/images/gallery/mani-10.jpg', alt: 'Blush nails with hand-painted bow French tips', caption: 'Bow French', cat: 'french', w: 1050, h: 1400 },
  { img: '/images/gallery/lash-05.jpg', alt: 'Fluffy wispy lashes on a brown eye', caption: 'Fluffy Wispy', cat: 'lashes', w: 736, h: 953 },
  { img: '/images/gallery/mani-06.jpg', alt: 'Rose pink nails with cream daisies and gold studs', caption: 'Rose Daisy', cat: 'nail-art', w: 736, h: 1104 },
  { img: '/images/gallery/mani-15.jpg', alt: 'Cream and blush nails with plaid, hearts and tulips', caption: 'Cosy Plaid', cat: 'nail-art', w: 736, h: 1104 },
  { img: '/images/gallery/wax-01.jpg', alt: 'Pink wax applied to a leg with a spatula', caption: 'Leg Waxing', cat: 'waxing', w: 640, h: 640 },
  { img: '/images/gallery/mani-11.jpg', alt: 'Milky pink nails with white florals and gold flakes', caption: 'Milky Floral', cat: 'short-natural', w: 736, h: 1104 },
];
