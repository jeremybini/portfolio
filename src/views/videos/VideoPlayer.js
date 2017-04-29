import { StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';

import Card from '../../components/ui/Card';
import ColumnCentered from '../../components/ui/ColumnCentered';
import Div from '../../components/ui/Div';
import { grayLight } from '../../utils/colors';
import screenSize from '../../utils/screenSize';

import './VideoPlayer.css';

const { shape, string } = PropTypes;

const sx = StyleSheet.create({
  iframe: {
    borderRadius: 'inherit',
    borderBottom: `1px solid ${grayLight}`,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
  },
  videoCard: {
    height: '100%',
  },
  videoCardContainer: {
    height: '100%',
    margin: 'auto',
    padding: '10px',
    [screenSize.min.tablet]: {
      padding: '30px 20px',
    },
    [screenSize.desktop]: {
      maxWidth: '800px',
    }
  },
  videoDescription: {
    padding: '5px',
    textAlign: 'center',
    [screenSize.min.tablet]: {
      padding: '10px',
    },
    [screenSize.desktop]: {
      padding: '20px',
    }
  }
});

const VideoPlayer = ({ video, ...rest }) => {
  const { description, embed, name } = video;
  const { height, html, width } = embed;
  const aspectRatio = height / width;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const offset = windowHeight * 0.1;

  let loaderHeight;

  const isDesktop = windowWidth >= screenSize.widths.desktop.min;

  if (isDesktop) {
    loaderHeight = (windowWidth / 2) * aspectRatio
  } else {
    loaderHeight = windowWidth * aspectRatio;
  }

  /*/
   *   Styling Notes:
   *     - external stylesheet needed for styling injected iframe
   *       and rendering issue with LazyLoad module (needs investigation)
  /*/
  return (
    <div className='video-player'>
      <LazyLoad
        height={ loaderHeight }
        offset={ offset }
        once>
        <Div styles={ sx.videoCardContainer }>
          <Card styles={ sx.videoCard }>
            <Div
              dangerouslySetInnerHTML={ { __html: html } }
              styles={ sx.iframe } />
            <ColumnCentered styles={ sx.videoDescription }>
              <h3>{ name }</h3>
              <p>{ description }</p>
            </ColumnCentered>
          </Card>
        </Div>
      </LazyLoad>
    </div>
  )
};

export const videoPropType = shape({
  id: string.isRequired,
  description: string.isRequired,
  embed: shape({
    html: string.isRequired,
  }).isRequired,
})

VideoPlayer.propTypes = {
  video: videoPropType.isRequired,
}

export default VideoPlayer;
