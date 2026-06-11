import { merch } from "@/lib/data/merch";
import styles from "./Merch.module.css";
import { FadeIn, Reveal, Stagger, StaggerItem } from "../components/motion";

export default function Merch() {
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
            <span className="eyebrow on-navy">Shop</span>
          </FadeIn>
          <FadeIn delay={0.12} y={18}>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: .96,
              color: '#fff', marginTop: 16, fontWeight: 500, letterSpacing: '-.02em',
            }}>
              GTO <span className="accent">Merch</span>
            </h1>
          </FadeIn>
        </div>
      </header>

      {/* ===== ITEMS ===== */}
      <section className="section">
        <div className="wrap">
          <Reveal as="p" className="lede" y={12} style={{ marginTop: 0 }}>
            GTO Illini merchandise purchase form will be available here soon.
          </Reveal>
          <Stagger className="card-grid c3" stagger={0.06} style={{ marginTop: 44 }}>
            {merch.map((item, index) => (
              <StaggerItem
                key={index}
                className="card"
                style={{ '--c': 'var(--orange)' } as React.CSSProperties}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.merchImage}
                />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-ibm-plex-mono)',
                    fontSize: 10, letterSpacing: '.12em',
                    textTransform: 'uppercase', color: 'var(--muted)',
                  }}>
                    {'// Item'}
                  </div>
                  <h4 style={{ marginTop: 6 }}>{item.name}</h4>
                  <p style={{
                    color: 'var(--orange)',
                    fontFamily: 'var(--font-ibm-plex-mono)',
                    fontSize: 22,
                    fontWeight: 500,
                    marginTop: 6,
                    letterSpacing: '-.01em',
                  }}>
                    {item.price}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

    </main>
  );
}
