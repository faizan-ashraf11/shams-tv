'use client';
// Shams Shorts — vertical clips. Hover (desktop) or scroll into view (mobile) to preview; tap to watch full screen.
import { useRef } from 'react';
import VideoCard from './video/VideoCard';
import Icon from './Icon';
import type { Clip } from '@/lib/media';

const labels = ['News', 'Duhok', 'Culture', 'Culture', 'Sport', 'Travel', 'How-to'];

export default function ShortsRail({ items }: { items: Clip[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => rail.current?.scrollBy({ left: d * rail.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <div className="shorts">
      <div className="shorts__controls">
        <button className="icon-btn icon-btn--dark" onClick={() => scroll(-1)} aria-label="Scroll shorts left"><Icon name="chevron" size={20} className="flip" /></button>
        <button className="icon-btn icon-btn--dark" onClick={() => scroll(1)} aria-label="Scroll shorts right"><Icon name="chevron" size={20} /></button>
      </div>
      <div className="shorts__rail" ref={rail}>
        {items.map((c, i) => (
          <div key={c.src} className="short">
            <VideoCard clip={c} poster={c.poster} ratio="9x16" sizes="(max-width: 768px) 60vw, 240px" playlist={items} kicker="Shams Shorts" bigPlay>
              <span className="short__shade" />
              <span className="short__text">
                <span className="short__tag mono">{labels[i] ?? 'Shorts'}</span>
                <span className="short__title">{c.title}</span>
              </span>
            </VideoCard>
          </div>
        ))}
      </div>
    </div>
  );
}
