import { createAction, handleActions } from 'redux-actions'

import photoData from '../data/photos'
import mapItemsById from '../utils/mapItemsById'

import { closeModal } from './modal'

/* Actions */
const FETCH_PHOTOS = 'portfolio/photos/FETCH_PHOTOS'
const FETCH_PHOTOS_FULFILLED = 'portfolio/photos/FETCH_PHOTOS_FULFILLED'
const FETCH_PHOTOS_PENDING = 'portfolio/photos/FETCH_PHOTOS_PENDING'
const FETCH_PHOTOS_REJECTED = 'portfolio/photos/FETCH_PHOTOS_REJECTED'
const SET_PHOTO_FILTER = 'portfolio/photos/SET_PHOTO_FILTER'

const initialState = {
  allIds: [],
  byId: {},
  categories: [],
  error: null,
  filter: null,
  isFetching: false,
}

const buildPhotoCategories = photos => {
  const categoriesSet = photos.reduce((categories, photo) =>
    photo.categories.reduce((_, category) =>
      categories.add(category)
    , categories)
  , new Set())

  return [...categoriesSet]
}

export default handleActions({
  [FETCH_PHOTOS_FULFILLED]: (state, { payload } = {}) => {
    const { allIds, byId } = mapItemsById(payload)

    return {
      ...state,
      allIds,
      byId,
      categories: buildPhotoCategories(payload),
      error: null,
      isFetching: false,
    }
  },

  [FETCH_PHOTOS_PENDING]: (state, { payload } = {}) => ({
    ...state,
    isFetching: true,
  }),

  [FETCH_PHOTOS_REJECTED]: (state, { payload } = {}) => ({
    ...state,
    error: payload,
    isFetching: false,
  }),

  [SET_PHOTO_FILTER]: (state, action) => ({
    ...state,
    filter: action.payload || null,
  })
}, initialState)

/* Action Creators */
export const fetchPhotos = createAction(FETCH_PHOTOS, () =>
  Promise.resolve(photoData) // To be replaced when server built
)

export const setPhotoFilter = createAction(SET_PHOTO_FILTER)

export function setPhotoFilterFromModal(photoFilter) {
  return (dispatch) => {
    dispatch(setPhotoFilter(photoFilter))
    dispatch(closeModal())
    // Todo: determine good practice for where to put these
    // trigger resize for lazy load handler
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1000)
    // scroll to top of page
    setTimeout(() => window.scrollTo(0, 0), 0)
  }
}

/* Selectors */
export const getPhotos = ({ allIds, byId, ...rest }) => ({
  ...rest,
  data: allIds.map(id => byId[id]),
})

export const getPhotoCategories = state => state.categories

export const getPhotoFilter = state => state.filter

export function getVisiblePhotos(state) {
  const { data, filter } = getPhotos(state);

  if (!filter) {
    return {
      ...state,
      data: [...data]
    }
  }

  const photoFilter = filter.toLowerCase()

  return {
    ...state,
    data: data.filter(photo =>
      photo.categories.some(category =>
        category.toLowerCase() === photoFilter
      )
    )
  }
}

