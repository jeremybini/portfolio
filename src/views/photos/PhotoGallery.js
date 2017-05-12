import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'
import ImageZoom from 'react-medium-image-zoom'
import LazyLoad from 'react-lazyload'

import withWindow from '../../hocs/withWindow'

import Column from '../../components/ui/Column'
import Div from '../../components/ui/Div'
import GridCentered from '../../components/ui/GridCentered'
import Img from '../../components/ui/Img'
import screenSize from '../../utils/screenSize'

import PhotoPlaceholder from './PhotoPlaceholder'

// ImageZoom/aphrodite compatability issue
// Style defined directly on image
const imageStyle = {
  borderRadius: '4px',
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
}

const sx = StyleSheet.create({
  photoGallery: {
    padding: '10px 0',
    [screenSize.tablet]: {
      padding: '20px 0'
    },
    [screenSize.desktop]: {
      padding: '30px 0'
    }
  },
  photoGalleryImage: {
    ...imageStyle,
    marginBottom: '10px',
  },
})

const buildSrcSet = ({ sizes }) =>
  sizes.map(size => `${size.src} ${size.width}w`)

const buildZoomSizes = ({ title, maxHeight, maxWidth }, windowData = {}) => {
  const { height, width } = windowData
  const ratio = maxHeight / maxWidth
  const windowRatio = height / width

  if (ratio <= 1 || ratio <= windowRatio) {
    return '100vw'
  }

  return `${height / ratio}px`
}

const getResizedHeight = ({ maxHeight, maxWidth }, resizedWidth) =>
  (maxHeight / maxWidth ) * resizedWidth

// Find first img greater than or equal to the required thumbnail width
const getThumbnailSrc = (image, thumbWidth) =>
  image.sizes
    .sort((a, b) => a.width > b.width)
    .find(size => size.width >= thumbWidth).src

const PhotoGallery = ({ images, windowData }) => {
  const windowWidth = windowData.width
  const isMobile = windowWidth <= screenSize.widths.phoneLandscape.max
  const isDesktop = windowWidth >= screenSize.widths.desktop.min
  const imageWidth = isMobile ? windowWidth - 20 : isDesktop ? 400 : 300

  return (
    <Div styles={sx.photoGallery}>
      {
        isMobile
          ?
            <Column>
              {
                images.map((image, index) => {
                  const resizedHeight = getResizedHeight(image, imageWidth)
                  const srcSet = buildSrcSet(image)
                  const thumbnailSrc = getThumbnailSrc(image, windowWidth)

                  return (
                    <LazyLoad
                      key={image.id}
                      height={resizedHeight}
                      offset={100}
                      style={{position:'relative'}}
                      placeholder={<PhotoPlaceholder height={resizedHeight} />}>
                      <Img
                        alt={image.title}
                        src={thumbnailSrc}
                        srcSet={srcSet}
                        styles={sx.photoGalleryImage} />
                    </LazyLoad>
                  )
                })
              }
            </Column>
          :
            <GridCentered columnWidth={imageWidth}>
              {
                images.map((image, index) => {
                  const resizedHeight = getResizedHeight(image, imageWidth)
                  const srcSet = buildSrcSet(image)
                  const thumbnailSrc = getThumbnailSrc(image, imageWidth)

                  return (
                    <li
                      key={image.id}
                      itemHeight={resizedHeight}
                      // Style goes here due to compatability
                      // issue with ImageZoom and aphrodite className
                      style={{
                        maxWidth: imageWidth,
                        width: '100%',
                      } }>
                      <LazyLoad
                        height={resizedHeight}
                        resize={true}
                        offset={100}
                        style={{position:'relative'}}
                        placeholder={
                          <PhotoPlaceholder height={resizedHeight} />
                        }>
                        <ImageZoom
                          image={{
                            alt: image.title,
                            src: thumbnailSrc,
                            srcSet,
                            sizes: `${imageWidth}px`,
                            style: imageStyle,
                          }}
                          zoomImage={{
                            alt: image.title,
                            srcSet,
                            sizes: buildZoomSizes(image, windowData),
                          }}
                        />
                      </LazyLoad>
                    </li>
                  )
                })
              }
            </GridCentered>
        }
    </Div>
  )
}

PhotoGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default withWindow(PhotoGallery)
