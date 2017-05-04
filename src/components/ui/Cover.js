import { StyleSheet } from 'aphrodite'
import React from 'react'

import aphroditePropType from '../../utils/aphroditePropType'

import Div from './Div'

const sx = StyleSheet.create({
  root: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
})

const Cover = ({ styles, ...rest }) => (
  <Div styles={ [sx.root, styles] } { ...rest }></Div>
)

Cover.propTypes = {
  styles: aphroditePropType,
}

export default Cover
