import { useState, useEffect } from "react";
import Movie from "./movie";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () =>
    fetch("https://hub.dummyapis.com/vj/wzGUkpZ").then((response) =>
      response.json()
    );

  useEffect(() => {
    fetchMovies().then((data) =>
      setMovies(data.map((movie) => Object.assign(movie, { isInList: false })))
    );
  }, []);

  const watchMovie = (id) => {
    const movieList = [...movies];

    movieList.forEach((movie) => {
      if (movie.id === id) {
        movie.isWatched = !movie.isWatched;
      }
    });
    setMovies(movieList);
  };

  const addToList = (id) => {
    const movieList = [...movies];

    movieList.forEach((movie) => {
      if (movie.id === id) {
        movie.isInList = !movie.isInList;
      }
    });
    setMovies(movieList);
  };

  return (
    <div className="movie-lists">
      <div className="row">
        <h1>All Movies</h1>
        {movies
          .filter((movie) => !movie.isInList)
          .map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              watchMovie={watchMovie}
              addToList={addToList}
            />
          ))}
      </div>
      <div className="row">
        <h1>My Movies</h1>
        {movies
          .filter((movie) => movie.isInList)
          .map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              watchMovie={watchMovie}
              addToList={addToList}
            />
          ))}
      </div>
    </div>
  );
}

export default MovieList;
