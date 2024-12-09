'use client';

import React from 'react';
import styles from './page.module.css';
import UFOCat from '@/components/Mascots/UFOCat/UFOCat';
import UFOPak from '@/components/Mascots/UFOPak/UFOPak';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <UFOPak></UFOPak>
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
      <div className={styles.about}>
        <div className={styles.about__problem}>
          <h1>Did you know?</h1>
          <span className={styles.about__problem__highlight}>91%</span>
          <p>of the plastic waste generated in the world is not recycled.</p>
          {/* <img src="/OECD.png" alt="Plastic waste" /> */}
        </div>
        <UFOCat></UFOCat>
        <div className={styles.about__solution}>
          <div className={styles.about__solution__brand}>
            <img src="/logo.svg" alt="Logo" />
            <h1>KikCycle</h1>
          </div>
          <p>
            Aims to solve the problem of{' '}
            <b>
              Low recyclability of PVC waste which often ends up in landfills
            </b>
          </p>
          <img src="/KikcycleSolution.png" alt="Solution" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
