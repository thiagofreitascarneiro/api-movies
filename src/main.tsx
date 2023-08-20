import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/global.scss'
import Home from './pages/Home.tsx'
import Movie from './pages/Movie.tsx'
import Search from './pages/Search.tsx'
import FavoriteMovies from './pages/FavoriteMovies.tsx'

import 'react-toastify/dist/ReactToastify.css';

import { AppProvider } from './contexts/CyclesContexts.tsx'; 
import { ToastContainer } from 'react-toastify'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="search" element={<Search />}/>
          <Route path="favorite" element={<FavoriteMovies />}/>
        </Routes>
      </AppProvider>    
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>,
)


