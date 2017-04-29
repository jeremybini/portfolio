import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ContentLoader from '../../components/ui/ContentLoader';
import withVideos from '../../hocs/withVideos';
import { fetchVideos } from '../../reducers/videos';
import { greenLight } from '../../utils/colors';

import VideoGallery from './VideoGallery';

const { arrayOf, bool, number, shape, string } = PropTypes;

class Videos extends Component {
  static defaultProps = {
    options: {
      byline: false,
      color: greenLight,
      height: 720,
      portrait: false,
      title: false,
    },
  };

  static propTypes = {
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

  componentDidMount() {
    const { fetchVideos, options, videos } = this.props;

    if (!videos.data || !videos.data.length) {
      fetchVideos(options);
    }
  }

  render() {
    const { data, error, isFetching } = this.props.videos;

    return (
      <ContentLoader
        error={ error && { status: error.status } }
        isLoading={ isFetching }>
        <VideoGallery videos={ data } />
      </ContentLoader>
    );
  }
};

export default connect(
  null,
  { fetchVideos },
)(withVideos(Videos));
