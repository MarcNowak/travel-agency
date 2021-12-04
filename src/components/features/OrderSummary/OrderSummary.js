import React from 'react';
import styles from './OrderSummary.module.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = (props) => {
  console.log(calculateTotal);
  return (
    <div>
      <h2 className={styles.component}>
        Total:
        <strong>
          {formatPrice(
            calculateTotal(props.tripCost, props.options)
          )}
        </strong>
      </h2>
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;