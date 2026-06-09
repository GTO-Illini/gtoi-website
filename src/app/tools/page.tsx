export default function Tools() {
  return (
    <main>

      {/* ===== PAGE HEADER ===== */}
      <header style={{
        background: 'var(--felt)', color: 'var(--on-navy)',
        padding: 'clamp(40px, 6vw, 72px) 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', right: -30, bottom: -90,
          fontSize: 340, lineHeight: 1, color: '#fff', opacity: .045,
          pointerEvents: 'none', userSelect: 'none',
        }}>♠</div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow on-navy">Resources</span>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: .96,
            color: '#fff', marginTop: 16, fontWeight: 500, letterSpacing: '-.02em',
          }}>
            GTO <span className="accent">Tools</span>
          </h1>
        </div>
      </header>

      {/* ===== RESOURCES ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">01 — Tools</div>
            <h2>Poker <span className="accent">resources.</span></h2>
          </div>
          <div className="card-grid c2" style={{ marginTop: 44 }}>

            <div className="card" style={{ '--c': 'var(--orange)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Coming Soon</span>
              <h4>Poker Solver</h4>
              <p>Our in-house poker solver tool is in development. Stay tuned.</p>
            </div>

            <div className="card" style={{ '--c': 'var(--ace)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Available Now</span>
              <h4>Poker Lecture Videos</h4>
              <p>Enjoy Game of Gold for now :D</p>
              <div style={{ marginTop: 12, borderRadius: 4, overflow: 'hidden' }}>
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/videoseries?si=h3vtVULrP-6NGfPi&amp;list=PL0WnRS5vmGNqcdyUBBpEbMDFOstSSxoaV"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
