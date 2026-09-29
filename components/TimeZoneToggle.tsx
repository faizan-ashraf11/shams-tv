'use client';

export type Tz = 'erbil' | 'local';

// The audience is international — let viewers read the schedule in their own time.
export default function TimeZoneToggle({ value, onChange }: { value: Tz; onChange: (tz: Tz) => void }) {
  return (
    <div className="segmented" role="group" aria-label="Time zone">
      <button className={value === 'erbil' ? 'is-active' : ''} onClick={() => onChange('erbil')}>Erbil time</button>
      <button className={value === 'local' ? 'is-active' : ''} onClick={() => onChange('local')}>My time</button>
    </div>
  );
}
