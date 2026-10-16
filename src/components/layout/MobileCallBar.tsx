import { site } from '@/config/site';

/** Thanh Gọi / Đặt lịch cố định, chỉ hiện trên điện thoại (xem styles/header.css). */
export function MobileCallBar() {
  return (
    <div className="callbar">
      <a className="btn" href={site.phoneHref}>
        Call
      </a>
      <a className="btn solid" href="#book">
        Book
      </a>
    </div>
  );
}
