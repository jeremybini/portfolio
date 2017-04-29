import { StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';

import Column from './Column';
import ColumnCentered from './ColumnCentered';
import Heading from './Heading';
import Img from './Img';

const sx = StyleSheet.create({
  errorContainer: {
    minHeight: '80vh',
  },
  errorImage: {
    maxWidth: '100%',
  },
});

const ErrorMessage = ({ code, message }) => (
  <Column styles={ sx.errorContainer }>
    <ColumnCentered grow>
      <Heading>{ message }</Heading>
      <Img src={ `https://http.cat/${code}.jpg` } styles={ sx.errorImage } />
    </ColumnCentered>
  </Column>
);

ErrorMessage.defaultProps = {
  code: 500,
  message: 'Uh-oh. Something went wrong.',
};

ErrorMessage.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string,
};

export default ErrorMessage;

