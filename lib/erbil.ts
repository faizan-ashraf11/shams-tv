// Erbil is UTC+3 all year (no DST), so we can do the maths without a tz library.
export const ERBIL_OFFSET_H = 3;

export const toMin = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

/** Minutes since midnight in Erbil, plus day index (Mon = 0). */
export function erbilNow(date = new Date()) {
  const d = new Date(date.getTime() + ERBIL_OFFSET_H * 3600e3);
  return { minutes: d.getUTCHours() * 60 + d.getUTCMinutes(), dayIdx: (d.getUTCDay() + 6) % 7 };
}

/** Convert an Erbil "HH:MM" to the viewer's local "HH:MM". */
export function toLocalTime(t: string) {
  const [h, m] = t.split(':').map(Number);
  const d = new Date();
  d.setUTCHours(h - ERBIL_OFFSET_H, m, 0, 0);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

export const erbilClock = (date = new Date()) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Baghdad', hour: '2-digit', minute: '2-digit' }).format(date);

export const erbilDate = (date = new Date()) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Baghdad', weekday: 'long', day: 'numeric', month: 'long' }).format(date);
