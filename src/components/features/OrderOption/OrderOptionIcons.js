import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcon = (values, required, formatPrice, setOptionValue, key) => {
  return (
    <div className={styles.icon}>
      <div>
        {required ? '' : (
          <option setOptionValue=''>
            <i className={`fas fa-times-circle`}></i>
          </option>
        )}
      </div>
      {values.map(value => (
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
      ))}
      <div className={styles.icon}
        key={key}
        onClick={event => setOptionValue(event.currentTarget.id)}
      >
      <Icon />

      </div>

    </div>
  );
};

export default OrderOptionIcon;