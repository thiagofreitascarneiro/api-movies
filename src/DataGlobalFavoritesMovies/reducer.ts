import { FavoriteAction, ActionTypes, Movie } from './actions';

export const favoriteReducer = (state: Movie[], action: FavoriteAction) => {
    let existingMovie = undefined;
    let updatedState = [];

    switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
        existingMovie = state.find((movie) => movie.id === action.payload.id);
        if (existingMovie) {
            return state;
        } else {
            return [...state, action.payload];     
        }
    case ActionTypes.REMOVE_FAVORITE:
        updatedState = state.filter((movie) => movie.id !== action.payload);
        return updatedState;
    default:
        return state;
    }
};


