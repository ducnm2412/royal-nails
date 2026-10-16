import { Italiana, Cormorant_Garamond, Figtree, Pinyon_Script } from 'next/font/google';
import { localBusinessJsonLd } from '@/config/seo';
import { LotusSymbol } from '@/components/ui/Lotus';
import { Lightbox } from '@/components/ui/Lightbox';
import { HeaderByRoute } from '@/components/layout/HeaderByRoute';
import { Footer } from '@/components/layout/Footer';
import { MobileCallBar } from '@/components/layout/MobileCallBar';
import { Analytics } from '@/components/analytics/Analytics';
import { PageMotion } from '@/components/motion/PageMotion';
import './globals.css';

export { metadata, viewport } from '@/config/seo';

const italiana = Italiana({ weight: '400', subsets: ['latin'], variable: '--font-italiana', display: 'swap' });
const cormorant = Cormorant_Garamond({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});
const figtree = Figtree({ weight: ['300', '400', '500'], subsets: ['latin'], variable: '--font-figtree', display: 'swap' });
const pinyon = Pinyon_Script({ weight: '400', subsets: ['latin'], variable: '--font-pinyon', display: 'swap' });

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${italiana.variable} ${cormorant.variable} ${figtree.variable} ${pinyon.variable}`}>
      <body>
        <LotusSymbol />
        <HeaderByRoute />
        <main id="top">{children}</main>
        <Footer />
        <MobileCallBar />
        <Lightbox />
        <PageMotion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }}
        />
        <Analytics />
      </body>
    </html>
  );
}
