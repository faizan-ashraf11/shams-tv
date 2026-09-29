import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import ErbilClock from '@/components/ErbilClock';
import SmartVideo from '@/components/video/SmartVideo';
import VideoCard from '@/components/video/VideoCard';
import PlayTrigger from '@/components/video/PlayTrigger';
import { latest, photos, clips } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Erbil — Discover Kurdistan',
  description: 'A city guide to Erbil, capital of the Kurdistan Region: the Citadel, the bazaar, tea houses and day trips.',
};

const places = [
  { name: 'The Citadel', kind: 'Heritage', copy: 'Walk the lanes of a 6,000-year-old hilltop town, then the Kurdish Textile Museum inside its walls.', img: photos.citadel },
  { name: 'Qaysari Bazaar', kind: 'Market', copy: 'Vaulted alleys of spices, honey, cheese and copper at the foot of the Citadel.', img: clips.bazaar.poster, clip: clips.bazaar },
  { name: 'Mam Khalil’s tea house', kind: 'Tea & food', copy: 'Photos from a century of guests line the walls. Order tea; it keeps coming.', img: clips.teaKettle.poster, clip: clips.teaKettle },
  { name: 'Sami Abdulrahman Park', kind: 'City life', copy: 'The city’s green heart — families, joggers and evening picnics.', img: photos.erbilPark },
  { name: 'Shaqlawa', kind: 'Day trip · 50 km', copy: 'Orchards and summer houses in the foothills — the first taste of the mountains.', img: clips.mountainClouds.poster, clip: clips.mountainClouds },
  { name: 'Lake Dokan', kind: 'Day trip · 120 km', copy: 'Blue water, boat trips and lakeside restaurants — a favourite weekend escape.', img: clips.dokan.poster, clip: clips.dokan },
];

export default function Erbil() {
  return (
    <>
      <section className="page-hero page-hero--city">
        <SmartVideo clip={clips.erbilAerial} poster={clips.erbilAerial.poster} mode="background" sizes="100vw" priority className="page-hero__bg" />
        <div className="page-hero__shade" />
        <div className="container page-hero__in">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/discover">Discover Kurdistan</Link><Icon name="chevron" size={14} /><span aria-current="page">Erbil</span>
          </nav>
          <h1>Erbil <span className="ku" lang="ckb">هەولێر</span></h1>
          <p>The capital of the Kurdistan Region and home to Shams TV — a modern city wrapped around one of the oldest addresses on earth.</p>
          <div className="page-hero__actions">
            <PlayTrigger clip={clips.erbilAerial} kicker="Erbil" className="btn btn--sun btn--lg"><Icon name="play" size={18} />Erbil from above</PlayTrigger>
          </div>
        </div>
      </section>

      <div className="container facts-bar">
        <div className="fact"><span className="eyebrow">Local time</span><b><ErbilClock /></b><span>UTC+3, all year</span></div>
        <div className="fact"><span className="eyebrow">Inhabited for</span><b>6,000+ yrs</b><span>UNESCO World Heritage, 2014</span></div>
        <div className="fact"><span className="eyebrow">Airport</span><b>EBL</b><span>About 15 min from the centre</span></div>
        <div className="fact"><span className="eyebrow">Best months</span><b>Mar–May</b><span>and Sep–Nov</span></div>
      </div>

      <section className="section">
        <div className="container">
          <div className="sec-head"><div><span className="eyebrow">Where to start</span><h2>Picked by our Erbil newsroom</h2></div></div>
          <div className="grid-3">
            {places.map((p) => (
              <article key={p.name} className="story reveal">
                <VideoCard clip={p.clip} poster={p.img} alt={p.name} ratio="3x2" kicker={p.name} duration="Watch" />
                <span className="tag"><Icon name="pin" size={12} /> {p.kind}</span>
                <h3 className="story__title">{p.name}</h3>
                <p className="story__dek">{p.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container split">
          <div>
            <div className="sec-head">
              <div><span className="eyebrow">From the newsroom</span><h2>Erbil today</h2></div>
              <Link href="/#news" className="link-more">All news <Icon name="arrow" size={16} /></Link>
            </div>
            <div className="updates updates--flat">
              <ol>
                {latest.map((l) => (
                  <li key={l.title}><time>{l.time}</time><div><span className="tag">{l.tag}</span><a href="#">{l.title}</a></div></li>
                ))}
              </ol>
            </div>
          </div>
          <Link href="/discover#cities" className="pillar-card pillar-card--tall">
            <SmartVideo poster={photos.sulaymaniyah} alt="Sulaymaniyah" sizes="(max-width: 1024px) 100vw, 400px" className="ratio-4x5">
              <span className="pillar-card__shade" />
              <span className="pillar-card__text">
                <span className="tag tag--on-dark">Next city guide</span>
                <span className="pillar-card__title">Sulaymaniyah</span>
                <span className="pillar-card__sub">Poets, cafés and the Region’s cultural capital — coming soon.</span>
              </span>
            </SmartVideo>
          </Link>
        </div>
      </section>
    </>
  );
}
