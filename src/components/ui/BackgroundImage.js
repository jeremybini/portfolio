import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import Div from './Div'

const BackgroundImage = ({
  image,
  position,
  repeat,
  size,
  styles,
  ...rest
}) => {
  const sx = StyleSheet.create({
    root: {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundRepeat: repeat,
      backgroundSize: size,
      height: '100%',
      width: '100%',
    }
  })

  return <Div styles={ [sx.root, sx.styles] } { ...rest } />
}

BackgroundImage.defaultProps = {
  position: 'center',
  repeat: 'no-repeat',
  size: 'contain',
}

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired
}

export default BackgroundImage
