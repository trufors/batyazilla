'use client';

import { useState } from 'react';

import { TextField } from '@mui/material';

import styles from './styles.module.scss';

export default function SettingsPage() {
  const [data, setData] = useState({
    email: '',
    login: '',
    password: '',
  });

  return (
    <main className={styles.settings}>
      <section>
        <h1 className={styles.settings__title}>
          Settings Page На этой странице будут настройки профиля + вывод всяких фич, скорее всего
          что-то типо большого количества чекбоксов и инпутов, будет также реализовано сохранение
          всей информации и не важно где нажать кнопку save, все настройки пользоавтеля должны
          сохраняться
        </h1>
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
