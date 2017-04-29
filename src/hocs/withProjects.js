import { connect } from 'react-redux';

import { getProjects } from '../reducers';

const mapStateToProps = state => ({
  projects: getProjects(state),
});

const withProjects = Component =>
  connect(mapStateToProps)(Component)

export default withProjects;
