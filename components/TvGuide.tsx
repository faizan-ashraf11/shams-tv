'use client';
// Horizontal "Today on Shams" guide for the homepage.
import { useEffect, useRef, useState } from 'react';
import TimeZoneToggle, { type Tz } from './TimeZoneToggle';
import { useErbilNow } from './useErbilNow';
import { toLocalTime, toMin } from '@/lib/erbil';
import { today } from '@/lib/content';

export default function TvGuide() {
  const now = useErbilNow();
  const [tz, setTz] = useState<Tz>('erbil');
  const track = useRef<HTMLDivElement>(null);
  const scrolled = useRef(false);

  useEffect(() => {
    if (!now || scrolled.current || !track.current) return;
    const el = track.current.querySelector<HTMLElement>('.is-live');
    if (el) track.current.scrollLeft = Math.max(0, el.offsetLeft - track.current.offsetLeft - 16);
    scrolled.current = true;
  }, [now]);

  return (
    <>
      <div className="sec-head">
        <div>
          <span className="eyebrow">On air</span>
          <h2>Today on Shams</h2>
          <p>Live on satellite, online and in the app.</p>
        </div>
        <div className="sec-head__tools">
          <TimeZoneToggle value={tz} onChange={setTz} />
          <a href="/programs#schedule" className="link-more">Full schedule →</a>
        </div>
      </div>
      <div className="epg" ref={track}>
        {today.map((s) => {
          const isLive = now ? now.minutes >= toMin(s.time) && now.minutes < toMin(s.end) : !!s.live;
          const isPast = now ? toMin(s.end) <= now.minutes : false;
          return (
            <div key={s.time} className={`epg__slot${isLive ? ' is-live' : ''}${isPast ? ' is-past' : ''}`}>
              <time>{tz === 'local' ? toLocalTime(s.time) : s.time} – {tz === 'local' ? toLocalTime(s.end) : s.end}</time>
              <b>{s.title}</b>
              <span>{s.kind}</span>
              {isLive && <span className="epg__now"><span className="dot dot--pulse" />On now</span>}
            </div>
          );
        })}
      </div>
    </>
  );
}
