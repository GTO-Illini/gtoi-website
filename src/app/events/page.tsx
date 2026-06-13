import TournamentAccordion from './TournamentAccordion';
import { FadeIn, Reveal, Stagger, StaggerItem } from '../components/motion';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poker Tournaments & Events',
  description:
    'Weekly poker tournaments and events hosted by GTO Illini, the UIUC poker club at the University of Illinois Urbana-Champaign. See the schedule and join us.',
  alternates: { canonical: '/events' },
};

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
          <FadeIn delay={0.05} y={14}>
            <span className="eyebrow on-navy">Events</span>
          </FadeIn>
          <FadeIn delay={0.12} y={18}>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: .96,
              color: '#fff', marginTop: 16, fontWeight: 500, letterSpacing: '-.02em',
            }}>
              The <span className="accent">Schedule</span>
            </h1>
          </FadeIn>
        </div>
      </header>

      {/* ===== WEEKLY RECURRING ===== */}
      <section className="section">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>01 — Recurring</StaggerItem>
            <StaggerItem as="h2" y={16}>Every <span className="accent">Week</span></StaggerItem>
          </Stagger>

          <Stagger className="weekly-grid" stagger={0.06} style={{ marginTop: 40 }}>
            <StaggerItem className="weekly" style={{ '--c': 'var(--joker)' } as React.CSSProperties}>
              <div className="id">1.1.2 · Tournament · Weekly</div>
              <h4>Tuesday Tournaments</h4>
              <div className="when">Tue · Live in-person play · <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>time / room TBD</span></div>
            </StaggerItem>
            <StaggerItem className="weekly" style={{ '--c': 'var(--king)' } as React.CSSProperties}>
              <div className="id">1.1.1 · Theory · Weekly</div>
              <h4>Thursday Lectures</h4>
              <div className="when">Thu · Solver labs &amp; GTO theory · <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>time / room TBD</span></div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ===== MARQUEE EVENTS ===== */}
      <section className="section navy">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>02 — Marquee</StaggerItem>
            <StaggerItem as="h2" y={16}>Major <span className="accent">Tournaments</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12}>
            The big tournaments across the fall and spring terms.
          </Reveal>

          <TournamentAccordion />
        </div>
      </section>


    </main>
  );
}
