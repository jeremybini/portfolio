import { handleActions } from 'redux-actions';

/* Actions */


/* Reducer */
export default handleActions({}, []);

/* Action Creators */


/* Selectors */
export function getVisibleImages(state, imageFilter) {
  if (!imageFilter) {
    return [...state];
  }

  const filter = imageFilter.toLowerCase();

  return state.filter(image =>
    image.categories.some(category =>
      category.toLowerCase() === filter
    )
  );
}

export function getImageCategories(state) {
  const categoriesSet = state.reduce((categories, image) =>
    image.categories.reduce((_, category) =>
      categories.add(category)
    , categories)
  , new Set());

  return [...categoriesSet];
}
