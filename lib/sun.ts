// Where the sun is over Erbil right now — the brand's signature data point ("Shams" means sun).
// NOAA-style approximation; accurate to a few minutes, which is all a UI needs.
const LAT = 36.19;
const LON = 44.01;
const TZ_MERIDIAN = 45; // UTC+3

const rad = (d: number) => (d * Math.PI) / 180;

/** Sunrise / sunset in Erbil, as minutes after local midnight. */
export function erbilSun(date = new Date()) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const n = Math.floor((date.getTime() - start) / 864e5);
  const b = rad((360 / 365) * (n - 81));
  const eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
  const decl = rad(23.44) * Math.sin(b);
  const cosH = (Math.sin(rad(-0.83)) - Math.sin(rad(LAT)) * Math.sin(decl)) / (Math.cos(rad(LAT)) * Math.cos(decl));
  const h = (Math.acos(Math.max(-1, Math.min(1, cosH))) * 180) / Math.PI;
  const noon = 720 + 4 * (TZ_MERIDIAN - LON) - eot;
  return { rise: Math.round(noon - 4 * h), set: Math.round(noon + 4 * h) };
}

export const fmtMin = (m: number) => {
  const v = ((Math.round(m) % 1440) + 1440) % 1440;
  return `${String(Math.floor(v / 60)).padStart(2, '0')}:${String(v % 60).padStart(2, '0')}`;
};
