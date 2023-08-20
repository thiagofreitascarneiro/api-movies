import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { BsCameraReelsFill } from 'react-icons/bs';
import { ReactNode } from 'react';
import { useFavoriteContext } from '../contexts/CyclesContexts';
import { addFavorite, removeFavorite } from '../DataGlobalFavoritesMovies/actions';
import { toast } from 'react-toastify';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date?: string;
  revenue?: number;
  genres?: Genre[];
  budget?: number;
  runtime?: string;
}

interface CardMovieProps {
  movie: Movie;
  showLink?: boolean;
  children?: ReactNode; 
  isFavorite?: boolean;
}

const imageUrl = import.meta.env.VITE_IMG;

function CardMovie({ movie, showLink = true, children, isFavorite }: CardMovieProps) {

  const { favorites, dispatch } = useFavoriteContext(); 
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite || false);
  

  function handleToggleFavorite() {
    if (localIsFavorite) {
      dispatch(removeFavorite(movie.id));
      setLocalIsFavorite(false);
      toast.success('Movie removed from favorites!');
    } else {
      const existingMovie = favorites.find((favMovie) => favMovie.id === movie.id);

      if (existingMovie) {
        toast.info('This movie is already in favorites!');
        return;
      }

      dispatch(addFavorite(movie));
      setLocalIsFavorite(true);
      toast.success('Movie added to favorites!');
    }
  }
   
  
  return (
    <div className="bg-gray-800 shadow-md rounded-md overflow-hidden transition-transform transform duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          className="w-full"
          style={{ borderRadius: '0.5rem 0.5rem 0 0' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black"></div>
      </div>
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">{movie.title}</h2>
        <p className="flex items-center text-white">
          <FaStar className="text-yellow-500 mr-1" /> {movie.vote_average}
        </p>
        <div>
          {children}
        </div>
        <div className="flex justify-between items-center">
          {showLink && (
            <Link
              to={`/movie/${movie.id}`}
              className="block mt-4 text-white flex items-center justify-center bg-text-yellow-200 p-2 rounded"
            >
              <BsCameraReelsFill className="text-yellow-500 text-lg mr-2" />
              <span className="hover:text-yellow-500">Details</span>
            </Link>
          )}
          <button
            className="mt-4 flex items-center justify-center text-white px-3 py-2 hover:text-yellow-500 rounded"
            onClick={handleToggleFavorite}
          >
            <MdFavorite className="text-red-600 text-lg mr-2" />
            <span>{localIsFavorite ? 'Remove Favorite' : 'Add Favorite'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMovie;
