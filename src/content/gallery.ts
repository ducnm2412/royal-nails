export type GalleryCategory = 'nail-art' | 'french' | 'chrome-aura' | 'short-natural';

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
  { key: 'chrome-aura', label: 'Chrome & Aura' },
  { key: 'short-natural', label: 'Short & Natural' },
];

/** Toàn bộ ảnh trong public/images/gallery, kích thước thật để masonry không nhảy layout. */
export const gallery: GalleryItem[] = [
  { img: '/images/gallery/mani-09.jpg', alt: 'Cherry blossom branches on sheer pink nails', caption: 'Cherry Blossom', cat: 'nail-art', w: 736, h: 1118 },
  { img: '/images/gallery/mani-07.jpg', alt: 'Pearl French tips with 3D white flowers', caption: 'Pearl Blossom French', cat: 'french', w: 736, h: 1104 },
  { img: '/images/gallery/mani-04.jpg', alt: 'Dusty pink nails with daisies, hearts and pearls', caption: 'Daisy Hearts', cat: 'short-natural', w: 933, h: 1400 },
  { img: '/images/gallery/mani-01.jpg', alt: 'Nude almond nails with delicate pink and white blossoms', caption: 'Blossom Nude', cat: 'nail-art', w: 736, h: 939 },
  { img: '/images/gallery/nail-03.jpg', alt: 'Pink stiletto nails with 3D flowers', caption: '3D Blossom', cat: 'nail-art', w: 1600, h: 1600 },
  { img: '/images/gallery/mani-02.jpg', alt: 'Sheer French tips with tiny white dots', caption: 'Dotted French', cat: 'french', w: 736, h: 960 },
  { img: '/images/gallery/mani-05.jpg', alt: 'Mauve almond nails with wildflower accents', caption: 'Wildflower Mauve', cat: 'short-natural', w: 736, h: 1104 },
  { img: '/images/gallery/mani-08.jpg', alt: 'French tips with gold lines, pearls and petals', caption: 'Gilded French', cat: 'french', w: 736, h: 1104 },
  { img: '/images/gallery/nail-06.jpg', alt: 'Iridescent pink almond nails with tiny red hearts', caption: 'Aura Hearts', cat: 'chrome-aura', w: 1600, h: 1600 },
  { img: '/images/gallery/mani-03.jpg', alt: 'Pink to white ombré with sakura accent nails', caption: 'Sakura Ombré', cat: 'nail-art', w: 735, h: 919 },
  { img: '/images/gallery/mani-10.jpg', alt: 'Blush nails with hand-painted bow French tips', caption: 'Bow French', cat: 'french', w: 1050, h: 1400 },
  { img: '/images/gallery/nail-12.jpg', alt: 'Pink aura ombré nails', caption: 'Pink Aura', cat: 'chrome-aura', w: 1344, h: 1728 },
  { img: '/images/gallery/mani-06.jpg', alt: 'Rose pink nails with cream daisies and gold studs', caption: 'Rose Daisy', cat: 'nail-art', w: 736, h: 1104 },
  { img: '/images/gallery/nail-10.jpg', alt: 'Black French tip almond nails', caption: 'Black French', cat: 'french', w: 1344, h: 1728 },
  { img: '/images/gallery/mani-11.jpg', alt: 'Milky pink nails with white florals and gold flakes', caption: 'Milky Floral', cat: 'short-natural', w: 736, h: 1104 },
  { img: '/images/gallery/nail-04.jpg', alt: 'Pink stiletto nails with hand-sculpted flowers and gold rings', caption: 'Sculpted Petals', cat: 'nail-art', w: 1600, h: 1600 },
  { img: '/images/gallery/nail-08.jpg', alt: 'Holographic nails catching the sunlight', caption: 'Holo Glow', cat: 'chrome-aura', w: 1840, h: 1344 },
];
