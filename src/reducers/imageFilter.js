import { createAction, handleActions } from 'redux-actions';

import { closeModal } from './modal';

/* Actions */
const SET_IMAGE_FILTER = 'portfolio/imageFilter/SET_IMAGE_FILTER';

export default handleActions({
  [SET_IMAGE_FILTER]: (state = null, action) => action.payload || null,
}, null)

/* Action Creators */
const setImageFilter = createAction(SET_IMAGE_FILTER);

export function setImageFilterFromModal(imageFilter) {
  return (dispatch) => {
    dispatch(setImageFilter(imageFilter));
    dispatch(closeModal())
  }
}
