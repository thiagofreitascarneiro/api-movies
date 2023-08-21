import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CardMovie from '../components/CardMovie';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const genreURL =  import.meta.env.VITE_GENRE;

interface IMovieHome {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}

export interface IGenre {
    id: number;
    name: string;
  }

function Home() {
    const [ listBestMovies, setListBestMovies] = useState<IMovieHome[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string>('');
    const [genres, setGenres] = useState<IGenre[]>([]);

    async function getListBestMovies(url: string) {
        const response = await fetch(url);
        const data = await response.json();

        setListBestMovies(data.results);
    }

    async function getGenres() {
        const response = await fetch(`${genreURL}list?${apiKey}`);
        const data = await response.json();
    
        setGenres(data.genres);
      }

      useEffect(() => {
        const theBestRatedMoviesURL = selectedGenre
          ? `${moviesURL}top_rated?${apiKey}&with_genres=${selectedGenre}`
          : `${moviesURL}top_rated?${apiKey}`;
    
        getListBestMovies(theBestRatedMoviesURL);
        getGenres();
      }, [selectedGenre]);
    
    

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <NavBar genres={genres} setSelectedGenre={setSelectedGenre} />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listBestMovies.map((movie) => (
                    <CardMovie key={movie.id} movie={movie} isFavorite={false}/>
                ))}
            </div>
           
        </div>
    
    )
}

export default Home