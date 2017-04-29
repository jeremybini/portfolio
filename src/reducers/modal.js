import { createAction, handleActions } from 'redux-actions';

/* Actions */
const CLOSE_MODAL = 'portfolio/modal/CLOSE';
const TOGGLE_MODAL = 'portfolio/modal/TOGGLE';

/* Reducer */
const initialState = {
  modalType: null,
}

export default handleActions({
  [CLOSE_MODAL]: () => ({ modalType: null }),

  [TOGGLE_MODAL]: (state, action) => ({
    modalType: state.modalType ? null : action.payload.modalType,
  }),
}, initialState);

/* Action Creators */
export const closeModal = createAction(CLOSE_MODAL);

export const toggleModal =
  createAction(TOGGLE_MODAL, modalType => ({ modalType }));

export const modalTypes = {
  NAV: 'NAV',
  IMAGE_FILTER: 'IMAGE_FILTER',
}