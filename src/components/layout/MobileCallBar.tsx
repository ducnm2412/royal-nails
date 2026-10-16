import Link from 'next/link';
import { site } from '@/config/site';
import { BOOK_PATH } from '@/content/navigation';

/** Thanh Gọi / Đặt lịch cố định, chỉ hiện trên điện thoại (xem styles/header.css). */
export function MobileCallBar() {
  return (
    <div className="callbar">
      <a className="btn" href={site.phoneHref}>
        Call
      </a>
      <Link className="btn solid" href={BOOK_PATH}>
        Book
      </Link>
    </div>
  );
}
