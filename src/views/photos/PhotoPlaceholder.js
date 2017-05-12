import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'
import Div from '../../components/ui/Div'

import { grayMed } from '../../utils/colors'

const sx = StyleSheet.create({
  photoPlaceholder: {
    backgroundColor: grayMed,
    borderRadius: '4px',
    width: '100%',
  },
})

const PhotoPlaceholder = ({ height }) => (
  <Div styles={sx.photoPlaceholder} style={{ height: `${height}px` }} />
)

PhotoPlaceholder.propTypes = {
  height: PropTypes.number.isRequired,
}

export default PhotoPlaceholder
