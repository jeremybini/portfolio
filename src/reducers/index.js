import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import photos, * as fromPhotos from './photos'
import modal from './modal'
import projects, * as fromProjects from './projects'
import videos, * as fromVideos from './videos'

export default combineReducers({
  photos,
  modal,
  projects,
  videos,
})

/* Top-level Selectors */
export const getPhotos = state => state.photos
export const getModal = state => state.modal
export const getProjects = state => state.projects
export const getVideos = state => state.videos

/* Photo selectors */
export const getVisiblePhotos = createSelector(
  getPhotos,
  fromPhotos.getVisiblePhotos
)

export const getPhotoCategories = createSelector(
  getPhotos,
  fromPhotos.getPhotoCategories
)

export const getPhotoFilter = createSelector(
  getPhotos,
  fromPhotos.getPhotoFilter
)

/* Project selectors */
export const getProjectByTitle = createSelector(
  getProjects,
  (state, title) => title, // Todo: determine best practice router param args
  fromProjects.getProjectByTitle
)

/* Video selectors */
export const getAllVideos = createSelector(
  getVideos,
  fromVideos.getVideos
)
