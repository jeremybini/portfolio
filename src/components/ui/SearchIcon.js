import { css, StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';

import aphroditePropType from '../../utils/aphroditePropType';

/**
 *  Animated search icon as seen on
 *  https://codepen.io/michalstocki/pen/BKPOzj
/*/

const transitionTime = '200ms';

const sx = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    border: 0,
    boxSizing: 'content-box',
    height: '58px',
    position: 'relative',
    width: '58px',
  },
  iconActive: {
    borderColor: 'white',
    height: '36px',
    marginLeft: '-18px',
    marginTop: '-23px',
    transitionDelay: 0,
    width: '36px',
    ':before': {
      backgroundColor: 'white',
      borderRadius: '5px',
      transform: 'translate(2px, 14px) rotate(45deg)',
      width: '26px',
    },
    ':after': {
      backgroundColor: 'white',
      borderRadius: '5px',
      transform: 'translate(2px, 14px) rotate(135deg)',
      transitionDelay: '200ms',
      width: '26px',
    }
  },
  icon: {
    width: '20px',
    height: '20px',
    border: '3px solid black',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: '-12px',
    marginTop: '-18px',
    borderRadius: '50%',
    transition:
      `transform ${transitionTime} ease-in-out ${transitionTime},` +
      `margin-left ${transitionTime} ease-in-out ${transitionTime},` +
      `margin-top ${transitionTime} ease-in-out ${transitionTime},` +
      `width ${transitionTime} ease-in-out ${transitionTime},` +
      `height ${transitionTime} ease-in-out ${transitionTime}`,
    ':before': {
      /* magnifier handle */
      transition: 'inherit',
      display: 'block',
      content: '" "',
      width: '12px',
      height: '3px',
      backgroundColor: 'black', // fix
      top: 0,
      left: 0,
      position: 'absolute',
      transform: 'translate(11px, 15px) rotate(45deg)',
    },
    ':after': {
      transition: 'inherit',
      display: 'block',
      content: '" "',
      width: '0px',
      height: '3px',
      backgroundColor: 'black', // fix
      top: '0',
      left: '0',
      position: 'absolute',
      transitionDelay: '0ms',
      transform: 'translate(9px, 7px) rotate(135deg)',
    },
    ':hover': {
      borderColor: 'gray', // fix
      ':before': {
        backgroundColor: 'gray' // fix
      },
      ':after': {
        backgroundColor: 'gray' // fix
      }
    },
  },
});

const initialIconStyle = {
  height: '20px',
  left: '50%',
  marginLeft: '-12px',
  marginTop: '-18px',
  position: 'absolute',
  top: '50%',
  width: '20px',
}

const SearchIcon = ({
  activeColor,
  color,
  isActive,
  onClick,
  styles,
  type
}) => {
  return (
    <button onClick={ onClick } className={ css(sx.button, styles) }>
      <div
        style={ initialIconStyle }
        className={ css(sx.icon, isActive && sx.iconActive) }></div>
    </button>
  );
}

SearchIcon.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  styles: aphroditePropType,
}

export default SearchIcon;
