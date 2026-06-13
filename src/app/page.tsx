import { leadership } from "@/lib/data/leadership";
import { FadeIn, Reveal, Stagger, StaggerItem } from "./components/motion";

export default function Home() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <header style={{
        background: 'var(--felt)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Table is set first: background + suit watermarks ease in ahead of the text */}
        <FadeIn y={0} duration={0.9} style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/image-assets/landing-page-slideshow/kevin_champ.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          />
        </FadeIn>
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
          <FadeIn delay={0.05} y={14}>
            <span className="eyebrow on-navy">UIUC&apos;s Premier Poker Club · Game Theory Optimal</span>
          </FadeIn>
          <FadeIn delay={0.12} y={18}>
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
          </FadeIn>
          <FadeIn delay={0.19} y={16}>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.5,
              maxWidth: 520,
              color: 'var(--on-navy-2)',
              marginTop: 26,
              paddingLeft: 18,
              borderLeft: '2px solid var(--orange)',
            }}>
              The poker club at the University of Illinois Urbana-Champaign (UIUC).
            </p>
          </FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <FadeIn delay={0.26} y={12}>
              <a className="btn orange" href="/events">See events</a>
            </FadeIn>
            <FadeIn delay={0.30} y={12}>
              <a
                className="btn on-navy"
                href="https://discord.com/invite/4ZZCqMRTwQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join us
              </a>
            </FadeIn>
          </div>
          <FadeIn delay={0.34} y={12}>
            <p style={{ fontSize: 14, color: 'var(--on-navy-2)', marginTop: 18 }}>
              Questions about joining? Email{' '}
              <a
                href="mailto:membership@gtoillini.com"
                style={{ color: 'var(--orange)', textDecoration: 'underline' }}
              >
                membership@gtoillini.com
              </a>
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section className="section">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>01 — The Organization</StaggerItem>
            <StaggerItem as="h2" y={16}>Who <span className="accent">We Are</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12}>
            GTO Illini was first established to help curious students learn the deep and
            fascinating strategy that poker has to offer. Now we are defining the new
            standard in the college competitive poker scene.
          </Reveal>

          <Stagger className="stat-grid" stagger={0.04} style={{ marginTop: 56 }}>
            <StaggerItem className="stat">
              <div className="k">Members</div>
              <div className="n">300<span className="u">+</span></div>
              <div className="d">Active members, and counting.</div>
            </StaggerItem>
            <StaggerItem className="stat">
              <div className="k">Composition</div>
              <div className="n">60<span className="u">%+</span></div>
              <div className="d">Studying CS, ECE, Math, Stats, and Finance.</div>
            </StaggerItem>
            <StaggerItem className="stat">
              <div className="k">Est.</div>
              <div className="n">2024</div>
              <div className="d">2 years running tournaments and theory sessions.</div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="section navy">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>02 — Program</StaggerItem>
            <StaggerItem as="h2" y={16}>How <span className="accent">We Play</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12}>
            Study, practice, and compete.
          </Reveal>
          <Stagger className="card-grid c3" stagger={0.06} style={{ marginTop: 44 }}>
            <StaggerItem className="card hoverable" style={{ '--c': 'var(--orange)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Lecture · Weekly</span>
              <h4>GTO Theory</h4>
              <p>Curriculum-based lectures on ranges, equity, blockers, and solver-driven play.</p>
            </StaggerItem>
            <StaggerItem className="card hoverable" style={{ '--c': 'var(--ace)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Lab · Weekly</span>
              <h4>Live Tournaments</h4>
              <p>Weekly tournaments to put theory and skills to the test under real pressure.</p>
              <a className="btn ghost" href="/events" style={{ marginTop: 'auto' }}>See schedule</a>
            </StaggerItem>
            <StaggerItem className="card hoverable" style={{ '--c': 'var(--queen)' } as React.CSSProperties}>
              <span className="tag"><span className="dot" />Competition · Monthly</span>
              <h4>Intercollegiate Play</h4>
              <p>Campus-wide events and competing in the Intercollegiate Poker League.</p>
              <a className="btn ghost" href="/events" style={{ marginTop: 'auto' }}>See events</a>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="section tight">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>03 — Leadership</StaggerItem>
            <StaggerItem as="h2" y={16}>The <span className="accent">Table</span></StaggerItem>
          </Stagger>
          <Stagger stagger={0.05} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 18,
            marginTop: 44,
          }}>
            {leadership.map((leader, index) => (
              <StaggerItem
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== SPONSORS ===== */}
      <section className="section navy">
        <div className="wrap">
          <Stagger className="section-head" stagger={0.05}>
            <StaggerItem className="num" y={12}>04 — Partners</StaggerItem>
            <StaggerItem as="h2" y={16}>Our <span className="accent">Sponsors</span></StaggerItem>
          </Stagger>
          <Reveal as="p" className="lede" y={12}>
            GTO Illini partners with companies that want to reach 300+ analytical, technical
            students at UIUC.
          </Reveal>

          <Stagger stagger={0.07} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 44 }}>

            {/* Tier 1 — Joker */}
            <StaggerItem y={18} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="tier" style={{ '--c': 'var(--joker)', width: '100%' } as React.CSSProperties}>
                <div className="tier-id"><span>T-01 // Joker</span><span className="suit-mark">♦</span></div>
                <div className="tier-name">Joker</div>
                <div className="tier-kind">Title Partner</div>
                <p style={{ fontSize: 14, color: 'var(--on-navy-2)', marginTop: 8 }}>Be our first sponsors!</p>
              </div>
            </StaggerItem>

            {/* Tier 2 — Ace */}
            <StaggerItem y={18} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="tier" style={{ '--c': 'var(--ace)', width: '100%' } as React.CSSProperties}>
                <div className="tier-id"><span>T-02 // Ace</span><span className="suit-mark">♠</span></div>
                <div className="tier-name">Ace</div>
                <div className="tier-kind">Premium Partner</div>
                <p style={{ fontSize: 14, color: 'var(--on-navy-2)', marginTop: 8 }}>Be our first sponsors!</p>
              </div>
            </StaggerItem>

            {/* Tier 3 — King */}
            <StaggerItem y={18} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="tier" style={{ '--c': 'var(--king)', width: '100%' } as React.CSSProperties}>
                <div className="tier-id"><span>T-03 // King</span><span className="suit-mark">♣</span></div>
                <div className="tier-name">King</div>
                <div className="tier-kind">Standard Partner</div>
                <p style={{ fontSize: 14, color: 'var(--on-navy-2)', marginTop: 8 }}>Be our first sponsors!</p>
              </div>
            </StaggerItem>

            {/* Tier 4 — Queen */}
            <StaggerItem y={18} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="tier" style={{ '--c': 'var(--queen)', width: '100%' } as React.CSSProperties}>
                <div className="tier-id"><span>T-04 // Queen</span><span className="suit-mark">♥</span></div>
                <div className="tier-name">Queen</div>
                <div className="tier-kind">Entry Partner</div>
                <p style={{ fontSize: 14, color: 'var(--on-navy-2)', marginTop: 8 }}>Be our first sponsors!</p>
              </div>
            </StaggerItem>

          </Stagger>

          <Reveal y={16} style={{
            marginTop: 52,
            paddingTop: 36,
            borderTop: '1px solid var(--on-navy-rule)',
          }}>
            <span className="eyebrow on-navy">Next step</span>
            <h3 style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: '#fff',
              fontWeight: 500,
              letterSpacing: '-.015em',
              marginTop: 14,
            }}>
              Ready to <span className="accent">partner?</span>
            </h3>
            <p style={{ color: 'var(--on-navy-2)', marginTop: 12, fontSize: 15 }}>
              Contact{' '}
              <a
                href="mailto:corporate-outreach@gtoillini.com"
                style={{ color: 'var(--orange)', textDecoration: 'underline' }}
              >
                corporate-outreach@gtoillini.com
              </a>
              {' '}for more details.
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
