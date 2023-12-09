import { useEffect, useState } from "react";
import "../App.css";

const Filter = ({ setFiltered, movies }) => {
  const [filter, setFilter] = useState(0);

  const handleClick = (e) =>
    setFilter(parseInt(e.target.value));

  const setActive = (value) =>
    value === filter ? "active" : null;

  useEffect(() => {
    if (filter === 0) {
      setFiltered(movies);
      return;
    }

    const newMovies = movies.filter((movie) =>
      movie.genre_ids.includes(filter)
    );

    setFiltered(newMovies);
  }, [filter]);

  return (
    <div className="filter-container">
      <button
        type="submit"
        value={0}
        onClick={handleClick}
        className={setActive(0)}
      >
        all
      </button>
      <button
        type="submit"
        value={35}
        onClick={handleClick}
        className={setActive(35)}
      >
        comdey
      </button>
      <button
        type="submit"
        value={12}
        onClick={handleClick}
        className={setActive(12)}
      >
        comdey
      </button>
      <button
        type="submit"
        value={28}
        onClick={handleClick}
        className={setActive(28)}
      >
        action
      </button>
    </div>
  );
};
export default Filter;
