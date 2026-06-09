import { leadership } from "@/lib/data/leadership";

export default function About() {
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
          <span className="eyebrow on-navy">Who we are</span>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: .96,
            color: '#fff', marginTop: 16, fontWeight: 500, letterSpacing: '-.02em',
          }}>
            About <span className="accent">GTO Illini</span>
          </h1>
        </div>
      </header>

      {/* ===== PROGRAMS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">01 — Programs</div>
            <h2>What <span className="accent">we do.</span></h2>
          </div>
          <div className="card-grid c3" style={{ marginTop: 44 }}>
            <div className="card hoverable" style={{ '--c': 'var(--orange)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Lecture · Weekly</span>
              <h4>GTO Theory</h4>
              <p>
                Regular lectures on a variety of poker topics, ranging from the basics
                to deep dives into advanced concepts. Check our events page so you
                don&apos;t miss any.
              </p>
              <a className="btn ghost" href="/events" style={{ marginTop: 'auto' }}>See schedule</a>
            </div>
            <div className="card hoverable" style={{ '--c': 'var(--ace)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Tools · Always on</span>
              <h4>Development</h4>
              <p>
                We constantly develop new poker learning software to make studying
                as accessible as possible. Check out the resources page to start
                using our tools.
              </p>
              <a className="btn ghost" href="/tools" style={{ marginTop: 'auto' }}>View tools</a>
            </div>
            <div className="card hoverable" style={{ '--c': 'var(--queen)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Competition · Regular</span>
              <h4>Competitions</h4>
              <p>
                Poker is difficult to study without practical experience, so we hold
                regular online competitions to sharpen your knowledge and test
                your skills.
              </p>
              <a className="btn ghost" href="/events" style={{ marginTop: 'auto' }}>See events</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="section navy tight" style={{ position: 'relative' }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-head">
            <div className="num">02 — Team</div>
            <h2>The <span className="accent">leadership.</span></h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 18,
            marginTop: 44,
          }}>
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="team-card"
                style={{ '--c': 'var(--orange)' } as React.CSSProperties}
              >
                <div className="photo">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="meta">
                  <div className="role">{leader.title}</div>
                  <div className="nm">{leader.name}</div>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                  >
                    <img src="/image-assets/LinkedIn_icon.svg" alt="" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONNECT ===== */}
      <section className="section tight">
        <div className="wrap">
          <div className="section-head">
            <div className="num">03 — Connect</div>
            <h2>Find us <span className="accent">online.</span></h2>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 36 }}>
            <a
              className="btn orange"
              href="https://www.instagram.com/gto_illini/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="btn"
              href="https://discord.com/invite/4ZZCqMRTwQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
