import Link from 'next/link';

import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
            <Link href="/contacts">Contacts</Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link href="/sign-up">sign_up</Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link href="/login">
              <LoginIcon />
            </Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link href="/settings">
              <ManageAccountsIcon />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.header__sidebar}>Switch theme</div>
    </header>
  );
}
