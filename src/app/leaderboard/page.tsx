import Link from 'next/link';
import type { Metadata } from 'next';
import { FadeIn, Reveal, Stagger, StaggerItem } from '../components/motion';
import { standings } from './standings';

const UPDATED = '8/30/26';
const EVENTS = Math.max(...standings.map(p => p.events));
const MEDALS: Record<number, string> = { 1: 'var(--ace)', 2: '#9ca3af', 3: '#b07a50' };

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
  letterSpacing: '.04em',
};

const row: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '52px 1fr 110px 80px 100px',
  alignItems: 'center',
  gap: 12,
  padding: '13px 20px',
};

const top3 = standings.slice(0, 3);
const rest = standings.slice(3);

export const metadata: Metadata = {
  title: 'Leaderboard & Standings',
  description:
    'Tournament standings and the all-time leaderboard for GTO Illini, the UIUC poker club at the University of Illinois Urbana-Champaign.',
  alternates: { canonical: '/leaderboard' },
};

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
              Cumulative season points across all sanctioned GTO Illini tournaments.
            </p>
          </FadeIn>

          <Stagger className="hero-stats" stagger={0.05} delay={0.26}>
            {[
              { k: 'Season', v: '2026–27' },
              { k: 'Players ranked', v: standings.length.toString() },
              { k: 'Tournaments', v: EVENTS.toString() },
              { k: 'Leader', v: standings[0].name.split(' ')[0] },
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

      {/* ===== STANDINGS ===== */}
      <section className="section">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>01 — Rankings</StaggerItem>
            <StaggerItem as="h2" y={16}>Season <span className="accent">Standings</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12} style={{ marginBottom: 0 }}>
            Season points across {EVENTS} sanctioned tournament{EVENTS === 1 ? '' : 's'} — last updated {UPDATED}.
          </Reveal>

          {/* Podium — top 3 */}
          <Stagger stagger={0.06} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 44,
          }}>
            {top3.map(p => (
              <StaggerItem key={p.netid} className="card" style={{ '--c': MEDALS[p.rank] } as React.CSSProperties}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="tag">
                    <span className="dot" />
                    {p.rank === 1 ? '1st Place' : p.rank === 2 ? '2nd Place' : '3rd Place'}
                  </span>
                </div>
                <div style={{
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  fontWeight: 500,
                  color: 'var(--ink)',
                  letterSpacing: '-.01em',
                  marginTop: 6,
                }}>{p.name}</div>
                <div style={{ ...mono, fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>
                  {p.points.toLocaleString('en-US')} pts · {p.netid}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Full table */}
          <Reveal y={20} style={{
            marginTop: 32,
            background: 'var(--paper)',
            border: '1px solid var(--rule)',
            borderRadius: 4,
            overflow: 'hidden',
          }}>
            <div style={{
              ...row,
              background: 'var(--bg-2)',
              borderBottom: '2px solid var(--rule)',
              padding: '10px 20px',
            }}>
              {(['#', 'Name', 'NetID', 'Events', 'Points'] as const).map((col, i) => (
                <div key={col} style={{
                  ...mono,
                  fontSize: 10,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  textAlign: i === 0 || i >= 3 ? 'right' : 'left',
                }}>
                  {col === '#' ? <><span style={{ color: 'var(--orange)', opacity: .9 }}>{'//'}</span> {col}</> : col}
                </div>
              ))}
            </div>

            {rest.map((p, idx) => (
              <div key={p.netid} style={{
                ...row,
                background: idx % 2 === 0 ? 'var(--paper)' : 'var(--bg)',
                borderBottom: idx === rest.length - 1 ? 'none' : '1px solid var(--rule)',
              }}>
                <div style={{ ...mono, fontSize: 13, textAlign: 'right', color: 'var(--muted)', fontWeight: 700 }}>
                  {p.rank}
                </div>
                <div style={{ fontSize: 14.5, color: 'var(--ink)' }}>{p.name}</div>
                <div style={{ ...mono, fontSize: 12, color: 'var(--muted)' }}>{p.netid}</div>
                <div style={{ ...mono, fontSize: 13, textAlign: 'right', color: 'var(--muted)' }}>{p.events}</div>
                <div style={{
                  ...mono,
                  fontSize: 13,
                  textAlign: 'right',
                  color: p.points > 0 ? 'var(--ink-2)' : 'var(--muted)',
                  fontWeight: p.points > 0 ? 600 : 400,
                }}>
                  {p.points > 0 ? p.points.toLocaleString('en-US') : '—'}
                </div>
              </div>
            ))}
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
