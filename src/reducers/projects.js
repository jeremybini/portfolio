import { handleActions } from 'redux-actions'

/* Actions */


/* Reducer */
export default handleActions({}, [])

/* Action Creators */


/* Selectors */
export function getProjectByTitle(state, projectTitle) {
  const title = projectTitle.toLowerCase()

  return state.find(project =>
    project.title.toLowerCase() === title
  )
}
