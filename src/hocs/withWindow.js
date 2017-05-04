import debounce from 'lodash/debounce'
import React, { Component, PropTypes } from 'react'

import getDisplayName from '../utils/getDisplayName'

// Returns a wrapped component that will rerender on window resizes
const withWindow = WrappedComponent => (
  class WithWindow extends Component {
    static displayName = `withWindow(${getDisplayName(WrappedComponent)})`

    static defaultProps = {
      debounce: 500,
    }

    static propTypes = {
      onWindowResize: PropTypes.func,
      debounce: PropTypes.number
    }

    state = {
      windowData: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    }

    componentWillMount() {
      this.debounceOnResize = debounce(
        this.handleResize.bind(this),
        this.props.debounce
      )

      window.addEventListener('resize', this.debounceOnResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.debounceOnResize)
    }

    handleResize(e) {
      console.log('handling it')
      this.setState({
        windowData: {
          height: window.innerHeight,
          width: window.innerWidth,
        },
      })

      if (this.props.onWindowResize) {
        this.props.onWindowResize(e)
      }
    }

    render() {
      const { onWindowResize, debounce, ...props } = this.props

      return (
        <WrappedComponent windowData={ this.state.windowData } { ...props } />
      )
    }
  }
)

export default withWindow

