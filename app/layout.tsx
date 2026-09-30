import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif, Noto_Sans_Arabic } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoProvider from '@/components/video/VideoProvider';
import '@/styles/globals.css';

// Type system: an editorial serif for headlines (voice), a precise grotesk for UI and reading,
// and a mono for broadcast data — timecodes, schedules, counters.
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif-src', display: 'swap' });
const sans = Geist({ subsets: ['latin'], variable: '--font-sans-src', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono-src', display: 'swap' });
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '600'], variable: '--font-noto-ar', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Shams TV — Live news from Kurdistan', template: '%s — Shams TV' },
  description: 'Shams TV: live news, programmes and stories from Erbil, Kurdistan — for viewers at home and around the world.',
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#0f0c0a', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} ${arabic.variable}`}>
      <body>
        <VideoProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </VideoProvider>
      </body>
    </html>
  );
}
