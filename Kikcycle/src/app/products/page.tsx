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
        <ProductItem ItemName="GlitterCat Keychain" ItemPrice="MYR 10.00">
          <GlitterCat></GlitterCat>
        </ProductItem>
        <ProductItem ItemName="SunCat Keychain" ItemPrice="MYR 10.00">
          <SunCat></SunCat>
        </ProductItem>
      </div>
    </div>
  );
};

export default ProductPage;
