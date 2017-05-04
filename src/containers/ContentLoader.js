import React, { Component, PropTypes } from 'react'

import LoadableContent from '../components/ui/LoadableContent'

class ContentLoader extends Component {
  static propTypes = {
    content: PropTypes.shape({
      data: PropTypes.array,
      error: PropTypes.object,
      isFetching: PropTypes.bool.isRequired,
    }),
    fetch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { content, fetch } = this.props

    if (!content.data || !content.data.length) {
      fetch()
    }
  }

  render() {
    const { children, content } = this.props
    const { error, isFetching } = content

    return (
      <LoadableContent
        error={ error && { status: error.status } }
        isLoading={ isFetching }>
        { children }
      </LoadableContent>
    )
  }
}

export default ContentLoader;
