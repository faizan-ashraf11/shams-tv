'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from './Icon';
import ErbilClock from './ErbilClock';
import SunArc from './SunArc';
import { useVideo } from './video/VideoProvider';
import { breaking, live } from '@/lib/content';

const nav = [
  { href: '/', label: 'News', match: (p: string) => p === '/' },
  { href: '/programs', label: 'Programmes', match: (p: string) => p === '/programs' },
  { href: '/programs#schedule', label: 'Schedule', match: () => false },
  { href: '/#shorts', label: 'Shorts', match: () => false },
  { href: '/discover', label: 'Discover Kurdistan', match: (p: string) => p.startsWith('/discover') },
];

export default function Header() {
  const pathname = usePathname();
  const { open: openVideo } = useVideo();
  const [menu, setMenu] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${solid || menu ? ' is-solid' : ''}`}>
      <div className="container site-header__in">
        <Logo />
        <nav className="nav" aria-label="Main">
          {nav.map((n) => <Link key={n.label} href={n.href} className={n.match(pathname) ? 'is-active' : undefined}>{n.label}</Link>)}
        </nav>
        <div className="site-header__actions">
          <span className="erbil-now" title="Local time in Erbil">
            <SunArc compact />
            <span className="erbil-now__label">Erbil</span>
            <b><ErbilClock /></b>
          </span>
          <nav className="lang" aria-label="Language">
            <Link href="/" aria-current="true">EN</Link>
            <a href="#" className="ku" lang="ckb" title="Kurdish (Sorani) — coming soon">کوردی</a>
            <a href="#" className="ku" lang="ar" title="Arabic — coming soon">عربي</a>
          </nav>
          <button className="icon-btn icon-btn--dark search-btn" aria-label="Search"><Icon name="search" size={19} /></button>
          <button className="btn btn--live btn--sm" onClick={() => openVideo(live.clip, { live: true })}>
            <span className="dot dot--pulse" /><span>Watch live</span>
          </button>
          <button className="icon-btn icon-btn--dark burger" aria-label="Menu" aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu((m) => !m)}>
            <Icon name={menu ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div className="ticker">
        <div className="container ticker__in">
          <span className="ticker__label"><span className="dot dot--pulse" />Breaking</span>
          <a href="/#news" className="ticker__text">{breaking}</a>
          <a href="/#latest" className="ticker__more">All updates <Icon name="arrow" size={14} /></a>
        </div>
      </div>

      <nav id="mobile-nav" className={`mobile-nav${menu ? ' is-open' : ''}`} aria-label="Mobile">
        <div className="container">
          {nav.map((n, i) => (
            <Link key={n.label} href={n.href} onClick={() => setMenu(false)} className={`mobile-nav__link${n.match(pathname) ? ' is-active' : ''}`}>
              <span><span className="mobile-nav__i">0{i + 1}</span>{n.label}</span><Icon name="arrow" size={18} />
            </Link>
          ))}
          <div className="mobile-nav__foot">
            <span className="erbil-now"><SunArc compact /><span className="erbil-now__label">Erbil</span><b><ErbilClock /></b></span>
            <div className="mobile-nav__lang">
              <Link href="/">EN</Link>
              <a href="#" className="ku" lang="ckb">کوردی</a>
              <a href="#" className="ku" lang="ar">عربي</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
