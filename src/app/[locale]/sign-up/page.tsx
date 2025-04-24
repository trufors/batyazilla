'use client';

import { useState } from 'react';

import { TextField } from '@mui/material';

import styles from './styles.module.scss';

export default function SignupPage() {
  const [data, setData] = useState({
    email: '',
    login: '',
    password: '',
  });

  return (
    <main className={styles.signup}>
      <section>
        <form className={styles.signup__form}>
          <TextField
            label="Login"
            variant="outlined"
            className={styles.signup__formInput}
            type="login"
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
          />
          <TextField
            label="Email"
            variant="outlined"
            className={styles.signup__formInput}
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <TextField
            label="Password"
            variant="outlined"
            className={styles.signup__formInput}
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit">Sign up</button>
        </form>
      </section>
    </main>
  );
}
