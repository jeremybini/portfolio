import { connect } from 'react-redux';

import { getAllVideos } from '../reducers';

const mapStateToProps = state => ({
  videos: getAllVideos(state),
});

const withVideos = Component =>
  connect(mapStateToProps)(Component)

export default withVideos;
