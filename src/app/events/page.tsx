import { Fragment } from 'react';
import TournamentAccordion from './TournamentAccordion';
import { FadeIn, Reveal, Stagger, StaggerItem } from '../components/motion';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poker Tournaments & Events',
  description:
    'Weekly poker tournaments and events hosted by GTO Illini, the UIUC poker club at the University of Illinois Urbana-Champaign. See the schedule and join us.',
  alternates: { canonical: '/events' },
};

const FALL_CLASSIC_OVERVIEW = [
  ['Game', "No-Limit Texas Hold'em · Big Blind Ante"],
  ['Stack', '20,000 starting chips (100 BB) · 20-minute levels'],
  ['Entry', 'Free, open to all UIUC students'],
  ['Capacity', 'Up to 200 registered players'],
  ['Late Reg', 'Closes at 3:10 PM (end of the first break)'],
  ['Re-entry', 'Only with a Rebuy Ticket (given to members who volunteered at past events). One re-entry per player, before late registration closes.'],
];

const FALL_CLASSIC_PRIZES = [180, 105, 65, 45, 35, 25, 20, 15, 10];

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

      {/* ===== FALL POKER CLASSIC ===== */}
      <section className="section" id="fall-classic">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>01 — Featured</StaggerItem>
            <StaggerItem as="h2" y={16}>Fall Poker <span className="accent">Classic</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12}>
            Our flagship fall tournament: a free No-Limit Hold&apos;em freeroll open to all UIUC
            students, with a $500 prize pool for the top 9 finishers. No membership required.
          </Reveal>
          <Reveal y={12} style={{ marginTop: 32 }}>
            <a
              className="btn orange"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfovNStRq0m79PQqCGe0cdLbnZ2H10cyKdWDdCT1E7aJ-7FEg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 16, padding: '18px 34px' }}
            >
              RSVP ASAP, limited seats available
            </a>
          </Reveal>

          <Stagger className="stat-grid" stagger={0.04} style={{ marginTop: 48 }}>
            <StaggerItem className="stat">
              <div className="k">Date</div>
              <div className="n">Nov 7</div>
              <div className="d">Saturday · Check-in 12:45 PM · Cards in the air 1:00 PM</div>
            </StaggerItem>
            <StaggerItem className="stat">
              <div className="k">Location</div>
              <div className="n">CIF</div>
              <div className="d">Check in at Room 0035 · 1405 W Springfield Ave, Urbana</div>
            </StaggerItem>
            <StaggerItem className="stat">
              <div className="k">Prize Pool</div>
              <div className="n">$500</div>
              <div className="d">Gift cards for the top 9 finishers</div>
            </StaggerItem>
          </Stagger>

          <Stagger className="card-grid c2" stagger={0.06} style={{ marginTop: 44 }}>
            <StaggerItem className="card" style={{ '--c': 'var(--felt)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Overview</span>
              <h4>The Format</h4>
              <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px 18px', fontSize: 14.5, color: 'var(--ink-2)' }}>
                {FALL_CLASSIC_OVERVIEW.map(([label, value]) => (
                  <Fragment key={label}>
                    <dt style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--felt)', paddingTop: 3 }}>{label}</dt>
                    <dd>{value}</dd>
                  </Fragment>
                ))}
              </dl>
              <p>
                The event runs about 7.5 hours (1:00 PM to about 8:30 PM, including a 30-minute
                dinner break). With 20+ starting tables, tables will be rebalanced often, so listen
                for floor announcements.
              </p>
            </StaggerItem>

            <StaggerItem className="card" style={{ '--c': 'var(--orange)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Payouts</span>
              <h4>Prizes</h4>
              <p>
                The top 9 finishers win gift cards (Amazon, Target, Nintendo, etc.), whether or not
                they&apos;re members. Winners pick the retailer after the event.
              </p>
              <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, listStyle: 'none', padding: 0 }}>
                {FALL_CLASSIC_PRIZES.map((prize, i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid var(--rule)', borderRadius: 3, fontSize: 14 }}>
                    <span style={{ fontFamily: 'var(--font-ibm-plex-mono)', color: 'var(--muted)' }}>#{i + 1}</span>
                    <b style={{ color: i === 0 ? 'var(--orange)' : 'var(--ink)', fontWeight: 600 }}>${prize}</b>
                  </li>
                ))}
              </ol>
              <p>Hand-for-hand play starts at the prize bubble (10 players left).</p>

              <h4 style={{ marginTop: 10 }}>GTokens <span style={{ fontSize: 14, color: 'var(--muted)' }}>· members only</span></h4>
              <ul style={{ listStyle: 'disc', paddingLeft: 18,fontSize: 14.5, color: 'var(--ink-2)', display: 'grid', gap: 6 }}>
                <li>Every member entry (including re-entries) adds 50 GTo to the pool, which counts toward the semester leaderboard.</li>
                <li>Members are ranked by finish with non-members removed. The top 15% of member entries (rounded up) cash, using the standard GTO Illini payout structure.</li>
                <li>No hand-for-hand at the GTo bubble.</li>
                <li>Membership ($10/semester) must be active by 3:10 PM, when late registration closes. The GTo payout schedule is posted then.</li>
              </ul>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ===== ORIENTATION ===== */}
      <section className="section navy">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>02 — Orientation</StaggerItem>
            <StaggerItem as="h2" y={16}>Start <span className="accent">Here</span></StaggerItem>
          </Stagger>

          <Stagger className="weekly-grid" stagger={0.06} style={{ marginTop: 40 }}>
            <StaggerItem className="weekly" style={{ '--c': 'var(--king)' } as React.CSSProperties}>
              <details>
                <summary>
                  <div className="id">1.0.1 · Quad Day</div>
                  <h4>Visit Us at Quad Day</h4>
                  <div className="when">Sun, Aug 23 · 12:00–4:00 PM · Section 26, near Noyes Laboratory</div>
                </summary>
                <p>Join us at Quad Day to learn about the club, say hi to the team, and take a quiz to potentially win some cool, poker-related prizes!</p>
              </details>
            </StaggerItem>
            <StaggerItem className="weekly" style={{ '--c': 'var(--joker)' } as React.CSSProperties}>
              <details>
                <summary>
                  <div className="id">1.0.2 · Info Session</div>
                  <h4>GTO Illini Info Session</h4>
                  <div className="when">Tue, Aug 25 · 6:30–8:00 PM · Room 0035, CIF</div>
                </summary>
                <p>Come to the GTO Illini Info Session to learn about how the club will be run this year, including the addition of new in-person weekly and monthly tournaments. We&apos;ll have pizza, drinks, and also give you a chance to play a couple hands with our new chips! <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxuP5qguXnTnF1Zd53FQNUiHSUnsONqE3sq7imPZwzKn08rA/viewform" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'underline', textUnderlineOffset: 3 }}>RSVP here</a>.</p>
              </details>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ===== WEEKLY RECURRING ===== */}
      <section className="section">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>03 — Recurring</StaggerItem>
            <StaggerItem as="h2" y={16}>Every <span className="accent">Week</span></StaggerItem>
          </Stagger>

          <Stagger className="weekly-grid" stagger={0.06} style={{ marginTop: 40 }}>
            <StaggerItem className="weekly" style={{ '--c': 'var(--king)' } as React.CSSProperties}>
              <div className="id">1.1.1 · Theory · Weekly</div>
              <h4>Tuesday Lectures</h4>
              <div className="when">Tue · 6:30–8:30 PM · Classroom 1000, Siebel Center for Design</div>
            </StaggerItem>
            <StaggerItem className="weekly" style={{ '--c': 'var(--joker)' } as React.CSSProperties}>
              <div className="id">1.1.2 · Tournament · Weekly</div>
              <h4>Thursday Tournaments</h4>
              <div className="when">Thu · 6:00–9:00 PM · Sunrise Studio 1046, Siebel Center for Design</div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ===== MARQUEE EVENTS ===== */}
      <section className="section navy">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>04 — Marquee</StaggerItem>
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
