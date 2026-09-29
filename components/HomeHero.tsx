'use client';
// Cinematic, news-led hero: the lead story plays full-bleed; the live channel sits beside it.
import SmartVideo from './video/SmartVideo';
import { useVideo } from './video/VideoProvider';
import Icon from './Icon';
import { useErbilNow } from './useErbilNow';
import { onAir, describe } from '@/lib/schedule';
import { lead, live, alsoToday } from '@/lib/content';

export default function HomeHero() {
  const { open } = useVideo();
  const now = useErbilNow();
  const { current, progress, next } = onAir(now ? now.minutes : null);

  return (
    <section className="hero" aria-label="Top story and live TV">
      <SmartVideo clip={lead.clip} poster={lead.img} mode="background" sizes="100vw" priority className="hero__bg" />
      <div className="hero__shade" />

      <div className="container hero__in">
        <div className="hero__story">
          <div className="hero__kicker">
            <span className="badge badge--sun">Top story</span>
            <span>{lead.tag} · {lead.time}</span>
          </div>
          <h1 className="hero__title">{lead.title}</h1>
          <p className="hero__dek">{lead.dek}</p>
          <div className="hero__actions">
            <button className="btn btn--sun btn--lg" onClick={() => open(lead.clip!, { kicker: 'Report' })}>
              <Icon name="play" size={18} />Watch report · {lead.duration}
            </button>
            <a href="#news" className="btn btn--glass btn--lg">Read the story</a>
          </div>
        </div>

        <aside className="live-mini" aria-label="Live now">
          <button className="live-mini__screen" onClick={() => open(live.clip, { live: true })} aria-label={`Watch ${current.title} live`}>
            <SmartVideo clip={live.clip} poster={live.clip.poster} mode="view" sizes="360px" className="ratio-16x9" />
            <span className="badge badge--live live-mini__badge"><span className="dot dot--pulse" />LIVE</span>
            <span className="play-chip play-chip--big" aria-hidden="true"><Icon name="play" size={22} /></span>
          </button>
          <div className="live-mini__body">
            <div className="live-mini__row"><span className="live-mini__on">On now</span><span>{current.time}–{current.end}</span></div>
            <h2 className="live-mini__title">{current.title}</h2>
            <p className="live-mini__desc">{now ? describe(current) : live.title}</p>
            <div className="progress" aria-label={`${Math.round(progress)}% through`}><i style={{ width: `${progress}%` }} /></div>
            {next[0] && <p className="live-mini__next">Next <b>{next[0].time}</b> {next[0].title}</p>}
          </div>
        </aside>
      </div>

      <div className="container hero__rail">
        {alsoToday.map((s) => (
          <button key={s.title} className="rail-item" onClick={() => s.clip && open(s.clip, { kicker: s.tag })} disabled={!s.clip}>
            <span className="rail-item__tag">{s.tag}</span>
            <span className="rail-item__title">{s.title}</span>
            <span className="rail-item__meta">{s.clip ? <><Icon name="play" size={12} /> {s.duration}</> : s.time}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
