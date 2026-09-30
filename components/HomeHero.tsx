'use client';
// Front page: the lead story plays full-bleed; the live channel is a "control panel" beside it.
import SmartVideo from './video/SmartVideo';
import { useVideo } from './video/VideoProvider';
import Icon from './Icon';
import SunArc from './SunArc';
import Emph from './Emph';
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
      <div className="hero__grain" aria-hidden="true" />

      <div className="container hero__in">
        <div className="hero__story">
          <div className="hero__kicker">
            <span className="badge badge--sun">Top story</span>
            <span className="mono">{lead.tag} · {lead.time}</span>
          </div>
          <h1 className="hero__title"><Emph text={lead.title} em={lead.em} /></h1>
          <p className="hero__dek">{lead.dek}</p>
          <div className="hero__actions">
            <button className="btn btn--sun btn--lg" onClick={() => open(lead.clip!, { kicker: 'Report' })}>
              <span className="btn__play"><Icon name="play" size={14} /></span>Watch report <span className="mono btn__dur">{lead.duration}</span>
            </button>
            <a href="#news" className="btn btn--ghost btn--lg">Read the story <Icon name="arrow" size={18} /></a>
          </div>
        </div>

        <aside className="live-panel" aria-label="Live now">
          <div className="live-panel__top">
            <span className="badge badge--live"><span className="dot dot--pulse" />Live</span>
            <span className="live-panel__ch">Shams TV · Erbil</span>
            <SunArc compact />
          </div>
          <button className="live-panel__screen" onClick={() => open(live.clip, { live: true })} aria-label={`Watch ${current.title} live`}>
            <SmartVideo clip={live.clip} poster={live.clip.poster} mode="view" sizes="400px" className="ratio-16x9" />
            <span className="play-chip play-chip--big" aria-hidden="true"><Icon name="play" size={22} /></span>
          </button>
          <div className="live-panel__body">
            <span className="live-panel__label">On now</span>
            <h2 className="live-panel__title">{current.title}</h2>
            <p className="live-panel__desc">{now ? describe(current) : live.title}</p>
            <div className="progress" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Programme progress">
              <i style={{ width: `${progress}%` }} />
            </div>
            <div className="live-panel__times mono"><span>{current.time}</span><span>{current.end}</span></div>
          </div>
          {next.length > 0 && (
            <ol className="live-panel__next" aria-label="Up next">
              {next.map((s) => (
                <li key={s.time}><time className="mono">{s.time}</time><span>{s.title}</span><em>{s.kind}</em></li>
              ))}
            </ol>
          )}
        </aside>
      </div>

      <div className="container hero__rail">
        {alsoToday.map((s, i) => (
          <button key={s.title} className="rail-item" onClick={() => s.clip && open(s.clip, { kicker: s.tag })} disabled={!s.clip}>
            <span className="rail-item__i mono">0{i + 2}</span>
            <span className="rail-item__body">
              <span className="rail-item__tag">{s.tag}</span>
              <span className="rail-item__title">{s.title}</span>
              <span className="rail-item__meta mono">{s.clip ? <><Icon name="play" size={11} /> {s.duration}</> : s.time}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
