'use client';
// The Shams signature: a live arc showing the sun's position over Erbil.
import { useErbilNow } from './useErbilNow';
import { erbilSun, fmtMin } from '@/lib/sun';

export default function SunArc({ compact = false }: { compact?: boolean }) {
  const now = useErbilNow();
  const { rise, set } = erbilSun();
  const minutes = now?.minutes ?? 720;
  const day = minutes >= rise && minutes <= set;
  const t = day ? (minutes - rise) / (set - rise) : 0;
  const x = 60 - 52 * Math.cos(Math.PI * t);
  const y = 38 - 30 * Math.sin(Math.PI * t);
  const label = day ? `Sunset ${fmtMin(set)}` : `Sunrise ${fmtMin(rise)}`;

  return (
    <span className={`sun-arc${compact ? ' sun-arc--compact' : ''}${day ? '' : ' is-night'}`} aria-label={`Erbil — ${label}`}>
      <svg viewBox="0 0 120 44" aria-hidden="true">
        <defs>
          <linearGradient id="arc-g" x1="0" x2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity=".15" />
            <stop offset=".5" stopColor="currentColor" stopOpacity=".55" />
            <stop offset="1" stopColor="currentColor" stopOpacity=".15" />
          </linearGradient>
        </defs>
        <path d="M8 38 A52 30 0 0 1 112 38" fill="none" stroke="url(#arc-g)" strokeWidth="1.2" strokeDasharray="2 3" />
        <path d="M2 38 H118" stroke="currentColor" strokeOpacity=".25" strokeWidth="1" />
        {now && day && <circle cx={x} cy={y} r="9" fill="var(--sun-500)" opacity=".18" />}
        {now && (day
          ? <circle cx={x} cy={y} r="4.5" fill="var(--sun-400)" />
          : <circle cx="60" cy="42" r="3.5" fill="currentColor" opacity=".4" />)}
      </svg>
      {!compact && <span className="sun-arc__label">{label}</span>}
    </span>
  );
}
