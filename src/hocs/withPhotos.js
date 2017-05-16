import { connect } from 'react-redux'

import { getVisiblePhotos } from '../reducers'

const mapStateToProps = (state, options) => ({
  photos: getVisiblePhotos(state, options),
})

const withPhotos = (Component, options) =>
  connect(
    state => mapStateToProps(state, options)
  )(Component)

export default withPhotos
