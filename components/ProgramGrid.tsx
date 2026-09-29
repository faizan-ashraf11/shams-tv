'use client';
import { useState } from 'react';
import VideoCard from './video/VideoCard';
import Icon from './Icon';
import { programs } from '@/lib/content';

const filters = ['All', ...Array.from(new Set(programs.map((p) => p.kind)))];

export default function ProgramGrid() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? programs : programs.filter((p) => p.kind === filter);

  return (
    <>
      <div className="chips" role="group" aria-label="Filter programmes">
        {filters.map((f) => (
          <button key={f} className={`chip${f === filter ? ' is-active' : ''}`} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="grid-3">
        {list.map((p) => (
          <article key={p.slug} id={p.slug} className="prog-card reveal">
            <VideoCard clip={p.clip} poster={p.clip.poster} kicker={p.title} duration="Trailer" />
            <div className="prog-card__body">
              <span className="tag">{p.kind}</span>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="prog-card__foot">
                <span className="meta"><Icon name="clock" size={14} />{p.when}</span>
                <a href="#" className="link-more">Episodes <Icon name="arrow" size={14} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
