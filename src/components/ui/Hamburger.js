import { css, StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

const buildInnerClass = ({ activeColor, color = 'black', isActive }) => {
  const sx = StyleSheet.create({
    active: {
      backgroundColor: activeColor,
      ':after': {
        backgroundColor: activeColor,
      },
      ':before': {
        backgroundColor: activeColor,
      },
    },
    root: {
      backgroundColor: color,
      ':after': {
        backgroundColor: color,
      },
      ':before': {
        backgroundColor: color,
      },
    },
  })

  return css( isActive ? sx.active : sx.root )
}

const buildHamburgerClass = ({ isActive, type, styles }) => {
  const baseClass = `hamburger ${ type ? `hamburger--${type}` : '' }`
  const activeClass = `${ isActive ? 'is-active' : '' }`
  const optionalClass = `${ styles ? css(styles) : '' }`

  return `${baseClass} ${activeClass} ${optionalClass}`
}

const Hamburger = ({ activeColor, color, isActive, onClick, styles, type }) => (
  <button
    className={ buildHamburgerClass({ isActive, type, styles }) }
    onClick={ onClick }
    type="button">
    <span className="hamburger-box">
      <span
        className={
          'hamburger-inner ' +
          buildInnerClass({ activeColor, color, isActive })
        }
      />
    </span>
  </button>
)

Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.string,
}

export default Hamburger
