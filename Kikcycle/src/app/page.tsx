'use client';

import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setAuth, clearAuth } from '../slices/authSlice';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false });

const HomePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (session && session.user && status === 'authenticated') {
      dispatch(
        setAuth({
          id: session.user.id || '',
          name: session.user.name || null,
          email: session.user.email || null,
          image: session.user.image || null,
        })
      );
    } else if (status === 'unauthenticated') {
      dispatch(clearAuth());
      router.push('/landing');
    }
  }, [session, dispatch, router]);

  return (
    <div className={styles.home}>
      <main className={styles.profile}>
        <div className={styles.profile__content}>
          {' '}
          <h1 className={styles.greeting}>
            Hello, {isAuthenticated ? session?.user?.name : 'Guest'}!
          </h1>
          <h1 className="text-[60px]">1000 Pts</h1>
          <button className={styles.signOutButton} onClick={() => signOut()}>
            Redeem Points
          </button>
        </div>
      </main>
      <div className={styles.map__content}>
        <h1>The nearest KikCycle booths!</h1>
        <Map></Map>
      </div>
    </div>
  );
};

export default HomePage;
