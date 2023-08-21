import React from 'react'
import NavBar from '../components/NavBar'
import CardMovie from '../components/CardMovie';
import { useFavoriteContext } from '../contexts/CyclesContexts';

function FavoriteMovies()  {

  const { favorites } = useFavoriteContext();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
    <NavBar />
    <div className="grid grid-cols-1 gap-8 
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
       {favorites.map((favorite) => (
        <CardMovie 
          key={favorite.id} 
          movie={favorite} 
          showLink={true}
          isFavorite={true}
        />

      ))}
    </div>
   
</div>
  )
}

export default FavoriteMovies