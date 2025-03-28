import Link from 'next/link';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
          <path
            stroke="#fff"
            fill="none"
            stroke-width="3"
            d="M80 140c0-25 15-40 40-40h40v20c0 25-15 40-40 40z"
          />

          <g stroke="#fff" fill="none" stroke-width="2">
            <polyline points="85 50 100 35 115 50 105 75 95 85" />

            <path d="M95 130l5-10 5 10-5 15" />
          </g>

          <g stroke="#fff" fill="none" stroke-width="3">
            <path d="M70 30l15-30 15 30M130 30l15-30 15 30" />

            <circle cx="100" cy="80" r="25" />

            <line x1="85" y1="70" x2="90" y2="75" />
            <line x1="115" y1="70" x2="120" y2="75" />
          </g>

          <path
            stroke="#fff"
            fill="none"
            stroke-width="3"
            d="M160 110c-20-10-40 0-40 20 0 20 20 30 40 20"
          />
        </svg>
      </div>
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
      <div className={styles.header__sidebar}></div>
    </header>
  );
}
