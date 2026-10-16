export type LookbookPhoto = { kind: 'photo'; cls: string; img: string; alt: string; caption?: string };
export type LookbookQuote = { kind: 'quote'; cls: string; quote: string; by: string };
export type LookbookItem = LookbookPhoto | LookbookQuote;

/** `cls` ánh xạ sang ô trong lưới bento (xem styles/sections.css). */
export const lookbook: LookbookItem[] = [
  { kind: 'photo', cls: 'b1', img: '/images/gallery/nail-02.jpg', alt: 'Navy and gold celestial nails', caption: 'Celestial' },
  { kind: 'photo', cls: 'b2', img: '/images/gallery/nail-07.jpg', alt: 'Blue striped nails with black stars', caption: 'Starry Stripes' },
  { kind: 'quote', cls: 'b3', quote: '“A manicure should feel like a small ceremony.”', by: 'Royal house philosophy' },
  { kind: 'photo', cls: 'b4', img: '/images/gallery/nail-05.jpg', alt: 'Silver chrome nails with crystals', caption: 'Chrome & Crystal' },
  { kind: 'photo', cls: 'b5', img: '/images/gallery/nail-14.jpg', alt: 'Sheer pink nails with white swirls' },
  { kind: 'photo', cls: 'b6', img: '/images/gallery/nail-16.jpg', alt: 'Mixed purple and chrome stiletto nails' },
  { kind: 'photo', cls: 'b7', img: '/images/gallery/nail-09.jpg', alt: 'French tips with wildflower art', caption: 'Wildflower French' },
  { kind: 'photo', cls: 'b8', img: '/images/gallery/nail-03.jpg', alt: 'Pink stiletto nails with 3D flowers', caption: '3D Blossom' },
  { kind: 'photo', cls: 'b9', img: '/images/gallery/nail-11.jpg', alt: 'Nude nails with green evil eye art', caption: 'Evil Eye' },
  { kind: 'photo', cls: 'b10', img: '/images/gallery/nail-15.jpg', alt: 'Brown and copper nails with leopard accent' },
  { kind: 'photo', cls: 'b11', img: '/images/gallery/nail-06.jpg', alt: 'Iridescent nails with hearts' },
];
