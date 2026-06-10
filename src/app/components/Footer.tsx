import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="row">
              <img src="/image-assets/GTOIlliniLogoSuits.png" alt="GTO Illini" />
              <div>
                <span className="name">GTO ILLINI</span>
                <span className="tag">{"// Game Theory Optimal @ UIUC"}</span>
              </div>
            </div>
            <p>The premier poker organization at the University of Illinois Urbana-Champaign.</p>
          </div>
          <div className="foot-col">
            <h5>Explore</h5>
            <Link href="/events">Events</Link>
            <Link href="/competitive-team">Competitive Team</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/merch">Merch</Link>
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            <a href="https://www.instagram.com/gto_illini/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://discord.com/invite/4ZZCqMRTwQ" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
          <div className="foot-col">
            <h5>Get in touch</h5>
            <a href="mailto:corporate-outreach@gtoillini.com">corporate-outreach@gtoillini.com</a>
            <p>University of Illinois<br />Urbana-Champaign</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} GTO Illini · All rights reserved</span>
          <span>Game Theory Optimal · ♠ ♥ ♣ ♦</span>
        </div>
      </div>
    </footer>
  );
}
