import type { Metadata } from 'next';
import { FadeIn, Reveal, Stagger, StaggerItem } from '../components/motion';

const roster = [
  { seat: '01', role: 'Captain',   name: 'Patrick Smith',  year: '4th year',  image: '/image-assets/leadership_photos/Patrick.webp',  color: 'var(--orange)' },
  { seat: '02', role: 'Player',    name: 'Gavin Wu',       year: 'PhD',        image: '/image-assets/leadership_photos/Gavin.webp',    color: 'var(--felt)'   },
  { seat: '03', role: 'Player',    name: 'Nathan Natoli',  year: 'Graduated',  image: '/image-assets/leadership_photos/Nathan.webp',   color: 'var(--ace)'    },
  { seat: '04', role: 'Player',    name: 'Eric Song',      year: '2nd year',   image: '/image-assets/leadership_photos/eric.png',      color: 'var(--queen)'  },
  { seat: '05', role: 'Player',    name: 'Dylan Wu',       year: 'Graduated',  image: '/image-assets/leadership_photos/dylan.jpg',     color: 'var(--felt-2)' },
];

export const metadata: Metadata = {
  title: 'Competitive Team',
  description:
    'Meet the GTO Illini competitive poker team representing the University of Illinois Urbana-Champaign (UIUC) in intercollegiate poker competition.',
  alternates: { canonical: '/competitive-team' },
};

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
          <FadeIn delay={0.05} y={14}>
            <span className="eyebrow on-navy">IPA Challengers Division · 2025–26</span>
          </FadeIn>
          <FadeIn delay={0.12} y={18}>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: .96,
              color: '#fff',
              marginTop: 16,
              fontWeight: 500,
              letterSpacing: '-.02em',
            }}>
              The Competitive <span className="accent">Team</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.19} y={16}>
            <p style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.55,
              maxWidth: 560,
              color: 'var(--on-navy-2)',
              marginTop: 20,
            }}>
              The roster who carried GTO Illini&apos;s colors through our debut intercollegiate
              season — earning the top regular-season seed and a finals appearance.
            </p>
          </FadeIn>

          <Stagger className="hero-stats" stagger={0.05} delay={0.26}>
            {[
              { k: 'Regular-season seed', v: 'No. 1' },
              { k: 'Points',              v: '222'         },
              { k: 'Playoff finish',      v: '2nd'         },
              { k: 'Roster',              v: '5'           },
            ].map(({ k, v }) => (
              <StaggerItem key={k} y={12}>
                <div style={{
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  fontSize: 10,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--on-navy-2)',
                  marginBottom: 6,
                }}>{k}</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: '#fff', letterSpacing: '-.01em' }}>{v}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </header>

      {/* ===== 01 LAST SEASON ===== */}
      <section className="section">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>01 — Last Season</StaggerItem>
            <StaggerItem as="h2" y={16}>How We <span className="accent">Played</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12}>
            A debut campaign in the IPA Challengers Division: first across the regular season,
            runners-up in the championship bracket.
          </Reveal>

          <Stagger className="stat-grid" stagger={0.04} style={{ marginTop: 48 }}>
            <StaggerItem className="stat">
              <div className="k">Regular season</div>
              <div className="n">1<span className="u">st</span></div>
              <div className="d">Top overall seed of the Challengers Division.</div>
            </StaggerItem>
            <StaggerItem className="stat">
              <div className="k">Points</div>
              <div className="n">222</div>
              <div className="d">Accumulated across the regular-season slate.</div>
            </StaggerItem>
            <StaggerItem className="stat">
              <div className="k">Playoffs</div>
              <div className="n">2<span className="u">nd</span></div>
              <div className="d">Division finalists in the championship bracket.</div>
            </StaggerItem>
          </Stagger>

          <Reveal as="p" y={10} style={{
            fontFamily: 'var(--font-ibm-plex-mono)',
            fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--muted)', marginTop: 52, marginBottom: 16,
          }}>{'// The finishes'}</Reveal>
          <Stagger className="card-grid c2" stagger={0.06}>
            <StaggerItem className="card" style={{ '--c': 'var(--orange)' } as React.CSSProperties}>
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
            </StaggerItem>
            <StaggerItem className="card" style={{ '--c': 'var(--felt-2)' } as React.CSSProperties}>
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
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ===== 02 ROSTER ===== */}
      <section className="section navy">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>02 — Roster</StaggerItem>
            <StaggerItem as="h2" y={16}>Meet The <span className="accent">Team</span></StaggerItem>
          </Stagger>
          <Stagger stagger={0.05} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 16,
            marginTop: 44,
          }}>
            {roster.map(({ seat, role, name, year, image, color }) => (
              <StaggerItem
                key={seat}
                className="team-card"
                style={{ '--c': color, color: 'var(--ink)' } as React.CSSProperties}
              >
                <div className="photo">
                  <img src={image} alt={name} />
                </div>
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
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{year}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== 03 JOIN ===== */}
      <section className="section tight" id="join">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>03 — Join</StaggerItem>
            <StaggerItem as="h2" y={16}>Interested In <span className="accent">Joining?</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12}>
            We&apos;re always looking for sharp, competitive players to grow the roster.
            No experience required — just the willingness to study!
            DM Patrick on discord or email{' '}
            <a
              href="mailto:membership@gtoillini.com"
              style={{ color: 'var(--orange)', textDecoration: 'underline' }}
            >
              membership@gtoillini.com
            </a>
            {' '}for more info.
          </Reveal>
          <Stagger stagger={0.04} style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
            <StaggerItem y={12}>
              <a
                className="btn orange"
                href="https://discord.com/invite/4ZZCqMRTwQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Discord
              </a>
            </StaggerItem>
            <StaggerItem y={12}>
              <a className="btn ghost" href="/events">
                See upcoming events
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

    </main>
  );
}
