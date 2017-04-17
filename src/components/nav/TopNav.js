import { css, StyleSheet } from 'aphrodite';
import omit from 'lodash/omit';
import React, { PropTypes } from 'react';

import Link from '../ui/Link';
import Row from '../ui/Row';
import screenSize from '../utils/screenSize';

const sx = StyleSheet.create({
  root: {
    background: 'white',
    boxShadow: '0 5px 10px rgba(66, 68, 68, 0.1)',
    position: 'fixed',
    marginBottom: '10px',
    padding: '30px 50px',
    width: '100%',
    zIndex: '300',
    [screenSize.max.tablet]: {
      display: 'none',
    },
  },
  activeLink: {
    fontWeight: 400,
    color: 'rgba(27, 112, 224, 1)', // maybe '#44BBA4',
    ':hover': {
      color: 'rgba(27, 112, 224, 1)',
    }
  },
  link: {
    color: 'black',
    transition: '0.3s',
    ':hover': {
      color: '#E94F37',
    }
  },
  name: {
    fontFamily: '"Raleway", sans-serif',
    fontSize: 20,
    fontWeight: 400,
    // width: '50%',
  },
  nameContainer: {
    width: '50%',
  }
});

const TopNav = ({ links }) => (
  <Row justify="space-between" styles={ sx.root }>
    <div className={ css(sx.nameContainer) }>
      <Link styles={ sx.name } to='/'>Jeremy Bini</Link>
    </div>
    {
      links.map(link =>
        <Link
          activeStyles={ sx.activeLink }
          key={ link.text }
          nav={ !!link.to }
          styles={ sx.link }
          { ...omit(link, 'text') }>
          { link.text }
        </Link>
      )
    }
  </Row>
);

TopNav.propTypes = {
  links: PropTypes.array.isRequired,
};

export default TopNav;
