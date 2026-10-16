import { NextResponse } from 'next/server';

/**
 * Booking request endpoint.
 * Wire this to email (Resend, SendGrid), SMS (Twilio) or a CRM.
 * For now it validates the payload and logs it on the server.
 */
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !data.name || !data.phone || !data.service) {
    return NextResponse.json({ ok: false, error: 'Missing name, phone or service.' }, { status: 400 });
  }
  console.log('[booking request]', data);
  // TODO: send notification, e.g. await resend.emails.send({...})
  return NextResponse.json({ ok: true });
}
