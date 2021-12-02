import React from 'react';
import styles from './OrderSummary.module.scss';
  
const OrderSummary= () => (
  <div>
    <h2 className={styles.component}><strong>$12,345</strong></h2>
  </div>
);

export default OrderSummary;