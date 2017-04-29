import { StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';
import ImageZoom from 'react-medium-image-zoom';

import Div from '../../components/ui/Div';
import GridCentered from '../../components/ui/GridCentered';
import screenSize from '../../utils/screenSize';

const sx = StyleSheet.create({
  photoGallery: {
    padding: '20px 0',
    [screenSize.desktop]: {
      padding: '30px 0'
    }
  }
})

const PhotoGallery = ({ images, imageWidth }) => {
  return (
    <Div styles={ sx.photoGallery }>
      <GridCentered columnWidth={ imageWidth }>
        {
          images.map(image => (
            <li
              key={ image.id }
              // Style goes here
              //   - compatability issue with ImageZoom and aphrodite className
              style={ {
                maxWidth: imageWidth,
                width: '100%',
              } }>
              <ImageZoom
                  image={ {
                    alt: image.alt,
                    src: image.src,
                    style: {
                      borderRadius: '4px',
                      maxWidth: '100%',
                      maxHeight: 'auto',
                    },
                  } }
                  zoomImage={ {
                    src: image.zoomSrc,
                    alt: image.alt
                  } }
                />
            </li>
          ))
        }
      </GridCentered>
    </Div>
  );
};

PhotoGallery.defaultProps = {
  imageWidth: 300,
}

PhotoGallery.propTypes = {
  images: PropTypes.array.isRequired,
  imageWidth: PropTypes.number,
};

export default PhotoGallery;
