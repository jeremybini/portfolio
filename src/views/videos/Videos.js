import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ContentLoader from '../../containers/ContentLoader'
import withVideos from '../../hocs/withVideos'
import { fetchVideos } from '../../reducers/videos'
import { greenLight } from '../../utils/colors'

import VideoGallery from './VideoGallery'

const { arrayOf, bool, number, shape, string } = PropTypes

const Videos = ({ fetchVideos, options, videos }) => (
  <ContentLoader
    content={videos}
    fetch={() => fetchVideos(options)}>
    <VideoGallery videos={ videos.data } />
  </ContentLoader>
)

Videos.defaultProps = {
  options: {
    byline: false,
    color: greenLight,
    height: 720,
    portrait: false,
    title: false,
  },
}

Videos.propTypes = {
  videos: shape({
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
  options: shape({
    height: number.isRequired,
  }),
}

export default connect(
  null,
  { fetchVideos }
)(withVideos(Videos))
