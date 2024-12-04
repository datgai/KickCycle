'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import styles from './LoginButton.module.css';

const LoginButton = () => {
  return (
    <div>
      <button className={styles.signInButton} onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
};

export default LoginButton;
