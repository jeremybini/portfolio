import { StyleSheet } from 'aphrodite'
import React, { Component, PropTypes } from 'react'

import ImageLoader from '../../containers/ImageLoader'

import BackgroundImage from './BackgroundImage'
import Cover from './Cover'
import Div from './Div'

const sx = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    zIndex: 0,
  },
  backgroundImageContainer: {
    height: '100%',
    position:'relative',
  },
  loadingImage: {
    zIndex: 1,
    transition: 'opacity 4000ms ease-out',
  },
  loadingImageHidden: {
    opacity: 0,
  },
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
})

class LazyBackgroundImage extends Component {
  state = {
    imageIsLoaded: false,
    loadingImageIsLoaded: false
  }

  handleImageLoaded() {
    this.props.onLoad && this.props.onLoad()
    this.setState({ imageIsLoaded: true })
  }

  handleLoadingImageLoaded() {
    this.props.onLoadingImageLoad && this.props.onLoadingImageLoad()
    this.setState({ loadingImageIsLoaded: true })
  }

  render () {
    return (
      <div>
        <Cover styles={
          this.state.imageIsLoaded || this.state.loadingImageIsLoaded
          ? [sx.overlay, sx.overlayLoaded]
          : [sx.overlay, sx.overlayLoading]
        } />
        <Cover>
          <Div styles={sx.backgroundImageContainer}>
          {
            // Optional image to display while large background img is loading
            // Should be small so as to not have large effect on loadtime
            this.props.loadingImageSrc &&
              <BackgroundImage
                size='cover'
                src={this.props.loadingImageSrc}
                styles={[
                  sx.backgroundImage,
                  sx.loadingImage,
                  this.state.imageIsLoaded && sx.loadingImageHidden
                ]}>
                <ImageLoader
                  onLoad={this.handleLoadingImageLoaded.bind(this)}
                  src={this.props.loadingImageSrc}
                />
              </BackgroundImage>
          }
          <BackgroundImage
            src={this.props.imageSrc}
            size='cover'
            styles={sx.backgroundImage}>
            <ImageLoader
              onLoad={this.handleImageLoaded.bind(this)}
              src={this.props.imageSrc}
            />
          </BackgroundImage>
          </Div>
        </Cover>
      </div>
    )
  }
}

LazyBackgroundImage.propType = {
  onLoad: PropTypes.func,
  onLoadingImageLoad: PropTypes.func,
  imageSrc: PropTypes.string.isRequired,
  loadingImageSrc: PropTypes.string,
}

export default LazyBackgroundImage
