'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/competitive-team', label: 'Competitive Team' },
  { href: '/tools', label: 'Tools' },
  { href: '/merch', label: 'Merch' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close}>
          <img
            src="/image-assets/GTOIlliniLogoSuits.png"
            alt="GTO Illini"
            className={styles.brandImg}
          />
          <div className={styles.brandWords}>
            <span className={styles.brandName}>GTO ILLINI</span>
            <span className={styles.brandTag}>{'// Game Theory Optimal @ UIUC'}</span>
          </div>
        </Link>
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {LINKS.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`${styles.bl} ${open ? styles.bl1x : ''}`} />
          <span className={`${styles.bl} ${open ? styles.bl2x : ''}`} />
          <span className={`${styles.bl} ${open ? styles.bl3x : ''}`} />
        </button>
      </div>
      {open && (
        <nav className={styles.mobileDrawer} aria-label="Mobile navigation">
          <ul className={styles.mobileLinks}>
            {LINKS.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={styles.mobileLink} onClick={close}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
