import { css, StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';

import Link from './Link';
import screenSize from '../utils/screenSize';

const sx = StyleSheet.create({
  container: {
    margin: '30px 20px',
    position: 'relative',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    letterSpacing: '3px',
    lineSpacing: '10px',
    margin: '3px',
    paddingBottom: '4px',
    transition: '500ms ease-out',
    ':after': {
      content: '" "',
      position: 'absolute',
      width: '100%',
      height: '2px',
      background: 'rgba(255, 255, 255, 0.3)',
      bottom: '-4px',
      left: '0',
      transition: 'transform 0.5s',
    },
    [screenSize.min.tablet]: {
      ':hover': {
        paddingBottom: '9px',
        ':after': {
          transform: 'translateY(5px) scale(1, 2)',
        },
      },
    },
  },
});

const HomeLink = (props) => (
  <div className={ css(sx.container) }>
    <Link styles={ sx.link } {...props}></Link>
  </div>
);

HomeLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default HomeLink;
