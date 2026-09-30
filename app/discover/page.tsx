import type { Metadata } from 'next';
import Link from 'next/link';
import Icon, { type IconName } from '@/components/Icon';
import SmartVideo from '@/components/video/SmartVideo';
import VideoCard from '@/components/video/VideoCard';
import PlayTrigger from '@/components/video/PlayTrigger';
import SectionHead from '@/components/SectionHead';
import { pillars, cities, programs, clips, photos } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Discover Kurdistan',
  description: 'Culture, mountains, food and investment in the Kurdistan Region — from the newsroom that covers it every day.',
};

const docs = programs.filter((p) => ['roads', 'citadel', 'chaikhana'].includes(p.slug));

const details: Record<string, { body: string; list: string[]; cta: { href: string; label: string } }> = {
  ancient: {
    body: 'The mound at the heart of Erbil has been settled since at least the 5th millennium BC — Assyrians, Persians, Greeks and Ottomans all passed through its gate.',
    list: ['UNESCO World Heritage Site since 2014', 'Kurdish Textile Museum inside the walls', 'Qaysari Bazaar at the foot of the hill'],
    cta: { href: '/discover/erbil', label: 'Explore Erbil' },
  },
  mountains: {
    body: 'North and east of the capital the land folds into the Zagros — gorges, lakes like Dokan, and snow on the high peaks well into June.',
    list: ['Rawanduz gorge and the Hamilton Road', 'Gali Ali Beg waterfall and Lake Dokan', 'Hiking and skiing around Halgurd and Penjwen'],
    cta: { href: '/programs#roads', label: 'Watch Roads of Kurdistan' },
  },
  tea: {
    body: 'Tea is poured strong, sweet and constantly — in small tulip glasses, at every hour, for every guest. The chaikhana is where news is traded before it’s broadcast.',
    list: ['Historic tea houses around the Citadel', 'Dolma, kebab and fresh flatbread', 'Honey and cheese from mountain villages'],
    cta: { href: '/programs#chaikhana', label: 'Watch Chaikhana' },
  },
  invest: {
    body: 'The Region’s investment law treats foreign and local investors equally, with land allocation and tax exemptions for licensed projects.',
    list: ['Agriculture and food processing', 'Tourism and hospitality', 'Energy, logistics and a young bilingual workforce'],
    cta: { href: '#', label: 'Contact the investment desk' },
  },
};

const plan: { icon: IconName; title: string; text: string }[] = [
  { icon: 'plane', title: 'Getting there', text: 'Erbil (EBL) and Sulaymaniyah (ISU) airports, with direct routes from Europe, the Gulf and Türkiye.' },
  { icon: 'passport', title: 'Visas', text: 'Many nationalities can get a visa on arrival at Erbil airport. Rules change — check before you fly.' },
  { icon: 'sun', title: 'When to go', text: 'Spring (March–May) for green valleys; autumn (September–November) for mild days.' },
  { icon: 'wallet', title: 'Money & language', text: 'Iraqi dinar, mostly cash. Kurdish and Arabic are spoken; English is common among younger people.' },
];

export default function Discover() {
  return (
    <>
      {/* Same cinematic hero system as the homepage: fits one screen, story left, film card right, section rail below */}
      <section className="hero hero--discover" aria-label="Discover Kurdistan">
        <SmartVideo clip={clips.mountainClouds} poster={clips.mountainClouds.poster} mode="background" sizes="100vw" priority className="hero__bg" />
        <div className="hero__shade" />

        <div className="container hero__in">
          <div className="hero__story">
            <div className="hero__kicker">
              <span className="badge badge--sun">Discover Kurdistan</span>
              <span className="ku" lang="ckb">کوردستان</span>
            </div>
            <h1 className="hero__title">Older than you think. <em>Closer than you’d guess.</em></h1>
            <p className="hero__dek">A guide to the Kurdistan Region from the newsroom that covers it every day — ancient cities, high mountains, tea-house culture and a region open for business.</p>
            <div className="hero__actions">
              <PlayTrigger clip={clips.erbilAerial} kicker="Discover" className="btn btn--sun btn--lg"><Icon name="play" size={18} />Watch the film</PlayTrigger>
              <a href="#plan" className="btn btn--glass btn--lg">Plan a trip</a>
            </div>
          </div>

          <aside className="live-panel" aria-label="Featured film">
            <div className="live-panel__top">
              <span className="badge badge--sun">Film</span>
              <span className="live-panel__ch">Shams Documentaries</span>
              <span className="mono live-panel__dur">04:00</span>
            </div>
            <PlayTrigger clip={clips.erbilAerial} kicker="Discover" className="live-panel__screen" label="Play film: Erbil from above">
              <SmartVideo clip={clips.erbilAerial} poster={clips.erbilAerial.poster} mode="view" sizes="400px" className="ratio-16x9" />
              <span className="play-chip play-chip--big" aria-hidden="true"><Icon name="play" size={22} /></span>
            </PlayTrigger>
            <div className="live-panel__body">
              <span className="live-panel__label live-panel__label--sun">Featured film</span>
              <h2 className="live-panel__title">Erbil from above</h2>
              <p className="live-panel__desc">A drone’s-eye view of the capital — the Citadel, the new city and the mountains beyond.</p>
            </div>
            <ol className="live-panel__next" aria-label="Next on Shams">
              <li><time className="mono">Tue</time><span>Roads of Kurdistan</span><em>13:00</em></li>
            </ol>
          </aside>
        </div>

        <nav className="container hero__rail hero__rail--4" aria-label="Explore Kurdistan">
          {pillars.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="rail-item">
              <span className="rail-item__body">
                <span className="rail-item__tag">{p.label}</span>
                <span className="rail-item__title">{p.title}</span>
                <span className="rail-item__meta mono">Explore <Icon name="arrow" size={12} /></span>
              </span>
            </a>
          ))}
        </nav>
      </section>

      <nav className="subnav" aria-label="On this page">
        <div className="container subnav__in">
          {pillars.map((p) => <a key={p.slug} href={`#${p.slug}`}>{p.label}</a>)}
          <a href="#cities">Cities</a>
          <a href="#watch">Watch</a>
          <a href="#plan">Plan a trip</a>
        </div>
      </nav>

      <section className="section">
        <div className="container intro">
          <div>
            <span className="kicker"><span className="kicker__index">01</span>Why Kurdistan</span>
            <h2>Three things most people <em>don’t know</em></h2>
            <p>The Kurdistan Region has been one of the most stable parts of the Middle East for years. It is also very old, very green and very welcoming. Always check your government’s latest travel advice before you go.</p>
          </div>
          <div className="facts">
            <div className="fact"><b>Stable</b><span>Direct flights to Erbil from Europe, the Gulf and Türkiye</span></div>
            <div className="fact"><b>6,000+ yrs</b><span>Erbil is among the oldest continuously inhabited cities</span></div>
            <div className="fact"><b>3,611 m</b><span>Peaks, gorges and ski slopes an hour from the capital</span></div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          {pillars.map((p, i) => {
            const d = details[p.slug];
            return (
              <div key={p.slug} id={p.slug} className={`feature reveal${i % 2 ? ' feature--flip' : ''}`}>
                <div className="feature__media">
                  <VideoCard clip={p.clip} poster={p.img} alt={p.title} ratio="4x3" mode="view" kicker={p.label} sizes="(max-width: 1024px) 100vw, 600px" />
                </div>
                <div>
                  <span className="kicker"><span className="kicker__index">0{i + 2}</span>{p.label}</span>
                  <h2>{p.title}</h2>
                  <p>{p.copy}</p>
                  <p>{d.body}</p>
                  <ul className="checklist">{d.list.map((l) => <li key={l}>{l}</li>)}</ul>
                  {p.slug === 'invest'
                    ? <a href={d.cta.href} className="btn btn--dark">{d.cta.label} <Icon name="arrow" size={16} /></a>
                    : <Link href={d.cta.href} className="link-more">{d.cta.label} <Icon name="arrow" size={16} /></Link>}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section" id="cities">
        <div className="container">
          <SectionHead index="06" label="Cities & regions" title={<>Where to <em>go</em></>} dek="City guides written by our local correspondents." />
          <div className="grid-4 grid-4--keep2">
            {cities.map((c) => (
              <Link key={c.slug} href={c.slug === 'erbil' ? '/discover/erbil' : '#cities'} className="pillar-card">
                <SmartVideo clip={c.clip} poster={c.img} alt={c.name} mode="auto" sizes="(max-width: 560px) 50vw, 25vw" className="ratio-4x5">
                  {c.slug !== 'erbil' && <span className="badge badge--glass pillar-card__soon">Guide coming soon</span>}
                  <span className="pillar-card__shade" />
                  <span className="pillar-card__text">
                    <span className="tag tag--on-dark ku" lang="ckb">{c.local}</span>
                    <span className="pillar-card__title">{c.name}</span>
                    <span className="pillar-card__sub">{c.tagline}</span>
                  </span>
                </SmartVideo>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--night" id="watch">
        <div className="container">
          <SectionHead index="07" label="Watch on Shams" title={<>Documentaries <em>&amp; series</em></>}>
            <Link href="/programs" className="link-more">All programmes <Icon name="arrow" size={16} /></Link>
          </SectionHead>
          <div className="grid-3">
            {docs.map((p) => (
              <article key={p.slug} className="story story--dark reveal">
                <VideoCard clip={p.clip} poster={p.clip.poster} kicker={p.title} duration="Trailer" />
                <span className="show__when mono">{p.kind} · {p.when}</span>
                <h3 className="story__title">{p.title}</h3>
                <p className="story__dek">{p.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="plan">
        <div className="container">
          <SectionHead index="08" label="Plan a trip" title={<>The practical <em>bits</em></>} />
          <div className="grid-4">
            {plan.map((p) => (
              <div key={p.title} className="info-card reveal">
                <div className="info-card__icon"><Icon name={p.icon} size={22} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <Link href="/discover/erbil" className="cta reveal">
            <SmartVideo poster={photos.citadelWide} alt="" sizes="100vw" className="cta__bg" />
            <span className="cta__shade" />
            <span className="cta__text">
              <span className="eyebrow eyebrow--sun">City guide</span>
              <span className="cta__title">Start with the capital: <em>Erbil</em></span>
              <span className="cta__sub">The Citadel, the bazaar, tea houses and day trips.</span>
            </span>
            <span className="btn btn--sun">Explore Erbil <Icon name="arrow" size={16} /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
