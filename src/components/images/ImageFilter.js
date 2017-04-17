import { css, StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';

import RowCentered from '../ui/RowCentered';

const sx = StyleSheet.create({
  filterRow: {
    padding: '5px',
  },
  filter: {
    margin: '0 40px',
    padding: '20px',
    ':hover': {
      cursor: 'pointer',
    }
  },
  filterActive: {
    fontWeight: 400,
  },
});

const ImageFilter = (props) => (
  <RowCentered styles={ sx.filterRow }>
    <p
      className={ css(sx.filter, !props.activeCategory && sx.filterActive)  }
      key='all'
      onClick={ () => props.onChange(null) }>
      All
    </p>
    {
      props.categories.map(category =>
        <p
          className={ css(sx.filter, props.activeCategory === category && sx.filterActive)  }
          key={ category }
          onClick={ () => props.onChange(category) }
          style={ { margin: '0 30px' } }>
          {category}
        </p>
      )
    }
  </RowCentered>
);

ImageFilter.propTypes = {
  activeCategory: PropTypes.string,
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageFilter;
