import { StyleSheet } from 'aphrodite';
import React, { Component, PropTypes } from 'react';

import ImageLoader from '../images/ImageLoader';

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
  constructor() {
    super();
    this.state = { imageIsLoaded: false };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
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
        <Cover style={ {
          background: `url(${this.props.source}) no-repeat center center fixed`,
          backgroundSize: 'cover',
        } }>
          <ImageLoader
            onLoad={ this.handleImageLoaded }
            source={  this.props.source }
            style={ { display: 'none'} }
          />
        </Cover>
      </div>
    )
  }
}

LazyBackgroundImage.propType = {
  source: PropTypes.string.isRequired,
}

export default LazyBackgroundImage;
