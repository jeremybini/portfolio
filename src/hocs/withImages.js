import { connect } from 'react-redux';

import { getVisibleImages } from '../reducers';

const mapStateToProps = (state, options) => ({
  images: getVisibleImages(state, options),
});

const withImages = (Component, options) =>
  connect(
    state => mapStateToProps(state, options)
  )(Component);

export default withImages;
