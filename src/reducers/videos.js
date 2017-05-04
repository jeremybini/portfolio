import { createAction, handleActions } from 'redux-actions'

import { fetchVideosWithIframes } from '../api/vimeo'
import mapItemsById from '../utils/mapItemsById'

/* Actions */
const FETCH_VIDEOS = 'portfolio/videos/FETCH_VIDEOS'
const FETCH_VIDEOS_FULFILLED = 'portfolio/videos/FETCH_VIDEOS_FULFILLED'
const FETCH_VIDEOS_PENDING = 'portfolio/videos/FETCH_VIDEOS_PENDING'
const FETCH_VIDEOS_REJECTED = 'portfolio/videos/FETCH_VIDEOS_REJECTED'

const initialState = {
  allIds: [],
  byId: {},
  error: null,
  isFetching: false,
}

export default handleActions({
  [FETCH_VIDEOS_FULFILLED]: (state, { payload } = {}) => {
    const { allIds, byId } = mapItemsById(payload)

    return {
      ...state,
      allIds,
      byId,
      error: null,
      isFetching: false,
    }
  },

  [FETCH_VIDEOS_PENDING]: (state, { payload } = {}) => ({
    ...state,
    isFetching: true,
  }),

  [FETCH_VIDEOS_REJECTED]: (state, { payload } = {}) => ({
    ...state,
    error: payload,
    isFetching: false,
  }),
}, initialState)

/* Action Creators */
export const fetchVideos = createAction(FETCH_VIDEOS, fetchVideosWithIframes)

/* Selectors */
export const getVideos = ({ allIds, byId, ...rest }) => ({
  ...rest,
  data: allIds.map(id => byId[id]),
})
