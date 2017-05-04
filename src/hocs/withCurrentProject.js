import { connect } from 'react-redux'

import { getProjectByTitle } from '../reducers'

const mapStateToProps = (state, { match }) => ({
  project: getProjectByTitle(state, match.params.project)
})

const withProject = Component =>
  connect(mapStateToProps)(Component)

export default withProject
