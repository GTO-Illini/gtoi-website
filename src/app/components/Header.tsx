import Link from 'next/link';
// import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
        <img
          src="/image-assets/GTOIlliniLogoSuits.png"
          alt="GTO Illini Logo"
          width="100"
          height="100"
          className={styles.logoImage}
        />
          <span className={styles.logoText}>GTO Illini</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/events" className={styles.link}>Events</Link>
        <Link href="/tools" className={styles.link}>Tools</Link>
        <Link href="/merch" className={styles.link}>Merch</Link>
        <Link href="/about" className={styles.link}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
