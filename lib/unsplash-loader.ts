// next/image loader: let the source CDN (Unsplash / Pexels) resize and compress.
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const sep = src.includes('?') ? '&' : '?';
  if (src.includes('images.pexels.com')) return `${src}${sep}auto=compress&cs=tinysrgb&w=${width}`;
  if (src.includes('images.unsplash.com')) return `${src}${sep}auto=format&fit=crop&w=${width}&q=${quality ?? 70}`;
  return src;
}
