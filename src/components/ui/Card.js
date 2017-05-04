import { css, StyleSheet } from 'aphrodite'
import React from 'react'

const sx = StyleSheet.create({
  card: {
    background: 'white',
    border: '1px solid #dde2e5',
    borderRadius: '6px',
    boxShadow: '0 5px 10px rgba(66, 68, 68, 0.1), ' +
               '0 2px 2px rgba(66, 68, 68, 0.1)',
    width: '100%',
  }
})

const Card = ({ styles, ...rest }) => (
   <div className={ css(sx.card, styles) } { ...rest } />
)

export default Card
