import React from 'react';

import Column from '../../components/ui/Column';
import withImages from '../../hocs/withImages';

import PhotoGallery from './PhotoGallery';

const Photos = ({ images }) => (
  <Column>
    <PhotoGallery images={ images } />
  </Column>
);

export default withImages(Photos);
