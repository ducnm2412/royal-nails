import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Lookbook from '@/components/Lookbook';
import Ritual from '@/components/Ritual';
import Booking from '@/components/Booking';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import LotusSymbol from '@/components/LotusSymbol';

export default function Page() {
  return (
    <>
      <LotusSymbol />
      <Nav />
      <main id="top">
        <Hero />
        <Services />
        <Lookbook />
        <Ritual />
        <Booking />
        <Visit />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
