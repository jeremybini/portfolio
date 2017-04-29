import React, { PropTypes } from 'react';
import Flex from './Flex';

const FlexCentered = props =>
  <Flex {...props} align='center' justify='center' />;

FlexCentered.propTypes = {
  children: PropTypes.node,
};

export default FlexCentered;
