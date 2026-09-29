'use client';
import { useEffect, useState } from 'react';
import TimeZoneToggle, { type Tz } from './TimeZoneToggle';
import { useErbilNow } from './useErbilNow';
import { toLocalTime, toMin } from '@/lib/erbil';
import { days, week } from '@/lib/content';

export default function WeekSchedule() {
  const now = useErbilNow();
  const [day, setDay] = useState(1);
  const [tz, setTz] = useState<Tz>('erbil');
  const nowDay = now?.dayIdx;

  // Open on today in Erbil once the clock is known.
  useEffect(() => { if (nowDay !== undefined) setDay(nowDay); }, [nowDay]);

  const isToday = now !== null && now.dayIdx === day;
  const fmt = (t: string) => (tz === 'local' ? toLocalTime(t) : t);

  return (
    <div className="schedule">
      <div className="schedule__bar">
        <div className="tabs" role="tablist" aria-label="Day">
          {days.map((d, i) => (
            <button key={d} role="tab" aria-selected={i === day} onClick={() => setDay(i)}>
              {d}{now?.dayIdx === i ? ' · Today' : ''}
            </button>
          ))}
        </div>
        <TimeZoneToggle value={tz} onChange={setTz} />
      </div>
      <ol role="tabpanel">
        {week[day].map((s) => {
          const on = isToday && now.minutes >= toMin(s.time) && now.minutes < toMin(s.end);
          const past = isToday && toMin(s.end) <= now.minutes;
          return (
            <li key={s.time} className={on ? 'is-live' : past ? 'is-past' : undefined}>
              <time>{fmt(s.time)}</time>
              <div><b>{s.title}</b><span>{s.kind} · until {fmt(s.end)}</span></div>
              {on && <span className="badge badge--live"><span className="dot dot--pulse" />On now</span>}
            </li>
          );
        })}
      </ol>
      <p className="schedule__note">All other hours: <b>Shams Overnight</b> — rolling news and repeats.</p>
    </div>
  );
}
