import Link from 'next/link';

// The Shams mark: a rising sun cut by broadcast lines — sunrise + signal in one glyph.
export function SunMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="sun-mark">
      <defs>
        <linearGradient id="logo-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFC65A" />
          <stop offset=".55" stopColor="#FF8A1F" />
          <stop offset="1" stopColor="#F0560A" />
        </linearGradient>
        <mask id="logo-cut">
          <rect width="40" height="40" fill="#fff" />
          <rect y="22.5" width="40" height="2.4" fill="#000" />
          <rect y="28" width="40" height="2.4" fill="#000" />
          <rect y="33.4" width="40" height="7" fill="#000" />
        </mask>
      </defs>
      <circle cx="20" cy="21" r="16" fill="url(#logo-sun)" mask="url(#logo-cut)" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Shams TV — home">
      <SunMark />
      <span className="logo__word">Shams<span className="logo__tv">TV</span></span>
    </Link>
  );
}
