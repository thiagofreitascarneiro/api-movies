import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from "react-router-dom";
import {
  BsCalendar,
  BsClockHistory,
  BsListCheck,
  BsWallet2,
} from 'react-icons/bs'

import { FaRegMoneyBillAlt } from 'react-icons/fa'

interface Genre {
  id: number;
  name: string;
}

interface IMovie {
  id: number;
  title: string;
  tagline: string;
  budget: number;
  vote_average: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  genres: Genre[];
  runtime: string;
  overview: string;
}

import CardMovie from '../components/CardMovie';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState<IMovie | null>(null);

  async function getMovieId(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
    console.log(movie);
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovieId(movieUrl);
  }, [])

  function formatCurrency(number: number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div>
      <NavBar />
      {movie && (
        <div className="flex justify-center items-center p-4 md:p-8">
          <CardMovie movie={movie} showLink={false}>
            <p className="text-white my-4">{movie.tagline}</p>
            
            <div className="flex-gap-item">
              <h3 className="text-white">
                <BsWallet2 className="inline-block text-yellow-500 mr-2" />
                Budget:
              </h3>
              <p className="text-white">{formatCurrency(movie.budget)}</p>
            </div>

            <div className="flex-gap-item">
              <h3 className="text-white">
                <FaRegMoneyBillAlt className="inline-block text-yellow-500 mr-2" />
                Revenue:
              </h3>
              <p className="text-white">{formatCurrency(movie.revenue)}</p>
            </div>

            <div className="flex-gap-item">
              <h3 className="text-white">
                <BsClockHistory className="inline-block text-yellow-500 mr-2" />
                Duration:
              </h3>
              <p className="text-white">{movie.runtime} minutes</p>
            </div>

            <div className="flex-gap-item">
              <h3 className="text-white">
                <BsCalendar className="inline-block text-yellow-500 mr-2" />
                Release Date:
              </h3>
              <p className="text-white">{movie.release_date}</p>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="flex-gap-item">
                <h3 className="text-white">
                  <BsListCheck className="inline-block text-yellow-500 mr-2" />
                  Genres:
                </h3>
                <p className="text-white">{movie.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            )}

            <div className="flex-gap-item flex-col">
              <h3 className="text-yellow-500">
                Overview
              </h3>
              <p className="text-slate-300 overview-text">{movie.overview}</p>
            </div>
           
          </CardMovie>
        </div>
      )}
    </div>
  );
}

export default Movie