export default function Home() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <header style={{
        background: 'var(--felt)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* hero image as subtle overlay */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/image-assets/landing-page-slideshow/kevin_champ.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
        {/* suit watermarks */}
        <div aria-hidden style={{
          position: 'absolute', left: -50, top: -120,
          fontSize: 420, lineHeight: 1, color: 'var(--orange)', opacity: 0.10,
          pointerEvents: 'none', userSelect: 'none',
        }}>♣</div>
        <div aria-hidden style={{
          position: 'absolute', right: -40, bottom: -140,
          fontSize: 460, lineHeight: 1, color: '#fff', opacity: 0.04,
          pointerEvents: 'none', userSelect: 'none',
        }}>♠</div>

        <div className="wrap" style={{
          position: 'relative', zIndex: 2,
          paddingBlock: 'clamp(64px, 10vw, 128px)',
        }}>
          <span className="eyebrow on-navy">Game Theory Optimal @ UIUC</span>
          <h1 style={{
            fontFamily: 'var(--font-jqkas-wild), sans-serif',
            fontSize: 'clamp(52px, 8vw, 104px)',
            lineHeight: .92,
            letterSpacing: '-.03em',
            fontWeight: 400,
            marginTop: 22,
            color: '#fff',
          }}>
            GTO Illini
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            lineHeight: 1.5,
            maxWidth: 520,
            color: 'var(--on-navy-2)',
            marginTop: 26,
            paddingLeft: 18,
            borderLeft: '2px solid var(--orange)',
          }}>
            Poker at the University of Illinois
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <a className="btn orange" href="/about">Who we are</a>
            <a className="btn on-navy" href="/events">See events</a>
          </div>
        </div>
      </header>

      {/* ===== ABOUT TEASER ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">01 — About</div>
            <h2>What is <span className="accent">GTO Illini?</span></h2>
          </div>
          <p className="lede">
            GTO Illini is the premier poker organization at the University of Illinois,
            dedicated to fostering a community of strategic thinking and competitive gameplay.
            We focus on teaching Game Theory Optimal (GTO) poker strategies, organizing
            tournaments, and creating opportunities for students to develop their analytical
            and decision-making skills through the lens of poker.
          </p>
          <div style={{ marginTop: 36 }}>
            <a className="btn" href="/about">Learn more</a>
          </div>
        </div>
      </section>

    </main>
  );
}
