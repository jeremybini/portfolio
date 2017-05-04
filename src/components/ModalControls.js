import { StyleSheet } from 'aphrodite'
import React from 'react'

import screenSize from '../utils/screenSize'

import Div from './ui/Div'
import Hamburger from './ui/Hamburger'
import SearchIcon from './ui/SearchIcon'

const sx = StyleSheet.create({
  hamburger: {
    [screenSize.min.tablet]: {
      display: 'none',
    }
  },
  iconContainer: {
    padding: '10px',
    position: 'fixed',
    // transition: 'transform 0.5s ease',
    zIndex: 500,
  },
  iconActive: {
    zIndex: 1000,
  },
  iconRight: {
    right: 0,
  },
  iconHidden: {
    transform: 'translate(300px, 0)',
    visibility: 'hidden',
  },
  iconVisible: {
    transform: 'translate(0, 0)',
    visibility: 'visible',
  }
})

const ModalControls = ({
  children,
  filterIsActive,
  hamburgerIsActive,
  onFilterClick,
  onHamburgerClick,
}) => (
  <div>
    <Div styles={ [
      sx.iconContainer,
      hamburgerIsActive && sx.iconActive
    ] }>
      <Hamburger
        activeColor='white'
        isActive={ hamburgerIsActive }
        onClick={ onHamburgerClick }
        styles={ [
          sx.icon,
          sx.hamburger,
        ] }
        type='spin'
      />
    </Div>
    <Div
      style={ {
        top: 0,
        transform: 'translate(300px, 0)',
        visibility: 'hidden',
      } }
      styles={ [
        sx.iconContainer,
        sx.iconRight,
        filterIsActive && sx.iconActive,
        location.pathname === '/photos' && sx.iconVisible,
      ] }>
      <SearchIcon
        activeColor='white'
        isActive={ filterIsActive }
        onClick={ onFilterClick }
      />
    </Div>
    { children }
  </div>
)

export default ModalControls
