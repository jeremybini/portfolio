import React, { PropTypes } from 'react'

import StyledComponent from './StyledComponent'

const List = ({ type, decoration, ...props }) =>
  <StyledComponent component={ type } { ...props } />

List.defaultProps = {
  type: 'ul',
}

List.propTypes = {
  type: PropTypes.oneOf([
    'ul',
    'ol',
  ]),
}

export default List
