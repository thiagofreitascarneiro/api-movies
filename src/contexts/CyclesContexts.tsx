import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { favoriteReducer } from '../DataGlobalFavoritesMovies/reducer';
import { FavoriteAction, Movie } from '../DataGlobalFavoritesMovies/actions';



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

  const contextValue: AppContextValue = {
    favorites,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useFavoriteContext must be used within an AppProvider');
  }
  return context;
};
