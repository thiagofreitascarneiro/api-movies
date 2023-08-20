import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CardMovie from '../components/CardMovie';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface IMovie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}


function Home() {
    const [ listBestMovies, setListBestMovies] = useState<IMovie[]>([])

    async function getListBestMovies(url: string) {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)
        setListBestMovies(data.results);
        console.log(listBestMovies);
    }

    useEffect(() => {
        const theBestRatedMoviesURL = `${moviesURL}top_rated?${apiKey}`;
        console.log(theBestRatedMoviesURL)  

        getListBestMovies(theBestRatedMoviesURL);

    }, [])
    

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <NavBar />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listBestMovies.map((movie) => (
                    <CardMovie key={movie.id} movie={movie} />
                ))}
            </div>
           
        </div>
    
    )
}

export default Home