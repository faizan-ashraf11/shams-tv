import Link from 'next/link';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <NewsletterForm />
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>Live news, programmes and stories from Erbil, Kurdistan — for viewers at home and around the world.</p>
            <div className="footer__social">
              <a href="#">YouTube</a><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">X</a>
            </div>
          </div>
          <div className="footer__col">
            <h3>News</h3>
            <Link href="/#news">Top stories</Link><Link href="/#latest">Latest</Link><Link href="/#news">Economy</Link><Link href="/#news">Culture</Link>
          </div>
          <div className="footer__col">
            <h3>Watch</h3>
            <Link href="/programs">Programmes</Link><Link href="/programs#schedule">Schedule</Link><Link href="/#shorts">Shorts</Link><Link href="/#on-air">Live TV</Link>
          </div>
          <div className="footer__col">
            <h3>Discover</h3>
            <Link href="/discover">Kurdistan</Link><Link href="/discover/erbil">Erbil</Link><Link href="/discover#invest">Invest</Link><Link href="/discover#plan">Plan a trip</Link>
          </div>
          <div className="footer__col">
            <h3>Satellite</h3>
            <p className="footer__freq mono">Nilesat 201 · 11470 V<br />Eutelsat 7WA · 11353 H<br />iOS · Android · TV apps</p>
          </div>
        </div>
      </div>
      <div className="footer__word" aria-hidden="true">Shams</div>
      <div className="container">
        <div className="footer__base">
          <span>© 2026 Shams TV, Erbil. Prototype — sample content. Footage: Pexels · Photos: Unsplash.</span>
          <nav aria-label="Legal"><a href="#">About</a><a href="#">Careers</a><a href="#">Advertise</a><a href="#">Contact</a><a href="#">Privacy</a></nav>
        </div>
      </div>
    </footer>
  );
}
