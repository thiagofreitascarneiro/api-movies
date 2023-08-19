import React from 'react';
import { Link } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi';

function NavBar() {

    
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="../src/assets/images/logo.png" 
          alt="Logo"
          className="w-13 h-12 mr-3"
        />
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          Home
        </Link>
        <Link to="/movie" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          Movie
          </Link>
        <select className="text-white bg-gray-700 px-2 py-1 rounded">
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </select>
      </div>

     
      <form className="flex items-center">
        <input
          type="text"
          placeholder="look for a movie..."
          className="bg-gray-700 text-white px-3 py-1 rounded mr-2" 
        />
        <button
          type="submit"
          className="text-gray-300 hover:text-white"
        >
          <BiSearchAlt2 className="h-6 w-6" /> 
        </button>
      </form>
    </nav>
  );
}

export default NavBar;
