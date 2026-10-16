import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Lookbook } from '@/components/sections/Lookbook';
import { Ritual } from '@/components/sections/Ritual';
import { Booking } from '@/components/sections/Booking';
import { Visit } from '@/components/sections/Visit';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Services />
        <Lookbook />
        <Ritual />
        <Booking />
        <Visit />
      </ScrollReveal>
    </>
  );
}
