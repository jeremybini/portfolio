import React, { PropTypes } from 'react';

import Row from '../../components/ui/Row';

import VideoPlayer, { videoPropType } from './VideoPlayer';

const VideoGallery = ({ videos }) => (
  <Row wrap>
    {
      videos.map(video =>
        <VideoPlayer
          key={ video.id }
          video={ video } />
      )
    }
  </Row>
);

VideoGallery.propTypes = {
  videos: PropTypes.arrayOf(videoPropType).isRequired
}

export default VideoGallery;
