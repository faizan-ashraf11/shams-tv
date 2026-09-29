import { today, programs, type Slot } from './content';
import { toMin } from './erbil';

const blurbs: Record<string, string> = Object.fromEntries(programs.map((p) => [p.title, p.blurb]));
export const overnight: Slot = { time: '23:00', end: '06:00', title: 'Shams Overnight', kind: 'Rolling news' };

export function describe(s: Slot) {
  return blurbs[s.title] ?? (s.kind === 'News'
    ? 'The latest from Kurdistan, Iraq and the world — live from our Erbil newsroom.'
    : 'Live now on Shams TV.');
}

/** What's on at `minutes` past midnight (Erbil), what's next, and how far through it we are. */
export function onAir(minutes: number | null) {
  const idx = minutes === null
    ? today.findIndex((s) => s.live)
    : today.findIndex((s) => minutes >= toMin(s.time) && minutes < toMin(s.end));
  const current = idx >= 0 ? today[idx] : overnight;

  let progress = 42;
  if (minutes !== null) {
    let span = toMin(current.end) - toMin(current.time); if (span <= 0) span += 1440;
    let done = minutes - toMin(current.time); if (done < 0) done += 1440;
    progress = Math.min(100, (done / span) * 100);
  }

  const nextIdx = idx >= 0 ? idx + 1 : today.findIndex((s) => minutes !== null && toMin(s.time) > minutes);
  const next = (nextIdx >= 0 ? today.slice(nextIdx) : today).slice(0, 2);
  return { idx, current, progress, next };
}
