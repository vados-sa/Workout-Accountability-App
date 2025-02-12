// Landing Page

import styles from './landing.module.css';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>MotivateMates</h2>
      <h1 className={styles.heading}>STAY ACCOUNTABLE</h1>
      <div className={styles.buttonGroup}>
      <Link href="/login" className={`${styles.button} ${styles.buttonOutline}`}>
          Sign in
        </Link>
        <Link href="/register" className={`${styles.button} ${styles.buttonFilled}`}>
          Register
        </Link>
      </div>
    </div>
  );
}
