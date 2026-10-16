import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/** Favicon: hoa sen hồng trên nền rượu vang, cùng SVG với biểu tượng trên trang. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#7a1f38',
          borderRadius: 14,
        }}
      >
        <svg width="52" height="52" viewBox="0 0 64 64" fill="#f3d3d8">
          <path d="M32 10c-7 8-9 18-6 28 4-2 7-6 8-11 1 5 4 9 8 11 3-10 1-20-6-28z" />
          <path d="M20 22c-6 4-10 11-10 20 7-1 13-5 16-11-3-2-5-5-6-9z" opacity=".85" />
          <path d="M44 22c6 4 10 11 10 20-7-1-13-5-16-11 3-2 5-5 6-9z" opacity=".85" />
          <path d="M8 44c6-1 12 1 17 5-5 4-11 5-17 3 0-3 0-6 0-8z" opacity=".7" />
          <path d="M56 44c-6-1-12 1-17 5 5 4 11 5 17 3 0-3 0-6 0-8z" opacity=".7" />
          <path d="M18 50c9-4 19-4 28 0-4 4-9 6-14 6s-10-2-14-6z" />
        </svg>
      </div>
    ),
    size,
  );
}
