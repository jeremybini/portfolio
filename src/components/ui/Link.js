import { css, StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';

import aphroditePropType from '../utils/aphroditePropType';

const sx = StyleSheet.create({
  active: {
    color: '#1B70E0',
  },
  root: {
    color: 'black',
    textDecoration: 'none',
  }
});

function buildClass(styles, className) {
  return `${ css(styles) }${ className ? ` ${className}` : '' }`;
}

const Link = ({
  activeClassName,
  activeStyles,
  className,
  href,
  nav,
  styles,
  to,
  ...rest
}) => {
  const calculatedClassName = buildClass([sx.root, styles], className);

  if (to) {
    return nav
      ? <NavLink
          activeClassName={ buildClass([sx.active, activeStyles], activeClassName) }
          className={ calculatedClassName }
          to={ to }
          { ...rest }>
        </NavLink>
      : <RouterLink
          className={ calculatedClassName }
          to={ to }
          { ...rest }>
        </RouterLink>
  }

  return <a className={ calculatedClassName } href={ href } { ...rest }></a>
};

Link.defaultProps = {
  nav: false,
  styles: [],
}

Link.propTypes = {
  activeStyles:aphroditePropType,
  nav: PropTypes.bool.isRequired,
  styles: aphroditePropType,
};

export default Link;
