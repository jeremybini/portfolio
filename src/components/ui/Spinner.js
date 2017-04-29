import React, { PropTypes } from 'react';
import 'spinkit/css/spinners/6-chasing-dots.css';

import { green } from '../../utils/colors';

import Div from './Div';

const Spinner = ({ color, ...rest }) => {
  const dotStyle = {
    backgroundColor: color
  };

  return (
    <Div className='sk-chasing-dots' { ...rest }>
      <div className='sk-child sk-dot1' style={ dotStyle }></div>
      <div className='sk-child sk-dot2' style={ dotStyle }></div>
    </Div>
  );
};

Spinner.defaultProps = {
  color: green,
};

Spinner.propTypes = {
  color: PropTypes.string,
}

export default Spinner;
