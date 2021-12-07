import React from 'react';
import styles from './OrderOption.module.scss';

const OrderOptionNumber = (currentValue, setOptionValue, price) => {
  return (
    <div className={styles.number}>
      <input 
      type="{number"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)} 
      
      // min i max równe odpowiadającym im właściwościom propsa limits

      />
      {price}
    </div>
  );
};

export default OrderOptionNumber;