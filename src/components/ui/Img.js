import { css } from 'aphrodite';
import React, { PropTypes } from 'react';

import aphroditePropType from '../../utils/aphroditePropType';

const Img = ({ alt, className = '', src, styles, ...rest }) => (
  <img
    alt={ alt }
    className={ `${className} ${css(styles)}` }
    src={ src }
    { ...rest }
  />
);

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  styles: aphroditePropType,
}

export default Img;
