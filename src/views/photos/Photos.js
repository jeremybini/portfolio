import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ContentLoader from '../../containers/ContentLoader'
import withPhotos from '../../hocs/withPhotos'
import { fetchPhotos } from '../../reducers/photos'

import PhotoGallery from './PhotoGallery'

const { arrayOf, bool, shape, string } = PropTypes

const Photos = ({ fetchPhotos, photos }) => (
  <ContentLoader
    content={photos}
    fetch={fetchPhotos}>
    <PhotoGallery photos={ photos.data } />
  </ContentLoader>
)

Photos.propTypes = {
  photos: shape({
    data: arrayOf(shape({
      id: string,
    })),
    error: shape({
      message: string.isRequired,
      response: shape({
        statusText: string.isRequired,
      }),
    }),
    isFetching: bool.isRequired,
  }),
}

export default connect(
  null,
  { fetchPhotos }
)(withPhotos(Photos))
