import React from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

const OrderOptionDate = ({setOptionValue, startDate}) => {
  return (
    <DatePicker className={styles.input} selected={startDate}
      onChange={(date) => setOptionValue(date)}
      minDate={new Date()}
    />
  );
};

OrderOptionDate.propTypes = {
  selected: PropTypes.object,
  onChange: PropTypes.object,
  setOptionValue: PropTypes.object,
  startDate: PropTypes.object,
};

export default OrderOptionDate;