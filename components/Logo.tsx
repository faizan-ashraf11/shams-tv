import Link from 'next/link';

// The Shams mark: a rising sun cut by broadcast lines — sunrise + signal in one glyph.
export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Shams TV — home">
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="logo-sun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFC24D" />
            <stop offset="1" stopColor="#F08C00" />
          </linearGradient>
          <mask id="logo-cut">
            <rect width="40" height="40" fill="#fff" />
            <rect y="23" width="40" height="2.6" fill="#000" />
            <rect y="28.8" width="40" height="2.6" fill="#000" />
            <rect y="34.4" width="40" height="6" fill="#000" />
          </mask>
        </defs>
        <circle cx="20" cy="20" r="16" fill="url(#logo-sun)" mask="url(#logo-cut)" />
      </svg>
      <span className="logo__word">SHAMS<span>TV</span></span>
    </Link>
  );
}
