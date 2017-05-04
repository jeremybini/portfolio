import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import aphroditePropType from '../../utils/aphroditePropType'

import StyledComponent from './StyledComponent'

export const calcFlexStyles = (style) => {
  if (style === 'end' || style === 'start') {
    return `flex-${style}`
  }

  return style
}

const Flex = ({
  align,
  direction,
  grow,
  justify,
  styles,
  wrap,
  ...rest
}) => {
  const sx = StyleSheet.create({
    flexRoot: {
      alignItems: calcFlexStyles(align),
      display: 'flex',
      flexGrow: grow ? Number(grow) : 0,
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      justifyContent: calcFlexStyles(justify),
      position: 'relative',
    },
  })

  return <StyledComponent styles={ [sx.flexRoot, styles] } { ...rest } />
}

Flex.defaultProps = {
  align: 'stretch',
  className: '',
  component: 'div',
  direction: 'row',
  justify: 'start',
  styles: [],
}

Flex.propTypes = {
  align: PropTypes.oneOf(['baseline', 'center', 'end', 'start', 'stretch']),
  component: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column']),
  grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  justify: PropTypes.oneOf([
    'center',
    'end',
    'space-around',
    'space-between',
    'start'
  ]),
  styles: aphroditePropType,
  wrap: PropTypes.bool,
}

export default Flex
