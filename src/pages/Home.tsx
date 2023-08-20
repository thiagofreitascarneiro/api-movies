import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CardMovie from '../components/CardMovie';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface IMovieHome {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}


function Home() {
    const [ listBestMovies, setListBestMovies] = useState<IMovieHome[]>([])

    async function getListBestMovies(url: string) {
        const response = await fetch(url);
        const data = await response.json();

        setListBestMovies(data.results);
    }

    useEffect(() => {
        const theBestRatedMoviesURL = `${moviesURL}top_rated?${apiKey}`;

        getListBestMovies(theBestRatedMoviesURL);

    }, [])
    

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <NavBar />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listBestMovies.map((movie) => (
                    <CardMovie key={movie.id} movie={movie} />
                ))}
            </div>
           
        </div>
    
    )
}

export default Home