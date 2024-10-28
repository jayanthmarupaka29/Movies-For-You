import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const API_URL = "http://www.omdbapi.com?apikey=9cfed5d3";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="relative group bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-800/50" key={imdbID}>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-6">
        <p className="text-amber-300 text-lg font-semibold">{Year}</p>
      </div>

      <div className="aspect-[2/3] w-full">
        <img 
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
          alt={Title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent group-hover:from-transparent">
        <span className="inline-block px-2 py-1 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full mb-2">
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl font-bold mb-12 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
          Movies For You
        </h1>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-16">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies..."
              className="w-full px-6 py-4 bg-gray-800/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-2 p-2 hover:bg-gray-700/50 rounded-full transition-colors duration-200"
            >
              <Search className="w-6 h-6 text-amber-400" />
            </button>
          </div>
        </form>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : movies?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-amber-300">
              No movies found
            </h2>
            <p className="mt-2 text-gray-400">
              Try searching for something else
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;