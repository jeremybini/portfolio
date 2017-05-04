import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'
// import ImageZoom from 'react-medium-image-zoom'
import ImageZoom from './zoom'
import LazyLoad from 'react-lazyload'

import withWindow from '../../hocs/withWindow'

import Div from '../../components/ui/Div'
import GridCentered from '../../components/ui/GridCentered'
import screenSize from '../../utils/screenSize'

const sx = StyleSheet.create({
  photoGallery: {
    padding: '20px 0',
    [screenSize.desktop]: {
      padding: '30px 0'
    }
  }
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
  const imageWidth = windowData.width > screenSize.widths.desktop.min
                       ? 400
                       : 300

  return (
    <Div styles={sx.photoGallery}>
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
                  offset={100}>
                  <ImageZoom
                    image={{
                      alt: image.title,
                      src: thumbnailSrc,
                      srcSet,
                      sizes: `${imageWidth}px`,
                      style: {
                        borderRadius: '4px',
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                      },
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
    </Div>
  )
}

PhotoGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default withWindow(PhotoGallery)
