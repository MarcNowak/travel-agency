import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phone.module.scss';

class Phone extends React.Component {
  
  render() {
    let { nameOne, nameTwo, nameThree } = this.props;
    return (
      <div className={styles.component}>
        <div>{nameOne} {nameTwo} {nameThree}</div>
      </div>
    );
  }
}

Phone.propTypes = {
  nameOne: PropTypes.string,
  nameTwo: PropTypes.string,
  nameThree: PropTypes.string,
};

export default Phone;
