import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCallBar } from '@/components/layout/MobileCallBar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Lookbook } from '@/components/sections/Lookbook';
import { Ritual } from '@/components/sections/Ritual';
import { Booking } from '@/components/sections/Booking';
import { Visit } from '@/components/sections/Visit';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Lightbox } from '@/components/ui/Lightbox';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <ScrollReveal>
          <Services />
          <Lookbook />
          <Ritual />
          <Booking />
          <Visit />
        </ScrollReveal>
      </main>
      <Footer />
      <MobileCallBar />
      <Lightbox />
    </>
  );
}
