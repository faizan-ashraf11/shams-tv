'use client';
import { useVideo } from './VideoProvider';
import type { Clip } from '@/lib/media';

type Props = {
  clip: Clip;
  live?: boolean;
  kicker?: string;
  playlist?: Clip[];
  className?: string;
  label?: string;
  children: React.ReactNode;
};

/** A button that opens a clip in the site-wide player. */
export default function PlayTrigger({ clip, live, kicker, playlist, className, label, children }: Props) {
  const { open } = useVideo();
  return (
    <button type="button" className={className} aria-label={label} onClick={() => open(clip, { live, kicker, playlist })}>
      {children}
    </button>
  );
}
