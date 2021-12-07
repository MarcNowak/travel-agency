import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, setOptionValue, price, limits }) => {
  return (
    <div className={styles.number}>
      <input
        type="number"
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
        max={limits.max}
        min={limits.min}

      />
      ({formatPrice(price)})
    </div>
  );
};

export default OrderOptionNumber;