'use client';

import { useState } from 'react';

import { TextField } from '@mui/material';

import styles from './styles.module.scss';

export default function LoginPage() {
  const [data, setData] = useState({
    login: '',
    password: '',
  });

  return (
    <main className={styles.login}>
      <section>
        <form className={styles.login__form}>
          <TextField
            label="Login"
            variant="outlined"
            className={styles.login__formInput}
            type="login"
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
          />
          <TextField
            label="Password"
            variant="outlined"
            className={styles.login__formInput}
            type="email"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
