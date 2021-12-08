import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value !== id);
  }
};

const OrderOptionCheckboxes = ({ values, currentValue, setOptionValue }) => {
  return (
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label
          className={currentValue}
          key={
            <input
              type="checkbox"
              value={value.id}
              checked={currentValue === value.id}
              onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
            >
            </input>
          }
          onClick={() => setOptionValue(value.id)}
        >
          {value.name} ({formatPrice(value.price)})
        </label>
      ))}
    </div>
  );
};

export default OrderOptionCheckboxes;