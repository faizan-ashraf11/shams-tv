'use client';
import { useEffect, useState } from 'react';
import { erbilNow } from '@/lib/erbil';

/** Erbil time, refreshed every 30s. `null` until mounted, so server and client HTML match. */
export function useErbilNow() {
  const [now, setNow] = useState<ReturnType<typeof erbilNow> | null>(null);
  useEffect(() => {
    const tick = () => setNow(erbilNow());
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);
  return now;
}
