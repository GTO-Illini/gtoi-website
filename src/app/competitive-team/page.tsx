const roster = [
  { seat: '01', role: 'Captain', name: 'First Last', color: 'var(--orange)' },
  { seat: '02', role: 'Player',  name: 'First Last', color: 'var(--felt)'   },
  { seat: '03', role: 'Player',  name: 'First Last', color: 'var(--ace)'    },
  { seat: '04', role: 'Player',  name: 'First Last', color: 'var(--queen)'  },
  { seat: '05', role: 'Player',  name: 'First Last', color: 'var(--felt-2)' },
];

export default function CompetitiveTeam() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <header style={{
        background: 'var(--felt)',
        color: 'var(--on-navy)',
        padding: 'clamp(48px, 7vw, 88px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
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

        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow on-navy">IPA Challengers Division · 2025–26</span>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: .96,
            color: '#fff',
            marginTop: 16,
            fontWeight: 500,
            letterSpacing: '-.02em',
          }}>
            The competitive <span className="accent">team.</span>
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.55,
            maxWidth: 560,
            color: 'var(--on-navy-2)',
            marginTop: 20,
          }}>
            The five players who carried GTO Illini&apos;s colors through our debut intercollegiate
            season — earning the top regular-season seed and a finals appearance.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, auto)',
            gap: '0 36px',
            width: 'fit-content',
            marginTop: 40,
            paddingTop: 28,
            borderTop: '1px solid var(--on-navy-rule)',
          }}>
            {[
              { k: 'Regular-season seed', v: 'No. 1' },
              { k: 'Points',              v: '222'         },
              { k: 'Playoff finish',      v: '2nd'         },
              { k: 'Roster',              v: '5'           },
            ].map(({ k, v }) => (
              <div key={k}>
                <div style={{
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  fontSize: 10,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--on-navy-2)',
                  marginBottom: 6,
                }}>{k}</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: '#fff', letterSpacing: '-.01em' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ===== 01 LAST SEASON ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">01 — Last Season</div>
            <h2>How we <span className="accent">played.</span></h2>
          </div>
          <p className="lede">
            A debut campaign in the IPA Challengers Division: first across the regular season,
            runners-up in the championship bracket.
          </p>

          <div className="stat-grid" style={{ marginTop: 48 }}>
            <div className="stat">
              <div className="k">Regular season</div>
              <div className="n">1<span className="u">st</span></div>
              <div className="d">Top overall seed of the Challengers Division.</div>
            </div>
            <div className="stat">
              <div className="k">Points</div>
              <div className="n">222</div>
              <div className="d">Accumulated across the regular-season slate.</div>
            </div>
            <div className="stat">
              <div className="k">Playoffs</div>
              <div className="n">2<span className="u">nd</span></div>
              <div className="d">Division finalists in the championship bracket.</div>
            </div>
          </div>

          <p style={{
            fontFamily: 'var(--font-ibm-plex-mono)',
            fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--muted)', marginTop: 52, marginBottom: 16,
          }}>{'// The finishes'}</p>
          <div className="card-grid c2">
            <div className="card" style={{ '--c': 'var(--orange)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Regular Season</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
                <b style={{ fontSize: 38, fontWeight: 500, lineHeight: 1, letterSpacing: '-.02em', color: 'var(--orange)' }}>
                  1<sup style={{ fontSize: '.42em' }}>st</sup>
                </b>
                <span style={{ fontSize: 16, color: 'var(--ink)', fontWeight: 500 }}>Seed — Challengers Division</span>
              </div>
              <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
                222 points · No. 1 overall
              </div>
            </div>
            <div className="card" style={{ '--c': 'var(--felt-2)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Playoffs</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
                <b style={{ fontSize: 38, fontWeight: 500, lineHeight: 1, letterSpacing: '-.02em', color: 'var(--felt-2)' }}>
                  2<sup style={{ fontSize: '.42em' }}>nd</sup>
                </b>
                <span style={{ fontSize: 16, color: 'var(--ink)', fontWeight: 500 }}>Place — Division Finalists</span>
              </div>
              <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
                Runner-up · championship bracket
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 ROSTER ===== */}
      <section className="section navy">
        <div className="wrap">
          <div className="section-head">
            <div className="num">02 — Roster</div>
            <h2>Meet the <span className="accent">five.</span></h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 16,
            marginTop: 44,
          }}>
            {roster.map(({ seat, role, name, color }) => (
              <div
                key={seat}
                className="team-card"
                style={{ '--c': color, color: 'var(--ink)' } as React.CSSProperties}
              >
                <div className="photo" />
                <div className="meta">
                  <div style={{
                    fontFamily: 'var(--font-ibm-plex-mono)',
                    fontSize: '9.5px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: 6,
                  }}>Seat {seat}</div>
                  <div className="role">{role}</div>
                  <div className="nm">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 03 JOIN ===== */}
      <section className="section tight" id="join">
        <div className="wrap">
          <div className="section-head">
            <div className="num">03 — Join</div>
            <h2>Interested in <span className="accent">joining?</span></h2>
          </div>
          <p className="lede">
            We&apos;re always looking for sharp, competitive players to grow the roster.
            No experience required — bring the willingness to study, and we&apos;ll handle the rest.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
            <a
              className="btn orange"
              href="https://discord.com/invite/4ZZCqMRTwQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord
            </a>
            <a className="btn ghost" href="/events">
              See upcoming events
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
