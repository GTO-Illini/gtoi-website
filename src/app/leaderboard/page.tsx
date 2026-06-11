import Link from 'next/link';
import { FadeIn, Reveal, Stagger, StaggerItem } from '../components/motion';

export default function Leaderboard() {
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
          position: 'absolute', left: -60, top: -100,
          fontSize: 440, lineHeight: 1, color: 'var(--orange)', opacity: 0.08,
          pointerEvents: 'none', userSelect: 'none',
        }}>♦</div>
        <div aria-hidden style={{
          position: 'absolute', right: -40, bottom: -140,
          fontSize: 460, lineHeight: 1, color: '#fff', opacity: 0.04,
          pointerEvents: 'none', userSelect: 'none',
        }}>♠</div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn delay={0.05} y={14}>
            <span className="eyebrow on-navy">Season 2026–27 · Current Season</span>
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
              Club <span className="accent">Leaderboard</span>
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
              Cumulative chip counts across all sanctioned GTO Illini sessions.
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ===== COMING SOON ===== */}
      <section className="section">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>01 — Rankings</StaggerItem>
            <StaggerItem as="h2" y={16}>Season <span className="accent">Standings</span></StaggerItem>
          </Stagger>

          <Reveal y={20} style={{
            marginTop: 44,
            background: 'var(--paper)',
            border: '1px solid var(--rule)',
            borderTop: '3px solid var(--felt)',
            borderRadius: 4,
            padding: 'clamp(48px, 8vw, 96px) 40px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}>
            <div aria-hidden style={{
              fontSize: 72,
              lineHeight: 1,
              color: 'var(--rule)',
              userSelect: 'none',
            }}>♠</div>
            <div style={{
              fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
              fontSize: 11,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              <span style={{ color: 'var(--orange)' }}>{'//'}</span> Coming Soon
            </div>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 38px)',
              color: 'var(--ink)',
              fontWeight: 500,
              letterSpacing: '-.015em',
              maxWidth: 480,
            }}>
              Coming in the 2026–27 GTO Illini Season
            </h2>
            <p style={{
              fontSize: 15,
              color: 'var(--muted)',
              maxWidth: 400,
              lineHeight: 1.6,
            }}>
              Rankings will be posted here once the season kicks off.
              Check back soon.
            </p>
          </Reveal>

          {/* Past leaderboards CTA */}
          <Reveal y={16} style={{
            marginTop: 40,
            paddingTop: 32,
            borderTop: '1px solid var(--rule)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 14,
          }}>
            <div style={{
              fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
              fontSize: 10,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 2,
            }}>
              <span style={{ color: 'var(--orange)' }}>{'//'}</span> Previous seasons
            </div>
            <div style={{ fontSize: 15, color: 'var(--ink-2)' }}>
              View final standings from past GTO Illini seasons.
            </div>
            <Link href="/leaderboard/past" className="btn ghost">
              2025–2026 Leaderboard
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
