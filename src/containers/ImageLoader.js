import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class ImageLoader extends Component {
  componentDidMount() {
    const img = findDOMNode(this)

    if (img.complete) {
      this.props.onLoad()
    }
  }

  render() {
    return <img
      alt=''
      onLoad={ this.props.onLoad }
      src={ this.props.source }
      style={ { display: 'none'} }
      />
  }
}

ImageLoader.propTypes = {
  onLoad: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
}

export default ImageLoader
