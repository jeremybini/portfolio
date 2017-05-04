import React, { PropTypes } from 'react'

import StyledComponent from './StyledComponent'

const weights = [1, 2, 3, 4, 5, 6]

const Heading = ({ weight, ...rest }) =>
  <StyledComponent component={ `h${weight}` } { ...rest } />

Heading.defaultProps = {
  weight: 1
}

Heading.propTypes = {
  weight: PropTypes.oneOf([
    ...weights,
    ...weights.map(w => w.toString()),
  ]),
}

export default Heading
