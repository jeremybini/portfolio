import React, { PropTypes } from 'react';
import ImageZoom from 'react-medium-image-zoom';

import GridCentered from '../ui/GridCentered';

function getFilteredImages(images, activeCategory) {
  if (!activeCategory) {
    return images;
  }

  activeCategory = activeCategory.toLowerCase();

  return images.filter(image =>
    image.categories.some(category => category.toLowerCase() === activeCategory)
  );
}

const ImageList = ({ activeCategory, images }) => {
  const filteredImages = getFilteredImages(images, activeCategory);

  return (
    <GridCentered>
      {
        filteredImages.map(image => (
          <li
            key={ image.id }
            style={ { // Style goes here - compatability issue when defining className via aphrodite
              maxWidth: '300px',
              width: '100%',
            } }>
            <ImageZoom
              image={ {
                alt: image.alt,
                src: image.src,
                style: {
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
  );
};

ImageList.propTypes = {
  activeCategory: PropTypes.string,
  images: PropTypes.array.isRequired,
};

export default ImageList;
