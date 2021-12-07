import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcon = ({ values, required, setOptionValue, currentValue }) => {
  return (
    <div className={styles.component}>

      {required ? false : (
        <div>
          <Icon name='times-circle' />
          <span>none</span>
        </div>
      )}

      {values.map(value => (
        <div
          className={currentValue === value.id ? styles.iconActive : styles.icon}
          key={value.id}
          onClick={() => setOptionValue(value.id)}
        >
          <Icon name={value.icon} />
          {value.name} ({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );
};

export default OrderOptionIcon;