import { StyleSheet } from 'aphrodite';
import React from 'react';

import aphroditePropType from '../../utils/aphroditePropType';
import { grayExtraDark } from '../../utils/colors';

import Cover from './Cover';

const sx = StyleSheet.create({
  modal: {
    backgroundColor: grayExtraDark,
    height: '100%',
    left: 0,
    position: 'fixed',
    top: '0px',
    width: '100%',
    zIndex: 900,
  },
});

const Modal = ({ children, styles, ...rest }) => (
  <Cover styles={ [sx.modal, styles] } { ...rest }>
    { children }
  </Cover>
);

Modal.propTypes = {
  styles: aphroditePropType,
}

export default Modal;
