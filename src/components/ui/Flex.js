import { StyleSheet, css } from 'aphrodite';
import React, { PropTypes } from 'react';

import aphroditePropType from '../utils/aphroditePropType';

export const calcFlexStyles = (style) => {
  if (style === 'end' || style === 'start') {
    return `flex-${style}`;
  }

  return style;
};

const Flex = ({
  align,
  className,
  component,
  direction,
  justify,
  styles,
  wrap,
  ...rest
}) => {
  const sx = StyleSheet.create({
    root: {
      alignItems: calcFlexStyles(align),
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      justifyContent: calcFlexStyles(justify),
      position: 'relative',
    },
  });

  const generatedClassName = `${className} ${css(
    sx.root,
    !!styles && styles,
  )}`;

  return React.createElement(component, {
    className: generatedClassName,
    ...rest,
  });
};

Flex.defaultProps = {
  align: 'stretch',
  className: '',
  component: 'div',
  direction: 'row',
  justify: 'start',
  styles: [],
};

Flex.propTypes = {
  align: PropTypes.oneOf(['baseline', 'center', 'end', 'start', 'stretch']),
  component: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(['center', 'end', 'space-around', 'space-between', 'start']),
  styles: aphroditePropType,
  wrap: PropTypes.bool,
};

export default Flex;
