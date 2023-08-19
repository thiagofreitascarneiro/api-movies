import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
    const [ listBestMovies, setListBestMovies] = useState([])

    async function getListBestMovies(url: string) {
        const response = await fetch(url);
        const data = await response.json();

        setListBestMovies(data.results);
    }

    useEffect(() => {
        const theBestRatedMoviesURL = `${moviesURL}top_rated?${apiKey}`;
        console.log(theBestRatedMoviesURL)  

        getListBestMovies(theBestRatedMoviesURL);
    }, [])
    

    return (
        <div>
        <NavBar />
        {listBestMovies.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
        ))}
        </div>
    
    )
}

export default Home