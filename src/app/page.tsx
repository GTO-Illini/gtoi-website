import { leadership } from "@/lib/data/leadership";

export default function Home() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <header style={{
        background: 'var(--felt)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/image-assets/landing-page-slideshow/kevin_champ.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
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
            <a className="btn orange" href="/events">See events</a>
            <a className="btn on-navy" href="/sponsor">Become a sponsor</a>
          </div>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">01 — The Organization</div>
            <h2>Who <span className="accent">we are.</span></h2>
          </div>
          <p className="lede">
            GTO Illini was first established to help curious students learn the deep and
            fascinating strategy that poker has to offer. Now we are defining the new
            standard in the college competitive poker scene.
          </p>

          <div className="stat-grid" style={{ marginTop: 56 }}>
            <div className="stat">
              <div className="k">Members</div>
              <div className="n">300<span className="u">+</span></div>
              <div className="d">Active members, and counting.</div>
            </div>
            <div className="stat">
              <div className="k">Composition</div>
              <div className="n">60<span className="u">%+</span></div>
              <div className="d">Studying CS, ECE, Math, Stats, and Finance.</div>
            </div>
            <div className="stat">
              <div className="k">Est.</div>
              <div className="n">2024</div>
              <div className="d">2 years running tournaments and theory sessions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="section navy">
        <div className="wrap">
          <div className="section-head">
            <div className="num">02 — Program</div>
            <h2>How <span className="accent">we play.</span></h2>
          </div>
          <p className="lede">
            Study, practice, and compete. 
          </p>
          <div className="card-grid c3" style={{ marginTop: 44 }}>
            <div className="card hoverable" style={{ '--c': 'var(--orange)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Lecture · Weekly</span>
              <h4>GTO Theory</h4>
              <p>Curriculum-based lectures on ranges, equity, blockers, and solver-driven play.</p>
            </div>
            <div className="card hoverable" style={{ '--c': 'var(--ace)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Lab · Weekly</span>
              <h4>Live Tournaments</h4>
              <p>Weekly tournaments to put theory and skills to the test under real pressure.</p>
              <a className="btn ghost" href="/events" style={{ marginTop: 'auto' }}>See schedule</a>
            </div>
            <div className="card hoverable" style={{ '--c': 'var(--queen)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Competition · Monthly</span>
              <h4>Intercollegiate Play</h4>
              <p>Campus-wide events and competing in the Intercollegiate Poker League.</p>
              <a className="btn ghost" href="/events" style={{ marginTop: 'auto' }}>See events</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="section tight">
        <div className="wrap">
          <div className="section-head">
            <div className="num">03 — Leadership</div>
            <h2>The <span className="accent">table.</span></h2>
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

      {/* ===== JOIN US ===== */}
      <section className="section navy tight">
        <div className="wrap">
          <div className="section-head">
            <div className="num">04 — Community</div>
            <h2>Join <span className="accent">us.</span></h2>
          </div>
          <p className="lede">No experience required. Show up, learn the game, and start climbing the leaderboard.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
            <a
              className="btn orange"
              href="https://discord.com/invite/4ZZCqMRTwQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord
            </a>
            <a
              className="btn on-navy"
              href="https://www.instagram.com/gto_illini/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
