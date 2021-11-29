import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideImage.module.scss';

const SideImage = props => (<img alt='' className={styles.component} src={`${props.source}`} />);

SideImage.propTypes = {
  source: PropTypes.string.isRequired,
};

export default SideImage;
