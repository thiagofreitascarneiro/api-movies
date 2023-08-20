import { useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import { useSearchParams } from "react-router-dom"
import CardMovie from "../components/CardMovie"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

interface ISearch {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
  }

function Search() {
    const [searchParams] = useSearchParams();

    const [searchMovies, setSearchMovies] = useState<ISearch[]>([]);
    const query = searchParams.get('q');

    async function getSearchedMovies(url: string) {
        const response = await fetch(url);
        const data = await response.json();

        setSearchMovies(data.results);
    }

    useEffect(() => {
        const searchQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchQueryURL);

    }, [query])


    return (
    <div className="px-4 sm:px-6 lg:px-8">
        <NavBar />
        <h2>
            Results for: <span>{query}</span>
        </h2>
        {<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {searchMovies && (
            searchMovies.map((movie) => (
                <CardMovie key={movie.id} movie={movie} />
            ))
        ) }
        </div>}
    </div>
    )
}

export default Search