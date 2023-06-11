import react from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";
// 3b5667da

const API_URL = "http://www.omdbapi.com?apikey=3b5667da";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div>
      <h1> Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchterm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchterm);
          }}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> no movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
