import React from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

const OrderOptionDate = ({setOptionValue, currentValue}) => {
  return (
    <DatePicker className={styles.input} selected={currentValue}
      onChange={(date) => setOptionValue(date)}
      minDate={new Date()}
    />
  );
};

OrderOptionDate.propTypes = {
  selected: PropTypes.object,
  onChange: PropTypes.object,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.date,
};

export default OrderOptionDate;