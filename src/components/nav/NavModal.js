import { css, StyleSheet } from 'aphrodite';
import omit from 'lodash/omit';
import React, { PropTypes } from 'react';

import ColumnCentered from '../ui/ColumnCentered';
import Cover from '../ui/Cover';
import Hamburger from '../ui/Hamburger';
import Link from '../ui/Link';
import Row from '../ui/Row';
import screenSize from '../utils/screenSize';

const sx = StyleSheet.create({
  hamburger: {
    padding: '30px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 200,
  },
  nav: {
    background: 'rgba(0, 0, 0, 0.9)',
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'fixed',
    top: '0px',
    transition: '.5s',
    width: '100%',
    visibility: 'hidden',
    zIndex: 100,
  },
  navbar: {
    width: '100%',
  },
  navLink: {
    fontSize: '20px',
    margin: '50px',
    transition: '.5s',
    translate: '',
    visibility: 'hidden',
    transform: 'translate(-300px, 0px)',
  },
  navLinkTag: {
    color: 'white',
  },
  navLinkOpen: {
    overflow: 'hidden',
    visibility: 'visible',
    transform: 'translate(0px, 0px)',
  },
  navLinksContainer: {
    flexGrow: 1,
  },
  navOpen: {
    opacity: 1,
    visibility: 'visible',
  },
  navSpace: {
    height: '100%',
    flexGrow: 1,
  },
  root: {
    position: 'relative',
    [screenSize.min.desktop]: {
      display: 'none',
    },
  },
});

const MobileNavLink = ({ isOpen, ...rest }) => (
  <Row styles={ [sx.navLink, isOpen && sx.navLinkOpen] }>
    <Link nav styles={ [sx.navLinkTag] } { ...rest } />
  </Row>
);

const NavModal = ({ isOpen, links, onToggleModal }) => (
  <div className={ css(sx.root) }>
    <div className={ css(sx.navbar) }>
      <Hamburger
        activeColor='white'
        isActive={ isOpen }
        onClick={ onToggleModal }
        styles={ sx.hamburger }
        type='spin'
      />
    </div>
    <Cover styles={ [sx.nav, isOpen && sx.navOpen] }>
      <ColumnCentered styles={ sx.navLinksContainer }>
        {
          links.map(link =>
            <MobileNavLink key={ link.text } isOpen={ isOpen } { ...omit(link, 'text') }>{ link.text }</MobileNavLink>
          )
        }
      </ColumnCentered>
    </Cover>
  </div>
)

NavModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};

export default NavModal;
