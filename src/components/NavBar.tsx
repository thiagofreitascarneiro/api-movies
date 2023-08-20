import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [ searchMovie, setSearchMovie] = useState("");
    const navigate = useNavigate()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!searchMovie) return;

        navigate(`/search?q=${searchMovie}`);
        setSearchMovie("");
    }

    return (
        <nav className="w-full bg-gray-800 mb-10 ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a>
                        <img
                            src="../src/assets/images/logo.png" 
                            alt="Logo"
                            className="w-13 h-12 mr-3"
                        />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/" className="text-gray-300 hover:bg-gray-700
                                    hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <select className="text-white bg-gray-700 px-2 py-1 rounded">
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="drama">Drama</option>
                                </select>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/favorite" className="text-gray-300 hover:bg-gray-700
                                 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Favorite Movies
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
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
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <form 
                    className="flex items-center"
                    onSubmit={handleSubmit}
                    >
                        <input
                        type="text"
                        placeholder="Look for a movie..."
                        className="bg-gray-700 text-white px-3 py-1 rounded mr-2"
                        onChange={(event) => setSearchMovie(event.target.value)} 
                        value={searchMovie}
                        />
                        <button
                        type="submit"
                        className="text-gray-300 hover:text-white"
                        >
                        <BiSearchAlt2 className="h-6 w-6" /> 
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;