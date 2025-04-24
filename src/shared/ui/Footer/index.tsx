import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

export default async function Footer() {
  const t = await getTranslations('footer');

  return <footer className={styles.footer}>{t('createdBy')}</footer>;
}
