import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import { greenLight } from '../utils/colors'
import screenSize from '../utils/screenSize'

import ColumnCentered from './ui/ColumnCentered'
import Link from './ui/Link'
import Modal from './ui/Modal'
import Row from './ui/Row'

import { navLinks } from './ScrollingNavBar'

const sx = StyleSheet.create({
  content: {
    transition: '0.5s ease',
    transform: 'translateX(-300px)',
  },
  contentOpen: {
    transform: 'translateX(0)',
  },
  navLink: {
    fontSize: '20px',
    margin: '50px',
  },
  navLinkTag: {
    color: 'white',
  },
  navLinkTagActive: {
    color: greenLight,
  },
  navModal: {
    opacity: 0,
    transition: '0.5s ease',
    visibility: 'hidden',
    [screenSize.min.tablet]: {
      display: 'none',
    },
  },
  navModalOpen: {
    opacity: 0.95,
    visibility: 'visible',
  },
})

const MobileNavLink = (props) => (
  <Row key={ props.to } styles={ sx.navLink }>
    <Link
      nav
      activeStyles={ sx.navLinkTagActive }
      styles={ sx.navLinkTag }
      { ...props } />
  </Row>
)

const NavModal = ({ isOpen, ...rest }) => (
  <Modal styles={ [sx.navModal, isOpen && sx.navModalOpen] } { ...rest }>
    <ColumnCentered grow styles={ [sx.content, isOpen && sx.contentOpen] }>
      {
        navLinks.map(({ text, ...rest }) =>
          <MobileNavLink
            key={ text }
            { ...rest }>
            { text }
          </MobileNavLink>
        )
      }
    </ColumnCentered>
  </Modal>
)

NavModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default NavModal
