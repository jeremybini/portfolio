import React, { PropTypes } from 'react';
import FlexCentered from './FlexCentered';

const ColumnCentered = props => <FlexCentered {...props} direction='column' />;

ColumnCentered.propTypes = {
  children: PropTypes.node,
};

export default ColumnCentered;
