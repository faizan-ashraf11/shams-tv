'use client';
// "Today on Shams" as a true broadcast timeline: programmes are drawn to scale against an hour ruler,
// with a live "now" line. Reads in Erbil time or the viewer's own.
import { useEffect, useRef, useState } from 'react';
import TimeZoneToggle, { type Tz } from './TimeZoneToggle';
import SectionHead from './SectionHead';
import Icon from './Icon';
import { useErbilNow } from './useErbilNow';
import { useVideo } from './video/VideoProvider';
import { toLocalTime, toMin } from '@/lib/erbil';
import { fmtMin } from '@/lib/sun';
import { today, live } from '@/lib/content';

const START = toMin(today[0].time);
const END = toMin(today[today.length - 1].end);
const hours = Array.from({ length: (END - START) / 60 + 1 }, (_, i) => START + i * 60);

type Vars = React.CSSProperties & Record<`--${string}`, number>;

export default function TvGuide() {
  const now = useErbilNow();
  const { open } = useVideo();
  const [tz, setTz] = useState<Tz>('erbil');
  const track = useRef<HTMLDivElement>(null);
  const scrolled = useRef(false);
  const fmt = (t: string) => (tz === 'local' ? toLocalTime(t) : t);
  const nowIn = now && now.minutes >= START && now.minutes < END;

  // Open the guide with "now" a third of the way in, like a real EPG.
  useEffect(() => {
    if (!now || scrolled.current || !track.current) return;
    const line = track.current.querySelector<HTMLElement>('.epg__now, .is-live');
    if (line) track.current.scrollLeft = Math.max(0, line.offsetLeft - track.current.clientWidth * 0.3);
    scrolled.current = true;
  }, [now]);

  return (
    <>
      <SectionHead index="02" label="On air" title={<>Today on <em>Shams</em></>} dek="Live on satellite, online and in the app. Tap what’s on now to watch.">
        <TimeZoneToggle value={tz} onChange={setTz} />
        <a href="/programs#schedule" className="link-more">Full schedule <Icon name="arrow" size={16} /></a>
      </SectionHead>

      <div className="epg" ref={track} tabIndex={0} aria-label="Today’s schedule timeline">
        <div className="epg__track" style={{ '--span': END - START } as Vars}>
          <div className="epg__ruler" aria-hidden="true">
            {hours.map((h) => (
              <span key={h} style={{ '--s': h - START } as Vars}>{fmt(fmtMin(h))}</span>
            ))}
          </div>
          <ol className="epg__slots">
            {today.map((s) => {
              const a = toMin(s.time), b = toMin(s.end);
              const isLive = now ? now.minutes >= a && now.minutes < b : !!s.live;
              const isPast = now ? b <= now.minutes : false;
              const pct = isLive && now ? ((now.minutes - a) / (b - a)) * 100 : 0;
              const body = (
                <>
                  <span className="epg__time mono">{fmt(s.time)} – {fmt(s.end)}</span>
                  <b>{s.title}</b>
                  <span className="epg__kind">{s.kind}</span>
                  {isLive && <span className="epg__on"><span className="dot dot--pulse" />Watch now</span>}
                  {isLive && <i className="epg__fill" style={{ width: `${pct}%` }} />}
                </>
              );
              return (
                <li key={s.time} className={`epg__slot${isLive ? ' is-live' : ''}${isPast ? ' is-past' : ''}`}
                  style={{ '--s': a - START, '--d': b - a } as Vars}>
                  {isLive
                    ? <button type="button" onClick={() => open(live.clip, { live: true })} aria-label={`${s.title}, on now — watch live`}>{body}</button>
                    : <div>{body}</div>}
                </li>
              );
            })}
          </ol>
          {nowIn && (
            <span className="epg__now" style={{ '--s': now.minutes - START } as Vars} aria-hidden="true">
              <span className="mono">Now</span>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
