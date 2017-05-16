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
// Style defined directly on photo
const photoStyle = {
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
    ...photoStyle,
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
const getThumbnailSrc = (photo, thumbWidth) =>
  photo.sizes
    .sort((a, b) => a.width > b.width)
    .find(size => size.width >= thumbWidth).src

const PhotoGallery = ({ photos, windowData }) => {
  const windowWidth = windowData.width
  const isMobile = windowWidth <= screenSize.widths.phoneLandscape.max
  const isDesktop = windowWidth >= screenSize.widths.desktop.min
  const photoWidth = isMobile ? windowWidth - 20 : isDesktop ? 400 : 300

  return (
    <Div styles={sx.photoGallery}>
      {
        isMobile
          ?
            <Column>
              {
                photos.map((photo, index) => {
                  const resizedHeight = getResizedHeight(photo, photoWidth)
                  const srcSet = buildSrcSet(photo)
                  const thumbnailSrc = getThumbnailSrc(photo, windowWidth)

                  return (
                    <LazyLoad
                      key={photo.id}
                      height={resizedHeight}
                      offset={100}
                      style={{position:'relative'}}
                      placeholder={<PhotoPlaceholder height={resizedHeight} />}>
                      <Img
                        alt={photo.title}
                        src={thumbnailSrc}
                        srcSet={srcSet}
                        styles={sx.photoGalleryImage} />
                    </LazyLoad>
                  )
                })
              }
            </Column>
          :
            <GridCentered columnWidth={photoWidth}>
              {
                photos.map((photo, index) => {
                  const resizedHeight = getResizedHeight(photo, photoWidth)
                  const srcSet = buildSrcSet(photo)
                  const thumbnailSrc = getThumbnailSrc(photo, photoWidth)

                  return (
                    <li
                      key={photo.id}
                      itemHeight={resizedHeight}
                      // Style goes here due to compatability
                      // issue with ImageZoom and aphrodite className
                      style={{
                        maxWidth: photoWidth,
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
                            alt: photo.title,
                            src: thumbnailSrc,
                            srcSet,
                            sizes: `${photoWidth}px`,
                            style: photoStyle,
                          }}
                          zoomImage={{
                            alt: photo.title,
                            srcSet,
                            sizes: buildZoomSizes(photo, windowData),
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
  photos: PropTypes.array.isRequired,
}

export default withWindow(PhotoGallery)
