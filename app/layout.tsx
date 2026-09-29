import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Noto_Sans_Arabic } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoProvider from '@/components/video/VideoProvider';
import '@/styles/globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-grotesk', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '600'], variable: '--font-noto-ar', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Shams TV — Live news from Kurdistan', template: '%s — Shams TV' },
  description: 'Shams TV: live news, programmes and stories from Erbil, Kurdistan — for viewers at home and around the world.',
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#0a0a0b', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable} ${arabic.variable}`}>
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
