export default function Sponsor() {
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
          <span className="eyebrow on-navy">Partnership</span>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: .96,
            color: '#fff', marginTop: 16, fontWeight: 500, letterSpacing: '-.02em',
          }}>
            Partner with <span className="accent">GTO Illini.</span>
          </h1>
        </div>
      </header>

      {/* ===== WHY SPONSOR ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">01 — The Audience</div>
            <h2>Why <span className="accent">sponsor us.</span></h2>
          </div>
          <p className="lede">
            Reach 300+ analytical, recruitable students who self-select into probability,
            risk, and decision-making. Here's the table you'd be buying into.
          </p>

          <div className="stat-grid" style={{ marginTop: 48 }}>
            <div className="stat">
              <div className="k">Reach</div>
              <div className="n">300<span className="u">+</span></div>
              <div className="d">Members across every engineering and quant-heavy major.</div>
            </div>
            <div className="stat">
              <div className="k">Technical</div>
              <div className="n">60<span className="u">%+</span></div>
              <div className="d">CS, ECE, Math, Stats &amp; Finance — your future analysts.</div>
            </div>
            <div className="stat">
              <div className="k">Events / yr</div>
              <div className="n">10<span className="u">+</span></div>
              <div className="d">Branded surfaces across tournaments and lectures.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USE OF FUNDS ===== */}
      <section className="section navy tight">
        <div className="wrap">
          <div className="section-head">
            <div className="num">02 — Use of Funds</div>
            <h2>Where the <span className="accent">funds go.</span></h2>
          </div>

          <div style={{ marginTop: 36 }}>
            {[
              { ix: '01', cat: 'Running Tournaments', alloc: '~40%', w: '40%', notes: 'Renting space, paying dealers, food, and prizes.', c: 'var(--orange)' },
              { ix: '02', cat: 'Poker Equipment',     alloc: '~30%', w: '30%', notes: 'Chips, cases, felts, decks, and chip trays.',       c: 'var(--ace)'    },
              { ix: '03', cat: 'Competitive Prep',    alloc: '~15%', w: '15%', notes: 'Solver licenses and space for league preparation.',  c: 'var(--on-navy)' },
              { ix: '04', cat: 'Operations',          alloc: '~15%', w: '15%', notes: 'Marketing, socials, and general club operations.',   c: 'var(--queen)'  },
            ].map(({ ix, cat, alloc, w, notes, c }) => (
              <div key={ix} style={{
                display: 'grid',
                gridTemplateColumns: '32px 1fr 48px 180px',
                gap: '0 20px',
                alignItems: 'center',
                padding: '18px 0',
                borderBottom: '1px solid var(--on-navy-rule)',
              }}>
                <span style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, color: 'var(--on-navy-2)', letterSpacing: '.1em' }}>{ix}</span>
                <span style={{ fontWeight: 500, fontSize: 15 }}>
                  <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: c, marginRight: 10 }} />
                  {cat}
                </span>
                <span style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, color: 'var(--on-navy-2)', textAlign: 'right' }}>{alloc}</span>
                <div style={{ position: 'relative', height: 4, background: 'var(--on-navy-rule)', borderRadius: 2 }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: w, background: c, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIERS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="num">03 — Tiers</div>
            <h2>Pick your <span className="accent">hand.</span></h2>
          </div>
          <p className="lede">Four tiers, four levels of brand surface area. Annual commitment.</p>

          <div className="tier-grid" style={{ marginTop: 44 }}>
            <div className="tier" style={{ '--c': 'var(--joker)' } as React.CSSProperties}>
              <div className="tier-id"><span>T-01 // Joker</span><span className="suit-mark">♦</span></div>
              <div className="tier-name">Joker</div>
              <div className="tier-kind">Title Partner</div>
              <div className="tier-price"><span className="cur">$</span>10,000</div>
              <div className="tier-per">Per year</div>
              <ul>
                <li>Quarterly updates</li>
                <li>Thank-you letter</li>
                <li>Social media shoutout</li>
                <li>Website logo · full</li>
                <li>Merch logo · full</li>
                <li>Event title sponsorship</li>
                <li>Recruiting / resume access</li>
              </ul>
              <a className="btn" href="mailto:corporate-outreach@gtoillini.com">Choose Joker</a>
            </div>
            <div className="tier" style={{ '--c': 'var(--ace)' } as React.CSSProperties}>
              <div className="tier-id"><span>T-02 // Ace</span><span className="suit-mark">♠</span></div>
              <div className="tier-name">Ace</div>
              <div className="tier-kind">Premium Partner</div>
              <div className="tier-price"><span className="cur">$</span>5,000</div>
              <div className="tier-per">Per year</div>
              <ul>
                <li>Quarterly updates</li>
                <li>Thank-you letter</li>
                <li>Social media shoutout</li>
                <li>Website logo · full</li>
                <li>Event sponsorship</li>
                <li className="off">Title sponsorship</li>
                <li className="off">Recruiting access</li>
              </ul>
              <a className="btn" href="mailto:corporate-outreach@gtoillini.com">Choose Ace</a>
            </div>
            <div className="tier" style={{ '--c': 'var(--king)' } as React.CSSProperties}>
              <div className="tier-id"><span>T-03 // King</span><span className="suit-mark">♣</span></div>
              <div className="tier-name">King</div>
              <div className="tier-kind">Standard Partner</div>
              <div className="tier-price"><span className="cur">$</span>2,000</div>
              <div className="tier-per">Per year</div>
              <ul>
                <li>Quarterly updates</li>
                <li>Thank-you letter</li>
                <li>Social media shoutout</li>
                <li>Website logo · mini</li>
                <li>Merch logo · mini</li>
                <li className="off">Event sponsorship</li>
                <li className="off">Recruiting access</li>
              </ul>
              <a className="btn" href="mailto:corporate-outreach@gtoillini.com">Choose King</a>
            </div>
            <div className="tier" style={{ '--c': 'var(--queen)' } as React.CSSProperties}>
              <div className="tier-id"><span>T-04 // Queen</span><span className="suit-mark">♥</span></div>
              <div className="tier-name">Queen</div>
              <div className="tier-kind">Entry Partner</div>
              <div className="tier-price"><span className="cur">$</span>500</div>
              <div className="tier-per">Per year</div>
              <ul>
                <li>Quarterly updates</li>
                <li>Thank-you letter</li>
                <li>Social media shoutout</li>
                <li className="off">Website logo</li>
                <li className="off">Merch logo</li>
                <li className="off">Event sponsorship</li>
                <li className="off">Recruiting access</li>
              </ul>
              <a className="btn" href="mailto:corporate-outreach@gtoillini.com">Choose Queen</a>
            </div>
          </div>
          <p style={{ marginTop: 22, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, letterSpacing: '.06em', color: 'var(--muted)' }}>
            // Custom packages available — tell us your goals and we'll build one.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{
        background: 'var(--felt-3)', color: 'var(--on-navy)',
        padding: 'clamp(56px, 8vw, 96px) 0',
        textAlign: 'center',
      }}>
        <div className="wrap">
          <span className="eyebrow on-navy">Next step</span>
          <h2 style={{ marginTop: 18, fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff' }}>
            Ready to <span className="accent">partner?</span>
          </h2>
          <p style={{ color: 'var(--orange)', marginTop: 14, fontSize: 17 }}>
            contact corporate-outreach@gtoillini.com for more details
          </p>
        </div>
      </section>

    </main>
  );
}
