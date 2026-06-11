'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn, Reveal, Stagger, StaggerItem } from '../../components/motion';

const SEASON = '2025–26';
const SESSION_DATE = '4/29/26';

const players = [
  { rank: 1,  delta:   0, name: 'Gavin Wu',        total: 63137, session:     0 },
  { rank: 2,  delta:   0, name: 'Harsheet Bansal',  total: 45362, session:     0 },
  { rank: 3,  delta:   1, name: 'Wyatt Sturn',      total: 45299, session:  9180 },
  { rank: 4,  delta:  -1, name: 'Eric Song',        total: 42450, session:     0 },
  { rank: 5,  delta:   0, name: 'Harish Chen',      total: 40824, session:  6125 },
  { rank: 6,  delta:   0, name: 'Jonathan Zhong',   total: 36755, session:  4595 },
  { rank: 7,  delta:   0, name: 'Dylan Wu',         total: 32142, session:  2677 },
  { rank: 8,  delta:   0, name: 'aryanxiety',       total: 29057, session:     0 },
  { rank: 9,  delta:  13, name: 'Peter Lin',        total: 27318, session: 17081 },
  { rank: 10, delta:  -1, name: 'Pendulous',        total: 26820, session:     0 },
  { rank: 11, delta:  -1, name: 'Yunho Chang',      total: 26764, session:     0 },
  { rank: 12, delta:  -1, name: 'Rose Zhang',       total: 24701, session:     0 },
  { rank: 13, delta:  -1, name: 'Tim Bouris',       total: 24425, session:     0 },
  { rank: 14, delta:  -1, name: 'eclipse0',         total: 24163, session:     0 },
  { rank: 15, delta:  -1, name: 'TomHHH',           total: 19371, session:     0 },
  { rank: 16, delta:  -1, name: 'RZiffra',          total: 18023, session:     0 },
  { rank: 17, delta:  -1, name: 'Jdoggy',           total: 16606, session:     0 },
  { rank: 18, delta:  -1, name: 'Raymond Yang',     total: 16439, session:     0 },
  { rank: 19, delta:  -1, name: 'jinki',            total: 13902, session:     0 },
  { rank: 20, delta:  -1, name: 'JustinL',          total: 12647, session:     0 },
  { rank: 21, delta:  -1, name: 'Qwertyd',          total: 11397, session:     0 },
  { rank: 22, delta:  -1, name: 'Austin Park',      total: 10272, session:     0 },
  { rank: 23, delta:   0, name: 'Yuqi0603',         total:  9087, session:     0 },
  { rank: 24, delta:   0, name: 'Owen Vela',        total:  9036, session:     0 },
  { rank: 25, delta:   0, name: 'Nikola Todic',     total:  8739, session:     0 },
  { rank: 26, delta:   0, name: 'Tom Knight',       total:  8652, session:     0 },
  { rank: 27, delta:   4, name: 'Aleksa Marceta',   total:  7154, session:  3065 },
  { rank: 28, delta:  -1, name: 'Luca Tricarico',   total:  6308, session:     0 },
  { rank: 29, delta:  -1, name: 'James Yang',       total:  6234, session:     0 },
  { rank: 30, delta:  -1, name: 'Rohil Bose',       total:  5416, session:     0 },
  { rank: 31, delta:  -1, name: 'jwenzke',          total:  4180, session:     0 },
  { rank: 32, delta:   0, name: 'Patrick Smith',    total:  3344, session:     0 },
  { rank: 33, delta:   0, name: 'kerem-acar',       total:  3030, session:     0 },
  { rank: 34, delta:   0, name: 'Aplts',            total:  2701, session:     0 },
  { rank: 35, delta:   0, name: 'Aiden Ye',         total:  2552, session:     0 },
  { rank: 36, delta:   0, name: 'waafflz',          total:  2508, session:     0 },
  { rank: 37, delta:   0, name: 'NickB05',          total:  1577, session:     0 },
  { rank: 38, delta:   0, name: 'Linger1109',       total:  1422, session:     0 },
];

function fmt(n: number) {
  return n.toLocaleString('en-US');
}

function DeltaBadge({ delta }: { delta: number }) {
  const mono: React.CSSProperties = {
    fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
    fontSize: 11,
    letterSpacing: '.06em',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    minWidth: 36,
    justifyContent: 'center',
  };
  if (delta === 0) return <span style={{ ...mono, color: 'var(--muted)' }}>*</span>;
  if (delta > 0)   return <span style={{ ...mono, color: '#3db87a' }}>+{delta}</span>;
  return             <span style={{ ...mono, color: 'var(--orange)' }}>{delta}</span>;
}

function RankMedal({ rank }: { rank: number }) {
  const medals: Record<number, string> = { 1: 'var(--ace)', 2: '#9ca3af', 3: '#b07a50' };
  return (
    <span style={{
      fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
      fontSize: 13,
      fontWeight: 700,
      color: medals[rank] ?? 'var(--muted)',
      letterSpacing: '-.01em',
      minWidth: 28,
      display: 'inline-block',
      textAlign: 'right',
    }}>
      {rank}
    </span>
  );
}

export default function PastLeaderboards() {
  const reduced = useReducedMotion();
  const top3 = players.slice(0, 3);
  const rest  = players.slice(3);

  const rowReveal = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  const rowBase: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '52px 52px 1fr 120px 110px',
    alignItems: 'center',
    gap: 12,
    padding: '13px 20px',
    borderBottom: '1px solid var(--rule)',
    transition: 'background .12s ease',
  };

  const colNum: React.CSSProperties = {
    fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
    fontSize: 13,
    textAlign: 'right',
    letterSpacing: '.04em',
  };

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
          <FadeIn y={10}>
            <Link href="/leaderboard" style={{
              fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
              fontSize: 11,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--on-navy-2)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 16,
              transition: 'color .15s ease',
            }}>
              ← Leaderboard
            </Link>
          </FadeIn>
          <FadeIn delay={0.05} y={14}>
            <span className="eyebrow on-navy">Archive · Season {SEASON}</span>
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
              Past <span className="accent">Leaderboards</span>
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
              Final standings from previous GTO Illini seasons.
            </p>
          </FadeIn>

          <Stagger className="hero-stats" stagger={0.05} delay={0.26}>
            {[
              { k: 'Season',         v: SEASON },
              { k: 'Players ranked', v: players.length.toString() },
              { k: 'Champion',       v: players[0].name.split(' ')[0] },
              { k: 'Top score',      v: fmt(players[0].total) },
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

      {/* ===== SEASON 2025-26 ===== */}
      <section className="section tight">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>2025–26</StaggerItem>
            <StaggerItem as="h2" y={16}>Final <span className="accent">Standings</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12} style={{ marginBottom: 0 }}>
            Season {SEASON} final leaderboard — last updated {SESSION_DATE}.
          </Reveal>

          {/* Podium — top 3 */}
          <Stagger stagger={0.06} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 44,
          }}>
            {top3.map(p => {
              const accentColors: Record<number, string> = {
                1: 'var(--ace)',
                2: '#9ca3af',
                3: '#b07a50',
              };
              const color = accentColors[p.rank];
              return (
                <StaggerItem key={p.rank} className="card" style={{ '--c': color } as React.CSSProperties}>
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
                  <div style={{
                    fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
                    fontSize: 13,
                    color: 'var(--muted)',
                    letterSpacing: '.04em',
                    marginTop: 2,
                  }}>
                    {fmt(p.total)} pts
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* Full table */}
          <div style={{
            marginTop: 32,
            background: 'var(--paper)',
            border: '1px solid var(--rule)',
            borderRadius: 4,
            overflow: 'hidden',
          }}>
            {/* Table header */}
            <motion.div {...rowReveal(0)} style={{
              ...rowBase,
              background: 'var(--bg-2)',
              borderBottom: '2px solid var(--rule)',
              padding: '10px 20px',
            }}>
              {(['#', 'Δ', 'Name', 'Total', SESSION_DATE] as const).map((col, i) => (
                <div key={col} style={{
                  fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
                  fontSize: 10,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  textAlign: i === 0 || i >= 3 ? 'right' : 'left',
                }}>
                  {col === '#' ? <><span style={{ color: 'var(--orange)', opacity: .9 }}>{'//'}</span> {col}</> : col}
                </div>
              ))}
            </motion.div>

            {/* All rows */}
            {rest.map((p, idx) => (
              <motion.div
                key={p.rank}
                {...rowReveal((idx % 12) * 0.025)}
                style={{
                  ...rowBase,
                  background: idx % 2 === 0 ? 'var(--paper)' : 'var(--bg)',
                  borderBottom: idx === rest.length - 1 ? 'none' : '1px solid var(--rule)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-2)')}
                onMouseLeave={e => (e.currentTarget.style.background = idx % 2 === 0 ? 'var(--paper)' : 'var(--bg)')}
              >
                <div style={{ ...colNum, color: 'var(--muted)' }}>
                  <RankMedal rank={p.rank} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <DeltaBadge delta={p.delta} />
                </div>
                <div style={{ fontSize: 14.5, color: 'var(--ink)', fontWeight: p.delta !== 0 ? 500 : 400 }}>
                  {p.name}
                </div>
                <div style={{ ...colNum, color: 'var(--ink-2)', fontWeight: 600 }}>
                  {fmt(p.total)}
                </div>
                <div style={{
                  ...colNum,
                  color: p.session > 0 ? '#3db87a' : 'var(--muted)',
                  fontWeight: p.session > 0 ? 600 : 400,
                }}>
                  {p.session > 0 ? `+${fmt(p.session)}` : '—'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <Reveal y={10} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 28px',
            marginTop: 18,
            fontFamily: 'var(--font-ibm-plex-mono, "IBM Plex Mono"), monospace',
            fontSize: 11,
            letterSpacing: '.08em',
            color: 'var(--muted)',
          }}>
            <span><span style={{ color: '#3db87a', fontWeight: 700 }}>+n</span> — moved up</span>
            <span><span style={{ color: 'var(--orange)', fontWeight: 700 }}>−n</span> — moved down</span>
            <span><span style={{ fontWeight: 700 }}>*</span> — no change</span>
            <span style={{ marginLeft: 'auto' }}>Last session: {SESSION_DATE}</span>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
