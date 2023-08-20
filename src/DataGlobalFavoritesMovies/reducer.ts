import { FavoriteAction, ActionTypes, Movie } from './actions';

export const favoriteReducer = (state: Movie[], action: FavoriteAction) => {
    console.log(state)
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      return [...state, action.payload];
    case ActionTypes.REMOVE_FAVORITE:
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};


