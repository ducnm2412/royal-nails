import type { Metadata } from 'next';
import Booking from '@/components/Booking';
import PageHead from '@/components/PageHead';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Request an appointment at Royal Nails & Spa in Ventura. We confirm by text or call during business hours.',
};

export default function BookPage() {
  return (
    <>
      <PageHead kicker="Reservations" title="Book an" italic="appointment." text="Tell us what you would like and when. We confirm by text or call during business hours; for same-day visits, calling is fastest." />
      <Booking />
    </>
  );
}
