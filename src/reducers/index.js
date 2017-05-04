import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import images, * as fromImages from './images'
import modal from './modal'
import projects, * as fromProjects from './projects'
import videos, * as fromVideos from './videos'

export default combineReducers({
  images,
  modal,
  projects,
  videos,
})

/* Top-level Selectors */
export const getImages = state => state.images
export const getModal = state => state.modal
export const getProjects = state => state.projects
export const getVideos = state => state.videos

/* Image selectors */
export const getVisibleImages = createSelector(
  getImages,
  fromImages.getVisibleImages
)

export const getImageCategories = createSelector(
  getImages,
  fromImages.getImageCategories
)

export const getImageFilter = createSelector(
  getImages,
  fromImages.getImageFilter
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
