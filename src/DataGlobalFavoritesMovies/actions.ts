export interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
  }
  
  export enum ActionTypes {
    ADD_FAVORITE = 'ADD_FAVORITE',
    REMOVE_FAVORITE = 'REMOVE_FAVORITE',
  }
  
  export interface AddFavoriteAction {
    type: ActionTypes.ADD_FAVORITE;
    payload: Movie;
  }
  
  export interface RemoveFavoriteAction {
    type: ActionTypes.REMOVE_FAVORITE;
    payload: number; 
  }
  
  export type FavoriteAction = AddFavoriteAction | RemoveFavoriteAction;
  
  export const addFavorite = (movie: Movie): AddFavoriteAction => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: movie,
  });
  
  export const removeFavorite = (movieId: number): RemoveFavoriteAction => ({
    type: ActionTypes.REMOVE_FAVORITE,
    payload: movieId,
  });
  