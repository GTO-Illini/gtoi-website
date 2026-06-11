'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface Tournament {
  id: string;
  month: string;
  term: string;
  kind: string;
  title: string;
  description: string;
  tag: string;
  accent: string;
}

const TOURNAMENTS: Tournament[] = [
  {
    id: 'queens-full',
    month: 'OCT', term: 'Fall',
    kind: "1.2.1 · Queen's Full",
    title: "Queen's Full Tournament",
    description: 'Mid-season open tournament.',
    tag: 'Sponsorable',
    accent: 'var(--queen)',
  },
  {
    id: 'fall-classic',
    month: 'NOV', term: 'Fall',
    kind: '1.2.3 · Classic',
    title: 'GTO Illini Fall Poker Classic',
    description: 'Flagship fall championship.',
    tag: 'Title event',
    accent: 'var(--joker)',
  },
  {
    id: 'tag-team',
    month: 'MAR', term: 'Spring',
    kind: '1.2.2 · Tag-Team',
    title: 'Tag-Team Tournament',
    description: 'Partners format, fan favorite.',
    tag: 'Sponsorable',
    accent: 'var(--ace)',
  },
  {
    id: 'spring-classic',
    month: 'APR', term: 'Spring',
    kind: '1.2.4 · Classic',
    title: 'GTO Illini Spring Poker Classic',
    description: 'Season-ending championship.',
    tag: 'Title event',
    accent: 'var(--joker)',
  },
];

const DETAILS = [
  { label: 'Date & Time', value: 'TBD' },
  { label: 'Room', value: 'TBD' },
  { label: 'Interest Form', value: 'Coming soon!' },
];

export default function TournamentAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 10, marginInline: 'calc(-1 * var(--gutter))' }}>
      {TOURNAMENTS.map((t, index) => {
        const isOpen = openId === t.id;
        const isHovered = hoveredId === t.id;

        return (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
            transition={reduced
              ? { duration: 0 }
              : { type: 'spring', stiffness: 300, damping: 30, delay: index * 0.06 }}
            onMouseEnter={() => setHoveredId(t.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              borderRadius: 4,
              overflow: 'hidden',
              paddingInline: 'var(--gutter)',
              background: isHovered && !isOpen ? 'rgba(255,255,255,0.04)' : 'transparent',
              transition: 'background 0.15s',
            }}
          >
            {/* Clickable row */}
            <div
              className="tl-row"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : t.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenId(isOpen ? null : t.id);
                }
              }}
              style={{
                cursor: 'pointer',
                borderBottom: isOpen ? '1px solid var(--on-navy-rule)' : 'none',
              }}
            >
              <div className="tl-date"><b>{t.month}</b><span>{t.term}</span></div>
              <div className="tl-main">
                <div className="kind">{t.kind}</div>
                <h4>{t.title}</h4>
                <p>{t.description}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="tl-tag">{t.tag}</div>
                {/* Chevron button */}
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: '1px solid var(--on-navy-rule)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: isOpen ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'background 0.15s',
                }}>
                  <motion.svg
                    width="18" height="18" viewBox="0 0 16 16" fill="none"
                    aria-hidden
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 26 }}
                    style={{ color: 'var(--on-navy-2)' }}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </div>
            </div>

            {/* Animated drawer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="drawer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={reduced
                    ? { duration: 0 }
                    : {
                        height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.22, ease: 'easeOut' },
                      }}
                  style={{ overflow: 'hidden' }}
                >
                  {/* Content materializes just after the drawer starts opening */}
                  <motion.div
                    initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={reduced
                      ? { duration: 0 }
                      : { duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                    style={{ padding: '16px 24px 20px' }}
                  >
                    {/* Themed paper info card */}
                    <div style={{
                      background: 'var(--paper)',
                      border: '1px solid var(--rule)',
                      borderLeft: `3px solid ${t.accent}`,
                      borderRadius: 4,
                      color: 'var(--ink)',
                      padding: '20px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: 10,
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                      }}>
                        {'// Event Details'}
                      </div>
                      {DETAILS.map(({ label, value }) => (
                        <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                          <span style={{
                            fontFamily: 'var(--font-ibm-plex-mono)',
                            fontSize: 11,
                            letterSpacing: '.1em',
                            textTransform: 'uppercase',
                            color: 'var(--muted)',
                            minWidth: 112,
                            flexShrink: 0,
                          }}>{label}</span>
                          <span style={{
                            fontSize: 14,
                            color: 'var(--ink-2)',
                            fontStyle: 'italic',
                          }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
