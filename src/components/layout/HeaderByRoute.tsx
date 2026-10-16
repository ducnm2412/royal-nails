'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';

/** Remount Header khi đổi route để menu mobile tự đóng, không cần setState trong effect. */
export function HeaderByRoute() {
  const pathname = usePathname();
  return <Header key={pathname} />;
}
