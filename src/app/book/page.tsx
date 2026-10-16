import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHead } from '@/components/ui/PageHead';
import { Booking } from '@/components/sections/Booking';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Request an appointment at Royal Nail Store in Ventura. We confirm by text or call during business hours.',
  alternates: { canonical: '/book' },
};

/** Đọc ?service= để chọn sẵn dịch vụ. Tách ra để phần còn lại của trang vẫn prerender tĩnh. */
async function PreselectedBooking({ searchParams }: { searchParams: PageProps<'/book'>['searchParams'] }) {
  const { service } = await searchParams;
  return <Booking preselect={typeof service === 'string' ? service : undefined} />;
}

export default function BookPage({ searchParams }: PageProps<'/book'>) {
  return (
    <>
      <PageHead
        kicker="Reservations"
        title="Book an"
        italic="appointment."
        text="Tell us what you would like and when. We confirm by text or call during business hours; for same-day visits, calling is fastest."
      />
      <Suspense fallback={<Booking />}>
        <PreselectedBooking searchParams={searchParams} />
      </Suspense>
    </>
  );
}
