import { StyleSheet } from 'aphrodite';
import React, { Component, PropTypes } from 'react';

import ImageLoader from '../../containers/ImageLoader';

import BackgroundImage from './BackgroundImage';
import Cover from './Cover';

const sx = StyleSheet.create({
  overlay: {
    background: 'black',
    transition: 'opacity 4500ms ease-out',
    zIndex: 100,
  },
  overlayLoaded: {
    opacity: 0.6,
  },
  overlayLoading: {
    opacity: 1,
  }
});

class LazyBackgroundImage extends Component {
  state = {
    imageIsLoaded: false
  }

  handleImageLoaded() {
    this.setState({ imageIsLoaded: true });
  }

  render () {
    return (
      <div>
        <Cover styles={
          this.state.imageIsLoaded
          ? [sx.overlay, sx.overlayLoaded]
          : [sx.overlay, sx.overlayLoading]
        } />
        <Cover>
          <BackgroundImage image={ this.props.source } size='cover'>
            <ImageLoader
              onLoad={ this.handleImageLoaded.bind(this) }
              source={  this.props.source }
              style={ { display: 'none'} }
            />
          </BackgroundImage>
        </Cover>
      </div>
    )
  }
}

LazyBackgroundImage.propType = {
  source: PropTypes.string.isRequired,
}

export default LazyBackgroundImage;
