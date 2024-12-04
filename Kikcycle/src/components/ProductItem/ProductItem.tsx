import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = ({
  children,
  ItemName,
  ItemPrice,
}: {
  children: React.ReactNode;
  ItemName: string;
  ItemPrice: string;
}) => {
  return (
    <div className={styles.ProductItem}>
      <div className={styles.ProductItem__thumbnail}> {children}</div>
      <div className={styles.ProductItem__description}>
        <h1>{ItemName}</h1>
        <p>{ItemPrice}</p>
      </div>
    </div>
  );
};

export default ProductItem;
