import { createAction, handleActions } from 'redux-actions'

import imageData from '../data/images'
import mapItemsById from '../utils/mapItemsById'

import { closeModal } from './modal'

/* Actions */
const FETCH_IMAGES = 'portfolio/images/FETCH_IMAGES'
const FETCH_IMAGES_FULFILLED = 'portfolio/images/FETCH_IMAGES_FULFILLED'
const FETCH_IMAGES_PENDING = 'portfolio/images/FETCH_IMAGES_PENDING'
const FETCH_IMAGES_REJECTED = 'portfolio/images/FETCH_IMAGES_REJECTED'
const SET_IMAGE_FILTER = 'portfolio/images/SET_IMAGE_FILTER'

const initialState = {
  allIds: [],
  byId: {},
  categories: [],
  error: null,
  filter: null,
  isFetching: false,
}

const buildImageCategories = images => {
  const categoriesSet = images.reduce((categories, image) =>
    image.categories.reduce((_, category) =>
      categories.add(category)
    , categories)
  , new Set())

  return [...categoriesSet]
}

export default handleActions({
  [FETCH_IMAGES_FULFILLED]: (state, { payload } = {}) => {
    const { allIds, byId } = mapItemsById(payload)

    return {
      ...state,
      allIds,
      byId,
      categories: buildImageCategories(payload),
      error: null,
      isFetching: false,
    }
  },

  [FETCH_IMAGES_PENDING]: (state, { payload } = {}) => ({
    ...state,
    isFetching: true,
  }),

  [FETCH_IMAGES_REJECTED]: (state, { payload } = {}) => ({
    ...state,
    error: payload,
    isFetching: false,
  }),

  [SET_IMAGE_FILTER]: (state, action) => ({
    ...state,
    filter: action.payload || null,
  })
}, initialState)

/* Action Creators */
export const fetchImages = createAction(FETCH_IMAGES, () =>
  Promise.resolve(imageData) // To be replaced when server built
)

export const setImageFilter = createAction(SET_IMAGE_FILTER)

export function setImageFilterFromModal(imageFilter) {
  return (dispatch) => {
    dispatch(setImageFilter(imageFilter))
    dispatch(closeModal())
    // Todo: determine good practice for where to put these
    // trigger resize for lazy load handler
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1000)
    // scroll to top of page
    setTimeout(() => window.scrollTo(0, 0), 0)
  }
}

/* Selectors */
export const getImages = ({ allIds, byId, ...rest }) => ({
  ...rest,
  data: allIds.map(id => byId[id]),
})

export const getImageCategories = state => state.categories

export const getImageFilter = state => state.filter

export function getVisibleImages(state) {
  const { data, filter } = getImages(state);

  if (!filter) {
    return {
      ...state,
      data: [...data]
    }
  }

  const imageFilter = filter.toLowerCase()

  return {
    ...state,
    data: data.filter(image =>
      image.categories.some(category =>
        category.toLowerCase() === imageFilter
      )
    )
  }
}

