import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

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

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.object,
  setOptionValue: PropTypes.object,
  price: PropTypes.object,
  limits: PropTypes.object,
};

export default OrderOptionNumber;