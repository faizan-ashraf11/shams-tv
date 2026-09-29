'use client';
// Poster image + muted preview video.
//  mode="hover":      preview plays while hovered/focused (desktop); poster otherwise.
//  mode="view":       plays while on screen (cinematic sections).
//  mode="auto":       hover on mouse devices, view on touch devices (shorts, cards).
//  mode="background": full-bleed hero loop.
// Respects prefers-reduced-motion and Save-Data: those users only get the poster.
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Clip } from '@/lib/media';

type Mode = 'hover' | 'view' | 'auto' | 'background';
type Props = {
  clip?: Clip;
  poster: string;
  alt?: string;
  mode?: Mode;
  sizes?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function motionAllowed() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return !reduce && !saveData;
}

export default function SmartVideo({ clip, poster, alt = '', mode = 'hover', sizes = '(max-width: 768px) 100vw, 33vw', priority, className = '', children }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [effective, setEffective] = useState<Exclude<Mode, 'auto'> | null>(null);
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!clip || !motionAllowed()) return setEffective(null);
    if (mode === 'auto') setEffective(window.matchMedia('(hover: hover)').matches ? 'hover' : 'view');
    else setEffective(mode);
  }, [clip, mode]);

  // view / background: attach + play while on screen, pause when off screen.
  useEffect(() => {
    if (!effective || effective === 'hover' || !wrap.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); video.current?.play().catch(() => {}); }
      else video.current?.pause();
    }, { threshold: effective === 'background' ? 0.05 : 0.6 });
    io.observe(wrap.current);
    return () => io.disconnect();
  }, [effective]);

  const start = () => {
    if (effective !== 'hover') return;
    setActive(true);
    requestAnimationFrame(() => video.current?.play().catch(() => {}));
  };
  const stop = () => {
    if (effective !== 'hover' || !video.current) return;
    video.current.pause();
    setPlaying(false);
  };

  return (
    <div ref={wrap} className={`smart-media ${className}`} onPointerEnter={start} onPointerLeave={stop} onFocus={start} onBlur={stop}>
      <Image src={poster} alt={alt} fill sizes={sizes} priority={priority} className="smart-media__img" />
      {clip && active && (
        <video ref={video} className={`smart-media__video${playing ? ' is-playing' : ''}`} src={clip.src} muted loop playsInline
          autoPlay={effective !== 'hover'} preload="none" aria-hidden="true" onPlaying={() => setPlaying(true)} />
      )}
      {children}
    </div>
  );
}
