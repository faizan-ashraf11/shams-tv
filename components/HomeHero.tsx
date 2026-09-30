'use client';
// Front page: the lead story plays full-bleed. The live channel sits in the bottom broadcast bar,
// first in line with the day's other headlines.
import SmartVideo from './video/SmartVideo';
import { useVideo } from './video/VideoProvider';
import Icon from './Icon';
import Emph from './Emph';
import { useErbilNow } from './useErbilNow';
import { onAir } from '@/lib/schedule';
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
      </div>

      <div className="container hero__bar">
        <button className="onair" onClick={() => open(live.clip, { live: true })} aria-label={`Watch live: ${current.title}`}>
          <span className="onair__thumb">
            <SmartVideo clip={live.clip} poster={live.clip.poster} mode="view" sizes="160px" className="ratio-16x9" />
            <span className="onair__play" aria-hidden="true"><Icon name="play" size={14} /></span>
          </span>
          <span className="onair__body">
            <span className="onair__meta">
              <span className="onair__live"><span className="dot dot--pulse" />Live</span>
              <span className="mono">{current.time}–{current.end}</span>
            </span>
            <span className="onair__title">{current.title}</span>
            <span className="onair__progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></span>
            {next[0] && <span className="onair__next">Next <span className="mono">{next[0].time}</span> {next[0].title}</span>}
          </span>
        </button>

        {alsoToday.map((s) => (
          <button key={s.title} className="rail-item" onClick={() => s.clip && open(s.clip, { kicker: s.tag })} disabled={!s.clip}>
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
