import { StyleSheet } from 'aphrodite';
import React from 'react';

import aphroditePropType from '../utils/aphroditePropType';

import Flex from './Flex';
const sx = StyleSheet.create({
  root: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});

const Cover = ({ styles, ...rest }) => (
  <Flex styles={ [sx.root, styles] } { ...rest }></Flex>
);

Cover.propTypes = {
  styles: aphroditePropType,
}

export default Cover;
