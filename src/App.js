import React, { useState, useEffect } from "react";
import { Search, Sun, Moon } from "lucide-react";

const API_URL = "http://www.omdbapi.com?apikey=9cfed5d3";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, isDark }) => {
  return (
    <div className={`relative group ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDark ? 'hover:shadow-gray-800/50' : 'hover:shadow-gray-200/50'}`} key={imdbID}>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-6">
        <p className={`${isDark ? 'text-amber-300' : 'text-amber-500'} text-lg font-semibold`}>{Year}</p>
      </div>

      <div className="aspect-[2/3] w-full">
        <img 
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
          alt={Title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t ${isDark ? 'from-black/90' : 'from-gray-800/90'} to-transparent group-hover:from-transparent`}>
        <span className={`inline-block px-2 py-1 ${isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-500/30 text-amber-600'} text-xs font-medium rounded-full mb-2`}>
          {Type}
        </span>
        <h3 className="text-white font-semibold line-clamp-2">{Title}</h3>
      </div>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Get initial theme from localStorage, default to true (dark mode)
    const savedTheme = localStorage.getItem('theme');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchMovies(searchTerm);
    }
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-4 mb-12">
          <h1 className={`text-center text-5xl font-bold ${
            isDark 
              ? 'bg-gradient-to-r from-amber-200 to-amber-500' 
              : 'bg-gradient-to-r from-amber-500 to-amber-700'
          } bg-clip-text text-transparent`}>
            Movies For You
          </h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 text-amber-400' 
                : 'bg-gray-200 hover:bg-gray-300 text-amber-600'
            }`}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-16">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies..."
              className={`w-full px-6 py-4 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800/50 text-white placeholder-gray-400 focus:ring-amber-500/50' 
                  : 'bg-white text-gray-900 placeholder-gray-500 focus:ring-amber-500/30'
              } focus:outline-none focus:ring-2`}
            />
            <button
              type="submit"
              className={`absolute right-2 p-2 rounded-full transition-colors duration-200 ${
                isDark 
                  ? 'hover:bg-gray-700/50 text-amber-400' 
                  : 'hover:bg-gray-200 text-amber-600'
              }`}
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
        </form>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className={`w-12 h-12 border-4 rounded-full animate-spin ${
              isDark 
                ? 'border-amber-400 border-t-transparent' 
                : 'border-amber-600 border-t-transparent'
            }`}></div>
          </div>
        ) : movies?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} isDark={isDark} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className={`text-2xl font-semibold ${
              isDark ? 'text-amber-300' : 'text-amber-600'
            }`}>
              No movies found
            </h2>
            <p className={`mt-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Try searching for something else
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
