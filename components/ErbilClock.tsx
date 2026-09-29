'use client';
import { useEffect, useState } from 'react';
import { erbilClock } from '@/lib/erbil';

export default function ErbilClock() {
  const [t, setT] = useState('--:--');
  useEffect(() => {
    const tick = () => setT(erbilClock());
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <>{t}</>;
}
