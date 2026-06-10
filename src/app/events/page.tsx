export default function Events() {
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
          <span className="eyebrow on-navy">Schedule</span>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: .96,
            color: '#fff', marginTop: 16, fontWeight: 500, letterSpacing: '-.02em',
          }}>
            The <span className="accent">season.</span>
          </h1>
        </div>
      </header>

      {/* ===== WEEKLY RECURRING ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">01 — Recurring</div>
            <h2>Every <span className="accent">week.</span></h2>
          </div>
          <div className="weekly-grid" style={{ marginTop: 40 }}>
            <div className="weekly" style={{ '--c': 'var(--king)' } as React.CSSProperties}>
              <div className="id">1.1.1 · Theory · Weekly</div>
              <h4>Thursday Lectures</h4>
              <div className="when">Thu · Solver labs &amp; GTO theory · <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>time / room TBD</span></div>
            </div>
            <div className="weekly" style={{ '--c': 'var(--joker)' } as React.CSSProperties}>
              <div className="id">1.1.2 · Tournament · Weekly</div>
              <h4>Tuesday Tournaments</h4>
              <div className="when">Tue · Live in-person play · <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>time / room TBD</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE EVENTS ===== */}
      <section className="section navy">
        <div className="wrap">
          <div className="section-head">
            <div className="num">02 — Marquee</div>
            <h2>Tentpole <span className="accent">events.</span></h2>
          </div>
          <p className="lede">
            The big ones — title-sponsorable tournaments across the fall and spring terms.
          </p>

          <div style={{ marginTop: 40 }}>
            <div className="tl-row">
              <div className="tl-date"><b>OCT</b><span>Fall</span></div>
              <div className="tl-main">
                <div className="kind">1.2.1 · Queen's Full</div>
                <h4>Queen's Full Tournament</h4>
                <p>Mid-season open tournament.</p>
              </div>
              <div className="tl-tag">Sponsorable</div>
            </div>
            <div className="tl-row">
              <div className="tl-date"><b>NOV</b><span>Fall</span></div>
              <div className="tl-main">
                <div className="kind">1.2.3 · Classic</div>
                <h4>GTO Illini Fall Poker Classic</h4>
                <p>Flagship fall championship.</p>
              </div>
              <div className="tl-tag">Title event</div>
            </div>
            <div className="tl-row">
              <div className="tl-date"><b>MAR</b><span>Spring</span></div>
              <div className="tl-main">
                <div className="kind">1.2.2 · Tag-Team</div>
                <h4>Tag-Team Tournament</h4>
                <p>Partners format, fan favorite.</p>
              </div>
              <div className="tl-tag">Sponsorable</div>
            </div>
            <div className="tl-row">
              <div className="tl-date"><b>APR</b><span>Spring</span></div>
              <div className="tl-main">
                <div className="kind">1.2.4 · Classic</div>
                <h4>GTO Illini Spring Poker Classic</h4>
                <p>Season-ending championship.</p>
              </div>
              <div className="tl-tag">Title event</div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
