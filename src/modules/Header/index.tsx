import Link from 'next/link';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__menu}>
          <li className={styles.header__menuItem}>
            <Link href="/">Twitch</Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link href="/youtube">Youtube</Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link href="/settings">Settings</Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
