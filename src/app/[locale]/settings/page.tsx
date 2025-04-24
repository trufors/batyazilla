'use client';

import styles from './styles.module.scss';

export default function SettingsPage() {
  return (
    <main className={styles.settings}>
      <section>
        <form className={styles.signup__form}>
          <button type="submit">Sign up</button>

          <button type="submit">Sign up</button>
        </form>
      </section>
    </main>
  );
}
