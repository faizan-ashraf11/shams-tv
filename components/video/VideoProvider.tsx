'use client';
// Site-wide video player: any component can open a clip (or a playlist, e.g. Shorts) in a modal.
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import type { Clip } from '@/lib/media';

type OpenOpts = { live?: boolean; kicker?: string; playlist?: Clip[]; index?: number };
type Ctx = { open: (clip: Clip, opts?: OpenOpts) => void };

const VideoCtx = createContext<Ctx>({ open: () => {} });
export const useVideo = () => useContext(VideoCtx);

export default function VideoProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ list: Clip[]; index: number; live?: boolean; kicker?: string } | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const open = useCallback((clip: Clip, opts: OpenOpts = {}) => {
    lastFocus.current = document.activeElement as HTMLElement;
    const list = opts.playlist ?? [clip];
    setState({ list, index: opts.index ?? Math.max(0, list.indexOf(clip)), live: opts.live, kicker: opts.kicker });
  }, []);

  const close = useCallback(() => {
    setState(null);
    lastFocus.current?.focus();
  }, []);

  const step = useCallback((d: number) => {
    setState((s) => (s ? { ...s, index: (s.index + d + s.list.length) % s.list.length } : s));
  }, []);

  useEffect(() => {
    if (!state) return;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') step(1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [state, close, step]);

  const clip = state?.list[state.index];
  const multi = (state?.list.length ?? 0) > 1;

  return (
    <VideoCtx.Provider value={{ open }}>
      {children}
      {state && clip && (
        <div className="player-modal" role="dialog" aria-modal="true" aria-label={clip.title} onClick={close}>
          <div className={`player-modal__box${clip.portrait ? ' is-portrait' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="player-modal__bar">
              <div className="player-modal__meta">
                {state.live ? <span className="badge badge--live"><span className="dot dot--pulse" />LIVE</span>
                  : <span className="badge badge--glass">{state.kicker ?? 'Shams TV'}</span>}
                <span className="player-modal__title">{clip.title}</span>
              </div>
              <button ref={closeBtn} className="icon-btn icon-btn--dark" onClick={close} aria-label="Close video"><Icon name="close" size={22} /></button>
            </div>
            <div className="player-modal__stage">
              <video key={clip.src} src={clip.src} poster={clip.poster} controls={!state.live} autoPlay playsInline loop={state.live}
                muted={false} className="player-modal__video" />
              {state.live && <div className="player-modal__livebug"><span className="dot dot--pulse" />Shams TV · Live from Erbil</div>}
            </div>
            {multi && (
              <div className="player-modal__nav">
                <button className="icon-btn icon-btn--dark" onClick={() => step(-1)} aria-label="Previous video"><Icon name="chevron" size={20} className="flip" /></button>
                <span>{state.index + 1} / {state.list.length}</span>
                <button className="icon-btn icon-btn--dark" onClick={() => step(1)} aria-label="Next video"><Icon name="chevron" size={20} /></button>
              </div>
            )}
          </div>
        </div>
      )}
    </VideoCtx.Provider>
  );
}
