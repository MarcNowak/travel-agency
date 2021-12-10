import React from 'react';
import styles from './OrderOption.module.scss';


const OrderOptionText = ({setOptionValue}) => {
  return (
    <input 
    type="text"
    className={styles.input}
    onChange={event => setOptionValue(event.currentTarget.value)}
    placeholder='enter text'
    />

  )
};

export default OrderOptionText;