export type GalleryCategory = 'nail-art' | 'french' | 'chrome-aura' | 'short-natural' | 'pedicure';

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
  { key: 'pedicure', label: 'Pedicure' },
];

/** Toàn bộ ảnh trong public/images/gallery, kích thước thật để masonry không nhảy layout. */
export const gallery: GalleryItem[] = [
  { img: '/images/gallery/nail-03.jpg', alt: 'Pink stiletto nails with 3D flowers', caption: '3D Blossom', cat: 'nail-art', w: 1600, h: 1600 },
  { img: '/images/gallery/nail-06.jpg', alt: 'Iridescent pink almond nails with tiny red hearts', caption: 'Aura Hearts', cat: 'chrome-aura', w: 1600, h: 1600 },
  { img: '/images/gallery/nail-01.jpg', alt: 'Navy nails with gold stars', caption: 'Celestial Navy', cat: 'short-natural', w: 1280, h: 1920 },
  { img: '/images/gallery/nail-13.jpg', alt: 'Pedicure with black and white nail art in the spa chair', caption: 'Spa Pedicure', cat: 'pedicure', w: 1344, h: 1728 },
  { img: '/images/gallery/nail-05.jpg', alt: 'Silver chrome nails with crystals', caption: 'Chrome & Crystal', cat: 'chrome-aura', w: 1600, h: 1600 },
  { img: '/images/gallery/nail-10.jpg', alt: 'Black French tip almond nails', caption: 'Black French', cat: 'french', w: 1344, h: 1728 },
  { img: '/images/gallery/nail-04.jpg', alt: 'Pink stiletto nails with hand-sculpted flowers and gold rings', caption: 'Sculpted Petals', cat: 'nail-art', w: 1600, h: 1600 },
  { img: '/images/gallery/nail-02.jpg', alt: 'Navy and gold celestial nails', caption: 'Celestial', cat: 'short-natural', w: 1280, h: 1920 },
  { img: '/images/gallery/nail-07.jpg', alt: 'Blue striped nails with black stars', caption: 'Starry Stripes', cat: 'nail-art', w: 1840, h: 1344 },
  { img: '/images/gallery/nail-09.jpg', alt: 'French tips with wildflower art', caption: 'Wildflower French', cat: 'french', w: 1344, h: 1728 },
  { img: '/images/gallery/nail-11.jpg', alt: 'Nude nails with green evil eye art', caption: 'Evil Eye', cat: 'nail-art', w: 1344, h: 1728 },
  { img: '/images/gallery/nail-08.jpg', alt: 'Holographic nails catching the sunlight', caption: 'Holo Glow', cat: 'chrome-aura', w: 1840, h: 1344 },
  { img: '/images/gallery/nail-12.jpg', alt: 'Pink aura ombré nails', caption: 'Pink Aura', cat: 'chrome-aura', w: 1344, h: 1728 },
  { img: '/images/gallery/nail-14.jpg', alt: 'Sheer pink nails with white swirls', caption: 'Sheer Swirl', cat: 'short-natural', w: 1872, h: 1296 },
  { img: '/images/gallery/nail-15.jpg', alt: 'Brown and copper nails with leopard accent', caption: 'Copper Leopard', cat: 'short-natural', w: 1872, h: 1296 },
  { img: '/images/gallery/nail-16.jpg', alt: 'Mixed purple and chrome stiletto nails', caption: 'Violet Chrome', cat: 'chrome-aura', w: 1872, h: 1296 },
];
