// context.tsx

import { createContext, useContext, useReducer, useEffect, ReactNode, Dispatch } from 'react';
import { favoriteReducer } from '../DataGlobalFavoritesMovies/reducer';
import { FavoriteAction, Movie, loadFavorites } from '../DataGlobalFavoritesMovies/actions';

interface AppContextValue {
  favorites: Movie[];
  dispatch: Dispatch<FavoriteAction>;
}

interface AppContextProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<AppContextProps> = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoriteReducer, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      console.log('Favorites loaded:', parsedFavorites);
      dispatch(loadFavorites(parsedFavorites));
    }
  }, []);

  useEffect(() => {
    console.log('Favorites to be saved:', favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const contextValue: AppContextValue = {
    favorites,
    dispatch,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useFavoriteContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useFavoriteContext must be used within an AppProvider');
  }
  return context;
};
