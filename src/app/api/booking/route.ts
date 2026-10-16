import { NextResponse } from 'next/server';

type BookingPayload = {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
  tech?: string;
  notes?: string;
};

/**
 * Nhận yêu cầu đặt lịch từ form.
 * Hiện tại: kiểm tra dữ liệu và ghi log server.
 * Khi lên production: gửi email (Resend / SendGrid), SMS (Twilio) hoặc đẩy vào CRM / Square Appointments.
 */
export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as BookingPayload | null;

  if (!data || !data.name?.trim() || !data.phone?.trim() || !data.service) {
    return NextResponse.json({ ok: false, error: 'Missing name, phone or service.' }, { status: 400 });
  }

  const phoneDigits = data.phone.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    return NextResponse.json({ ok: false, error: 'Phone number looks incomplete.' }, { status: 400 });
  }

  console.log('[booking request]', { ...data, receivedAt: new Date().toISOString() });
  // TODO: await sendBookingNotification(data)

  return NextResponse.json({ ok: true });
}
