'use client';

import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setAuth, clearAuth } from '../slices/authSlice';
import styles from './page.module.css';

const HomePage = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (session && session.user) {
      dispatch(
        setAuth({
          id: session.user.id || '',
          name: session.user.name || null,
          email: session.user.email || null,
          image: session.user.image || null,
        })
      );
    } else {
      dispatch(clearAuth());
    }
  }, [session, dispatch]);

  return (
    <div className={styles.home}>
      <main className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__content__brand}>
            <img src="/logo.svg" alt="Logo" />
            <h1>KikCycle</h1>
          </div>
          <h1 className={styles.hero__content__tagline}>
            From old shoes to collectibles
          </h1>
          <div className={styles.hero__content__search}>
            <img src="/kik.svg" alt="Kik" />
            <input type="text" placeholder="Look up products..." />
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          id={styles.hero__video}
          src="/testVideo.mp4"
        ></video>
      </main>
      <h1 className={styles.greeting}>
        Hello, {isAuthenticated ? session?.user?.name : 'Guest'}!
      </h1>
      <h1 className="text-[100px]">1000 Pts</h1>
      <p>KikPoints can be used to redeem...</p>
      <p className={styles.info}>
        {isAuthenticated
          ? 'You are logged in. Enjoy exploring!'
          : 'Please log in to access more features.'}
      </p>
      {isAuthenticated ? (
        <button className={styles.signOutButton} onClick={() => signOut()}>
          Sign Out
        </button>
      ) : (
        <a href="/login" className={styles.loginLink}>
          Go to Login
        </a>
      )}
    </div>
  );
};

export default HomePage;
