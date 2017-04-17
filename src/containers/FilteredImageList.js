import React, { Component, PropTypes } from 'react';

const { arrayOf, shape, string } = PropTypes;

import ImageFilter from '../components/images/ImageFilter';
import ImageList from '../components/images/ImageList';

class FilteredImageList extends Component {
  static propTypes = {
    categories: arrayOf(string).isRequired,
    images: arrayOf(
      shape({
        categories: arrayOf(string).isRequired,
      })
    ).isRequired,
  }

  constructor({ items }) {
    super();

    this.state = {
      activeCategory: null,
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(category) {
    this.setState({
      activeCategory: category,
    });
  }

  render() {
    return (
      <div>
        <ImageFilter
          activeCategory={ this.state.activeCategory }
          categories={ this.props.categories }
          onChange={ this.handleCategoryChange }
        />
        <ImageList
          activeCategory={ this.state.activeCategory }
          images={ this.props.images }
        />
      </div>
    )
  }
};

export default FilteredImageList;
