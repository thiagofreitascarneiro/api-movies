export interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
  }
  
  export enum ActionTypes {
    ADD_FAVORITE = 'ADD_FAVORITE',
    REMOVE_FAVORITE = 'REMOVE_FAVORITE',
    LOAD_FAVORITES = 'LOAD_FAVORITES'
  }
  
  export interface AddFavoriteAction {
    type: ActionTypes.ADD_FAVORITE;
    payload: Movie;
  }
  
  export interface RemoveFavoriteAction {
    type: ActionTypes.REMOVE_FAVORITE;
    payload: number; 
  }

  export interface LoadFavoritesAction {
    type: ActionTypes.LOAD_FAVORITES;
    payload: Movie[];
  }
  
  export type FavoriteAction = AddFavoriteAction | RemoveFavoriteAction | LoadFavoritesAction;
  
  export const addFavorite = (movie: Movie): AddFavoriteAction => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: movie,
  });
  
  export const removeFavorite = (movieId: number): RemoveFavoriteAction => ({
    type: ActionTypes.REMOVE_FAVORITE,
    payload: movieId,
  });

  export const loadFavorites = (favorites: Movie[]): LoadFavoritesAction => ({
    type: ActionTypes.LOAD_FAVORITES,
    payload: favorites,
  });
  