import { StyleSheet } from 'aphrodite'
import React from 'react'

import Div from './Div'

import { grayExtraDark } from '../../utils/colors'

const sx = StyleSheet.create({
  root: {
    background: grayExtraDark,
    minHeight: '200px', // temp
    width: '100%',
  }
})

const Footer = ({ styles, ...rest }) => (
   <Div styles={ [sx.root, styles] } { ...rest } />
)

export default Footer
