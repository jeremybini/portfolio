import { css } from 'aphrodite'
import React, { PropTypes } from 'react'

import aphroditePropTypes from '../../utils/aphroditePropType'

const StyledComponent = ({ className, component, styles, ...rest }) => {
  const generatedClassName =
    `${className ? `${className} ` : ''}${css(!!styles && styles)}`

  return React.createElement(component, {
    className: generatedClassName,
    ...rest,
  })
}

StyledComponent.defaultProps = {
  className: '',
}

StyledComponent.propTypes = {
  component: PropTypes.node.isRequired,
  styles: aphroditePropTypes,
}

export default StyledComponent
