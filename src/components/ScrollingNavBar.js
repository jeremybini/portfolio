import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import { hexToRGB, gray, grayDark, green, red } from '../utils/colors'
import screenSize from '../utils/screenSize'

import Div from './ui/Div'
import Link from './ui/Link'
import Row from './ui/Row'

export const navLinks = [
  {
    text: 'Code',
    to: '/code',
  },
  {
    text: 'Photos',
    to: '/photos',
  },
  {
    text: 'Video',
    to: '/video',
  },
  {
    href: 'mailto:jeremybini@gmail.com',
    target: '_blank',
    text: 'Contact',
  },
]

const sx = StyleSheet.create({
  navbar: {
    background: 'white',
    borderBottom: `1px solid ${gray}`,
    marginBottom: '10px',
    opacity: 0.95,
    padding: '10px',
    position: 'fixed',
    transition: 'box-shadow 0.5s ease',// +
                // 'padding-right 0.25s ease',
    width: '100%',
    zIndex: '300',
  },
  navbarScrolled: {
    boxShadow: `0 5px 10px ${hexToRGB(grayDark, 0.1)}`,
  },
  activeLink: {
    fontWeight: 400,
    color: green,
    ':hover': {
      color: green,
    }
  },
  desktop: {
    padding: '20px 50px',
    visibility: 'hidden',
    width: '100%',
    [screenSize.min.tablet]: {
      visibility: 'visible',
    }
  },
  link: {
    color: 'black',
    ':hover': {
      color: red,
    },
    fontSize: 19,
  },
  name: {
    fontFamily: '"Raleway", sans-serif',
    fontSize: 23,
    fontWeight: 400,
  },
  nameContainer: {
    display: 'none',
    width: '50%',
    [screenSize.min.tablet]: {
      display: 'block',
    },
  },
  photoPage: {
    paddingRight: 0,
    [screenSize.min.tablet]: {
      paddingRight: '70px',
    }
  },
})

const ScrollingNavBar = ({ isPhotoPage, isScrolled }) => (
  <Row styles={ [
    sx.navbar,
    isScrolled && sx.navbarScrolled,
    isPhotoPage && sx.photoPage,
  ] }>
    <Row justify='space-between' styles={ sx.desktop }>
      <Div styles={ sx.nameContainer }>
        <Link styles={ sx.name } to='/'>Jeremy Bini</Link>
      </Div>
      {
        navLinks.map(({ text, ...link }) =>
          <Link
            activeStyles={ sx.activeLink }
            key={ text }
            nav={ !!link.to }
            styles={ sx.link }
            { ...link }>
            { text }
          </Link>
        )
      }
    </Row>
  </Row>
)

ScrollingNavBar.propTypes = {
  isPhotoPage: PropTypes.bool,
  isScrolled: PropTypes.bool,
}

export default ScrollingNavBar
