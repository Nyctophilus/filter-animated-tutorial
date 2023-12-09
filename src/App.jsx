// https://api.themoviedb.org/3/movie/popular?api_key=b016c51f8b37b869e2f460a8a2ac724b&language=en-US&page=1

// https://image.tmdb.org/t/p/w500

import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";
import Filter from "./components/Filter";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4c5a7b6b51cb73f34f221577fb33d0bb"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setLoading(false);
  };
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <div>
      <h1>Filter Animated Tutorial</h1>
      <Filter setFiltered={setFiltered} movies={movies} />

      <motion.main layout>
        <AnimatePresence>
          {filtered.map((movie) => (
            <MovieCard
              key={Math.random() * movie.id}
              {...movie}
            />
          ))}
        </AnimatePresence>
      </motion.main>
    </div>
  );
};

export default App;
