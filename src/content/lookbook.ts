export type LookbookPhoto = { kind: 'photo'; cls: string; img: string; alt: string; caption?: string };
export type LookbookQuote = { kind: 'quote'; cls: string; quote: string; by: string };
export type LookbookItem = LookbookPhoto | LookbookQuote;

/** `cls` ánh xạ sang ô trong lưới bento (xem styles/sections.css). */
export const lookbook: LookbookItem[] = [
  { kind: 'photo', cls: 'b1', img: '/images/gallery/mani-09.jpg', alt: 'Cherry blossom branches on sheer pink nails', caption: 'Cherry Blossom' },
  { kind: 'photo', cls: 'b2', img: '/images/gallery/mani-08.jpg', alt: 'French tips with gold lines, pearls and petals', caption: 'Gilded French' },
  { kind: 'quote', cls: 'b3', quote: '“A manicure should feel like a small ceremony.”', by: 'Royal house philosophy' },
  { kind: 'photo', cls: 'b4', img: '/images/gallery/mani-05.jpg', alt: 'Mauve almond nails with wildflower accents', caption: 'Wildflower Mauve' },
  { kind: 'photo', cls: 'b5', img: '/images/gallery/mani-02.jpg', alt: 'Sheer French tips with tiny white dots' },
  { kind: 'photo', cls: 'b6', img: '/images/gallery/mani-11.jpg', alt: 'Milky pink nails with white florals' },
  { kind: 'photo', cls: 'b7', img: '/images/gallery/mani-10.jpg', alt: 'Blush nails with hand-painted bow French tips', caption: 'Bow French' },
  { kind: 'photo', cls: 'b8', img: '/images/gallery/mani-07.jpg', alt: 'Pearl French tips with 3D white flowers', caption: 'Pearl Blossom' },
  { kind: 'photo', cls: 'b9', img: '/images/gallery/nail-03.jpg', alt: 'Pink stiletto nails with 3D flowers', caption: '3D Blossom' },
  { kind: 'photo', cls: 'b10', img: '/images/gallery/mani-04.jpg', alt: 'Dusty pink nails with daisies and hearts' },
  { kind: 'photo', cls: 'b11', img: '/images/gallery/mani-06.jpg', alt: 'Rose pink nails with cream daisies' },
];
