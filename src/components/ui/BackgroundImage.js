import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import Div from './Div'

const BackgroundImage = ({
  position,
  repeat,
  size,
  src,
  styles,
  ...rest
}) => {
  const sx = StyleSheet.create({
    backgroundImage: {
      backgroundImage: `url(${src})`,
      backgroundPosition: position,
      backgroundRepeat: repeat,
      backgroundSize: size,
      height: '100%',
      width: '100%',
    }
  })

  return <Div id={styles} styles={[sx.backgroundImage, styles]} {...rest} />
}

BackgroundImage.defaultProps = {
  position: 'center',
  repeat: 'no-repeat',
  size: 'contain',
}

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired
}

export default BackgroundImage
