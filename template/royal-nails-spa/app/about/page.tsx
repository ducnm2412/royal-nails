import type { Metadata } from 'next';
import Image from 'next/image';
import PageHead from '@/components/PageHead';
import Ritual from '@/components/Ritual';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'About the Studio',
  description: 'The story and values behind Royal Nails & Spa, a calm, elegant nail and beauty atelier in Ventura, California.',
};

const values = [
  { title: 'One visit, head to toe', text: 'Nails, skin, brows and lashes in one studio, so a full session is one appointment instead of three across town.' },
  { title: 'Artists who love detail', text: 'From a clean French line to hand-sculpted 3D florals, our technicians treat every set like a small canvas.' },
  { title: 'Clean, calm, unhurried', text: 'Sanitized tools for every guest, fresh liners in every pedicure bowl, and time to actually relax.' },
  { title: 'Right here in Ventura', text: 'Easy parking, flexible hours and a team that remembers your favorite shade.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHead kicker="About" title="A small ceremony," italic="every time." text="Royal Nails & Spa is a Ventura atelier where beauty rituals are done slowly and well." />
      <section className="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="ph tall"><Image src="/img/logo.jpg" alt="Royal Nails & Spa neon sign with pink lotus" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
            <div className="story">
              <h2 className="display">Our story</h2>
              <p>Royal began with a simple idea: a nail appointment should feel like a pause in the day, not another errand. So we built a studio around comfort, cleanliness and craft, and filled it with artists who care about the last millimetre of a French line as much as the first.</p>
              <p>Today we offer manicures, pedicures, nail art, facials, waxing and lashes under one roof, so guests from Ventura, Oxnard, Camarillo, Ojai and Santa Paula can book a full afternoon of care in one place.</p>
              <p>The lotus in our logo is our promise: something soft and beautiful, grown with patience.</p>
            </div>
          </div>
          <div className="values">
            {values.map((v) => (
              <div className="value" key={v.title}>
                <span className="dot" />
                <div><h3>{v.title}</h3><p>{v.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Ritual />
      <section className="studio-strip">
        <div className="wrap">
          <figure><Image src="/img/g13.jpg" alt="Pedicure chair at the studio" width={224} height={298} /></figure>
          <figure><Image src="/img/g01.jpg" alt="Navy star nails on a blue towel" width={419} height={628} /></figure>
          <figure><Image src="/img/g08.jpg" alt="Holographic nails in sunlight" width={419} height={314} /></figure>
          <figure><Image src="/img/g03.jpg" alt="Pink stiletto nails with 3D flowers" width={408} height={408} /></figure>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
