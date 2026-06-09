import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <img
            src="/image-assets/GTOIlliniLogoSuits.png"
            alt="GTO Illini"
            className={styles.brandImg}
          />
          <div className={styles.brandWords}>
            <span className={styles.brandName}>GTO ILLINI</span>
            <span className={styles.brandTag}>// Game Theory Optimal @ UIUC</span>
          </div>
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/events" className={styles.link}>Events</Link></li>
            <li><Link href="/tools" className={styles.link}>Tools</Link></li>
            <li><Link href="/merch" className={styles.link}>Merch</Link></li>
            <li><Link href="/about" className={styles.link}>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
