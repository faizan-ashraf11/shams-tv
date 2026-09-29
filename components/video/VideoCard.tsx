'use client';
// Media block for a story/programme: poster + hover preview; click opens the full player.
import SmartVideo from './SmartVideo';
import { useVideo } from './VideoProvider';
import Icon from '../Icon';
import type { Clip } from '@/lib/media';

type Props = {
  clip?: Clip;
  poster: string;
  alt?: string;
  ratio?: '16x9' | '4x3' | '3x2' | '4x5' | '9x16';
  sizes?: string;
  duration?: string;
  kicker?: string;
  mode?: 'hover' | 'view' | 'auto';
  playlist?: Clip[];
  bigPlay?: boolean;
  priority?: boolean;
  children?: React.ReactNode;
};

export default function VideoCard({ clip, poster, alt = '', ratio = '16x9', sizes, duration, kicker, mode = 'auto', playlist, bigPlay, priority, children }: Props) {
  const { open } = useVideo();
  const body = (
    <SmartVideo clip={clip} poster={poster} alt={alt} mode={mode} sizes={sizes} priority={priority} className={`ratio-${ratio}`}>
      {clip && (
        <span className={`play-chip${bigPlay ? ' play-chip--big' : ''}`} aria-hidden="true">
          <Icon name="play" size={bigPlay ? 22 : 12} />{!bigPlay && duration}
        </span>
      )}
      {children}
    </SmartVideo>
  );
  if (!clip) return <div className="media-frame">{body}</div>;
  return (
    <button type="button" className="media-frame media-frame--btn" aria-label={`Play video: ${clip.title}`} onClick={() => open(clip, { kicker, playlist })}>
      {body}
    </button>
  );
}
