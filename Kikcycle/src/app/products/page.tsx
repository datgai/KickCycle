import React from 'react';
import GlitterCat from '@/components/Mascots/GlitterCat/GlitterCat';
import SunCat from '@/components/Mascots/SunCat/SunCat';
import styles from './page.module.css';
import ProductItem from '@/components/ProductItem/ProductItem';

const ProductPage = () => {
  return (
    <div className={styles.products}>
      <h1 className={styles.products__title}>Products</h1>
      <div className={styles.products__list}>
        <ProductItem ItemName="GlitterCat Keychain" ItemPrice="MYR 17.00">
          <GlitterCat></GlitterCat>
        </ProductItem>
        <ProductItem ItemName="SunCat Keychain" ItemPrice="MYR 17.00">
          <SunCat></SunCat>
        </ProductItem>
        <ProductItem ItemName="Panic Pak Keychain" ItemPrice="MYR 17.00">
          <div
            style={{
              width: '200px',
              height: '200px',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <img src="/Mascots/PakPanic.gif" alt="PakPanic" />
          </div>
        </ProductItem>
        <ProductItem ItemName="Thinking Pak Keychain" ItemPrice="MYR 17.00">
          <div
            style={{
              width: '200px',
              height: '200px',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <img
              src="/Mascots/PakThink.gif"
              alt="PakThink"
              style={{ height: '200px' }}
            />
          </div>
        </ProductItem>

        <ProductItem ItemName="UFO Kik Keychain" ItemPrice="MYR 17.00">
          <div
            style={{
              width: '400px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/Mascots/UFOCat.png"
              alt="UFO Kik"
              style={{
                objectPosition: '0px 0px',
                objectFit: 'cover',
                width: '200px',
                height: '200px',
              }}
            />
          </div>
        </ProductItem>
        <ProductItem ItemName="UFO Pak Keychain" ItemPrice="MYR 17.00">
          <div
            style={{
              width: '400px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/Mascots/UFOPak.png"
              alt="UFO Pak"
              style={{
                objectPosition: '0px 0px',
                objectFit: 'cover',
                width: '200px',
                height: '200px',
              }}
            />
          </div>
        </ProductItem>
        <ProductItem ItemName="UFO Pillar Keychain" ItemPrice="MYR 17.00">
          <div
            style={{
              width: '400px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/Mascots/UFOPillar.png"
              alt="UFO Pillar"
              style={{
                objectPosition: '0px 0px',
                objectFit: 'cover',
                width: '200px',
                height: '200px',
              }}
            />
          </div>
        </ProductItem>
      </div>
    </div>
  );
};

export default ProductPage;
