import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Column from '../../components/ui/Column'
import ContentLoader from '../../containers/ContentLoader'
import withImages from '../../hocs/withImages'
import { fetchImages } from '../../reducers/images'

import PhotoGallery from './PhotoGallery'

const { arrayOf, bool, shape, string } = PropTypes

const Photos = ({ fetchImages, images }) => (
  <Column>
    <ContentLoader
      content={images}
      fetch={fetchImages}>
      <PhotoGallery images={ images.data } />
    </ContentLoader>
  </Column>
)

Photos.propTypes = {
  images: shape({
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
  { fetchImages }
)(withImages(Photos))
