import React, { PropTypes } from 'react'
import FlexCentered from './FlexCentered'

const RowCentered = props => <FlexCentered {...props} />

RowCentered.propTypes = {
  children: PropTypes.node,
}

export default RowCentered
