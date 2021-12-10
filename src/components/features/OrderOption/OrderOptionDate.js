import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss';

import 'react-datepicker/dist/react-datepicker.css';

const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className={styles.input} selected={startDate}
    onChange={(date) => setStartDate(date)} 
    minDate={new Date()}
    />
  );
};

export default OrderOptionDate;