import { site } from '@/config/site';

const icons = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4V14h2.8v8h3.3z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 3c.3 2.3 1.7 3.7 4 4v3c-1.5 0-2.9-.5-4-1.3V15a6 6 0 1 1-5-5.9v3.1a3 3 0 1 0 2 2.8V3h3z" />
    </svg>
  ),
  yelp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 3l1 9-2 1-5-6 6-4zm-7 8l6 2v2l-6 2v-6zm9 4l5 4-3 3-4-5 2-2zm0-3l6-3 1 4-7 1v-2z" />
    </svg>
  ),
};

const labels: Record<keyof typeof icons, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  yelp: 'Yelp',
};

/** Liên kết mạng xã hội — URL lấy từ config/site.ts */
export function SocialLinks() {
  return (
    <div className="social">
      {(Object.keys(icons) as (keyof typeof icons)[]).map((k) => (
        <a key={k} href={site.social[k]} aria-label={labels[k]} target="_blank" rel="noopener noreferrer">
          {icons[k]}
        </a>
      ))}
    </div>
  );
}
