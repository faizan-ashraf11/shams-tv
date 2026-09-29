import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import HomeHero from '@/components/HomeHero';
import TvGuide from '@/components/TvGuide';
import ShortsRail from '@/components/ShortsRail';
import VideoCard from '@/components/video/VideoCard';
import SmartVideo from '@/components/video/SmartVideo';
import { stories, latest, mostRead, moreNews, shorts, programs, pillars, clips } from '@/lib/content';

const featured = programs.filter((p) => ['chaikhana', 'second-generation', 'roads'].includes(p.slug));

export default function Home() {
  return (
    <>
      {/* 1. Cinematic, news-led hero: lead story + live channel */}
      <HomeHero />

      {/* 2. Today — the day's stories + live updates */}
      <section className="section" id="news">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Today</span>
              <h2>The day’s stories</h2>
            </div>
            <a href="#" className="link-more">All news <Icon name="arrow" size={16} /></a>
          </div>
          <div className="today">
            <div className="today__grid">
              {stories.map((s) => (
                <article key={s.title} className="story reveal">
                  <VideoCard clip={s.clip} poster={s.img} ratio="3x2" duration={s.duration} kicker={s.tag} sizes="(max-width: 768px) 100vw, 400px" />
                  <span className="tag">{s.tag}</span>
                  <h3 className="story__title"><a href="#">{s.title}</a></h3>
                  {s.dek && <p className="story__dek">{s.dek}</p>}
                  <span className="meta"><Icon name="clock" size={14} />{s.time}</span>
                </article>
              ))}
            </div>
            <aside className="updates" id="latest" aria-label="Latest updates">
              <div className="updates__head">
                <h3>Latest</h3>
                <span className="updates__live"><span className="dot dot--pulse" />Live updates</span>
              </div>
              <ol>
                {latest.map((l) => (
                  <li key={l.title}>
                    <time>{l.time}</time>
                    <div><span className="tag">{l.tag}</span><a href="#">{l.title}</a></div>
                  </li>
                ))}
              </ol>
              <a href="#" className="btn btn--outline btn--block">All updates</a>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Shorts — vertical video for phones and the diaspora's feeds */}
      <section className="section section--dark" id="shorts">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Shams Shorts</span>
              <h2>Kurdistan in 60 seconds</h2>
              <p>Hover to preview, tap to watch. New every day.</p>
            </div>
          </div>
        </div>
        <ShortsRail items={shorts} />
      </section>

      {/* 4. What's on — TV guide + programmes */}
      <section className="section section--ink" id="on-air">
        <div className="container">
          <TvGuide />
          <div className="sec-head sec-head--spaced">
            <div>
              <span className="eyebrow">Programmes</span>
              <h2>Made in Erbil</h2>
            </div>
            <Link href="/programs" className="link-more">All programmes <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="grid-3">
            {featured.map((p) => (
              <article key={p.slug} className="show reveal">
                <VideoCard clip={p.clip} poster={p.clip.poster} ratio="4x5" kicker={p.title} mode="auto" sizes="(max-width: 768px) 100vw, 420px">
                  <span className="show__shade" />
                  <span className="show__text">
                    <span className="tag tag--on-dark">{p.kind} · {p.when}</span>
                    <span className="show__title">{p.title}</span>
                    <span className="show__blurb">{p.blurb}</span>
                  </span>
                </VideoCard>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. More news + most read */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="sec-head"><div><span className="eyebrow">More news</span><h2>Across the Region</h2></div></div>
            <div className="list-cards">
              {moreNews.map((s) => (
                <a key={s.title} href="#" className="list-card reveal">
                  <span className="list-card__img"><Image src={s.img} alt="" fill sizes="180px" /></span>
                  <span>
                    <span className="tag">{s.tag}</span>
                    <span className="list-card__title">{s.title}</span>
                    <span className="meta"><Icon name="clock" size={14} />{s.time}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <aside className="most-read">
            <h3>Most read</h3>
            <ol>{mostRead.map((t) => <li key={t}><a href="#">{t}</a></li>)}</ol>
          </aside>
        </div>
      </section>

      {/* 6. Discover Kurdistan — lower on the page, an entry point to its own section */}
      <section className="discover-band" aria-labelledby="discover-title">
        <SmartVideo clip={clips.erbilAerial} poster={clips.erbilAerial.poster} mode="background" sizes="100vw" className="discover-band__bg" />
        <div className="discover-band__shade" />
        <div className="container discover-band__in">
          <div className="discover-band__copy">
            <span className="eyebrow eyebrow--sun">Discover Kurdistan</span>
            <h2 id="discover-title">Beyond the headlines</h2>
            <p>Safe, mountainous and one of the oldest inhabited places on earth. Culture, travel and investment — from the newsroom that covers the Region every day.</p>
            <div className="discover-band__stats">
              <div><b>6,000+</b><span>years of life on the Erbil Citadel</span></div>
              <div><b>3,611 m</b><span>Cheekha Dar, Iraq’s highest peak</span></div>
              <div><b>~1 hr</b><span>from the capital to the mountains</span></div>
            </div>
            <Link href="/discover" className="btn btn--sun btn--lg">Explore Kurdistan <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="discover-band__cards">
            {pillars.map((p) => (
              <Link key={p.slug} href={`/discover#${p.slug}`} className="pillar-card">
                <SmartVideo clip={p.clip} poster={p.img} mode="hover" sizes="(max-width: 768px) 50vw, 240px" className="ratio-4x5">
                  <span className="pillar-card__shade" />
                  <span className="pillar-card__text">
                    <span className="tag tag--on-dark">{p.label}</span>
                    <span className="pillar-card__title">{p.title}</span>
                  </span>
                </SmartVideo>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
