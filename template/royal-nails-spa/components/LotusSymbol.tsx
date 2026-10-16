/** Hidden SVG symbol reused by <Lotus/> via <use href="#lotus"/>. Render once per page. */
export default function LotusSymbol() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="lotus" viewBox="0 0 64 64">
        <g fill="currentColor">
          <path d="M32 10c-7 8-9 18-6 28 4-2 7-6 8-11 1 5 4 9 8 11 3-10 1-20-6-28z" opacity=".95" />
          <path d="M20 22c-6 4-10 11-10 20 7-1 13-5 16-11-3-2-5-5-6-9z" opacity=".8" />
          <path d="M44 22c6 4 10 11 10 20-7-1-13-5-16-11 3-2 5-5 6-9z" opacity=".8" />
          <path d="M8 44c6-1 12 1 17 5-5 4-11 5-17 3 0-3 0-6 0-8z" opacity=".65" />
          <path d="M56 44c-6-1-12 1-17 5 5 4 11 5 17 3 0-3 0-6 0-8z" opacity=".65" />
          <path d="M18 50c9-4 19-4 28 0-4 4-9 6-14 6s-10-2-14-6z" />
        </g>
      </symbol>
    </svg>
  );
}

export function Lotus({ className = 'lotus' }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href="#lotus" />
    </svg>
  );
}
