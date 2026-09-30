import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import HomeHero from '@/components/HomeHero';
import TvGuide from '@/components/TvGuide';
import ShortsRail from '@/components/ShortsRail';
import SectionHead from '@/components/SectionHead';
import VideoCard from '@/components/video/VideoCard';
import SmartVideo from '@/components/video/SmartVideo';
import { stories, latest, mostRead, moreNews, shorts, programs, pillars, clips } from '@/lib/content';

const featured = programs.filter((p) => ['chaikhana', 'second-generation', 'roads'].includes(p.slug));
const [feature, ...rest] = stories;

export default function Home() {
  return (
    <>
      {/* 1. Front page — lead story + live channel */}
      <HomeHero />

      {/* 2. Today — editorial bento: one lead, supporting stories, live updates */}
      <section className="section" id="news">
        <div className="container">
          <SectionHead index="01" label="Today" title={<>The day’s <em>stories</em></>}>
            <a href="#" className="link-more">All news <Icon name="arrow" size={16} /></a>
          </SectionHead>

          <div className="today">
            <article className="story story--feature reveal">
              <VideoCard clip={feature.clip} poster={feature.img} ratio="4x3" duration={feature.duration} kicker={feature.tag} sizes="(max-width: 1024px) 100vw, 640px" />
              <div className="story__body">
                <span className="tag">{feature.tag}</span>
                <h3 className="story__title"><a href="#">{feature.title}</a></h3>
                {feature.dek && <p className="story__dek">{feature.dek}</p>}
                <span className="meta mono"><Icon name="clock" size={13} />{feature.time}</span>
              </div>
            </article>

            {rest.slice(0, 2).map((s) => (
              <article key={s.title} className="story reveal">
                <VideoCard clip={s.clip} poster={s.img} ratio="3x2" duration={s.duration} kicker={s.tag} sizes="(max-width: 768px) 100vw, 360px" />
                <div className="story__body">
                  <span className="tag">{s.tag}</span>
                  <h3 className="story__title"><a href="#">{s.title}</a></h3>
                  <span className="meta mono"><Icon name="clock" size={13} />{s.time}</span>
                </div>
              </article>
            ))}

            {rest.slice(2).map((s) => (
              <article key={s.title} className="story story--wide reveal">
                <VideoCard clip={s.clip} poster={s.img} ratio="3x2" duration={s.duration} kicker={s.tag} sizes="(max-width: 768px) 100vw, 320px" />
                <div className="story__body">
                  <span className="tag">{s.tag}</span>
                  <h3 className="story__title"><a href="#">{s.title}</a></h3>
                  {s.dek && <p className="story__dek">{s.dek}</p>}
                  <span className="meta mono"><Icon name="clock" size={13} />{s.time}</span>
                </div>
              </article>
            ))}

            <aside className="updates" id="latest" aria-label="Latest updates">
              <div className="updates__head">
                <h3>Latest</h3>
                <span className="updates__live"><span className="dot dot--pulse" />Live</span>
              </div>
              <ol>
                {latest.map((l) => (
                  <li key={l.title}>
                    <time className="mono">{l.time}</time>
                    <div><span className="tag">{l.tag}</span><a href="#">{l.title}</a></div>
                  </li>
                ))}
              </ol>
              <a href="#" className="btn btn--outline btn--block">All updates <Icon name="arrow" size={16} /></a>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. On air — timeline guide + flagship programmes */}
      <section className="section section--night" id="on-air">
        <div className="container">
          <TvGuide />

          <div className="subhead">
            <h3>Made in Erbil</h3>
            <Link href="/programs" className="link-more">All programmes <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="grid-3">
            {featured.map((p) => (
              <article key={p.slug} className="show reveal">
                <VideoCard clip={p.clip} poster={p.clip.poster} ratio="4x5" kicker={p.title} mode="auto" sizes="(max-width: 768px) 100vw, 420px">
                  <span className="show__shade" />
                  <span className="show__text">
                    <span className="show__when mono">{p.kind} · {p.when}</span>
                    <span className="show__title">{p.title}</span>
                    <span className="show__blurb">{p.blurb}</span>
                  </span>
                </VideoCard>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shorts — vertical video for phones and the diaspora's feeds */}
      <section className="section section--black" id="shorts">
        <div className="container">
          <SectionHead index="03" label="Shams Shorts" title={<>Kurdistan in <em>60 seconds</em></>} dek="Hover to preview, tap to watch. New every day." />
        </div>
        <ShortsRail items={shorts} />
      </section>

      {/* 5. More news + most read */}
      <section className="section">
        <div className="container split">
          <div>
            <SectionHead index="04" label="More news" title={<>Across the <em>Region</em></>} />
            <div className="list-cards">
              {moreNews.map((s) => (
                <a key={s.title} href="#" className="list-card reveal">
                  <span className="list-card__img"><Image src={s.img} alt="" fill sizes="200px" /></span>
                  <span className="list-card__body">
                    <span className="tag">{s.tag}</span>
                    <span className="list-card__title">{s.title}</span>
                    <span className="meta mono"><Icon name="clock" size={13} />{s.time}</span>
                  </span>
                  <Icon name="arrow" size={20} className="list-card__arrow" />
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

      {/* 6. Discover Kurdistan — a distinct chapter lower on the page: an entry point, never competing with news */}
      <section className="gateway" aria-labelledby="discover-title">
        <svg className="gateway__arc" viewBox="0 0 1200 600" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
          <path d="M40 600 A560 520 0 0 1 1160 600" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 7" />
          <path d="M200 600 A400 380 0 0 1 1000 600" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="container">
          <div className="gateway__top">
            <div className="gateway__copy">
              <span className="kicker"><span className="kicker__index">05</span>Discover Kurdistan</span>
              <h2 id="discover-title">Six thousand years old. <em>An hour from the mountains.</em></h2>
              <p>Safe, green and one of the oldest inhabited places on earth. Culture, travel and investment — from the newsroom that covers the Region every day.</p>
              <Link href="/discover" className="btn btn--dark btn--lg">Explore Kurdistan <Icon name="arrow" size={18} /></Link>
            </div>
            <figure className="gateway__film">
              <SmartVideo clip={clips.erbilAerial} poster={clips.erbilAerial.poster} mode="view" sizes="(max-width: 1024px) 100vw, 560px" className="ratio-4x3" />
              <figcaption className="mono"><span>Erbil, Kurdistan Region</span><span>36.19°N · 44.01°E</span></figcaption>
            </figure>
          </div>

          <dl className="gateway__stats">
            <div><dt>Years of life on the Erbil Citadel</dt><dd>6,000<sup>+</sup></dd></div>
            <div><dt>Cheekha Dar, Iraq’s highest peak</dt><dd>3,611<sup>m</sup></dd></div>
            <div><dt>From the capital to the mountains</dt><dd>~1<sup>hr</sup></dd></div>
          </dl>

          <div className="panels">
            {pillars.map((p, i) => (
              <Link key={p.slug} href={`/discover#${p.slug}`} className="panel">
                <SmartVideo clip={p.clip} poster={p.img} mode="hover" sizes="(max-width: 768px) 100vw, 50vw" className="panel__media">
                  <span className="panel__shade" />
                </SmartVideo>
                <span className="panel__text">
                  <span className="panel__i mono">0{i + 1} · {p.label}</span>
                  <span className="panel__title">{p.title}</span>
                  <span className="panel__copy">{p.copy}</span>
                </span>
                <span className="panel__go" aria-hidden="true"><Icon name="arrow" size={18} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
