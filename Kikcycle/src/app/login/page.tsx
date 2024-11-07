"use client";

import { signIn } from 'next-auth/react';
import styles from './page.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Welcome Back!</h1>
      <p className={styles.subtitle}>Sign in to continue</p>
      <button className={styles.signInButton} onClick={() => signIn('google')}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
