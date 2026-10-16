'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

/**
 * Năm hiện tại cho dòng bản quyền. Đặt ở client để trang vẫn prerender tĩnh
 * (Cache Components không cho đọc Date trong Server Component khi prerender).
 */
export function Year() {
  const year = useSyncExternalStore(subscribe, getYear, () => 2026);
  return <>{year}</>;
}
