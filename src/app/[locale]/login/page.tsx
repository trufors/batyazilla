import styles from './styles.module.scss';

export default function LoginPage() {
  return (
    <main className={styles.login}>
      <section>
        <form className={styles.login__form}>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
