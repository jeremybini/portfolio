import { css, StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import { grayExtraDark } from '../../utils/colors'

import Cover from './Cover'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'

const { bool, number, shape, string } = PropTypes

const sx = StyleSheet.create({
  hidden: {
    opacity: 0.01,
  },
  spinner: {
    marginTop: '25%',
  },
  spinnerContainer: {
    background: grayExtraDark,
    zIndex: 100,
  },
  transition: {
    transition: 'opacity 1s ease',
  },
  visible: {
    opacity: 1,
  },
})

const visible = css(sx.visible)
const hidden = css(sx.hidden)

const LoadableContent = ({ children, error, isLoading }) => (
  <div>
    <CSSTransitionGroup
      transitionName={ {
        leave: visible,
        leaveActive: hidden,
      } }
      transitionEnter={ false }
      transitionLeaveTimeout={ 1000 }>
      {
        isLoading &&
          <Cover styles={ [sx.transition, sx.spinnerContainer] }>
            <Spinner styles={ sx.spinner } />
          </Cover>
      }
    </CSSTransitionGroup>
    {
      !isLoading && error
        ? <ErrorMessage code={ error.status } />
        : children
    }
  </div>
)

LoadableContent.propTypes = {
  error: shape({
    code: number,
    message: string,
  }),
  isLoading: bool.isRequired,
}

export default LoadableContent
