import styles from './styles.module.scss';

export default function SignupPage() {
  return (
    <main className={styles.signup}>
      <section>
        <form className={styles.signup__form}>
          <button type="submit">Sign up</button>
        </form>
      </section>
    </main>
  );
}
