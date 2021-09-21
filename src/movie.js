import React from "react";

function Movie({ movie, watchMovie, addToList }) {
  return (
    <div className="movie-card col">
      <h3 className="movie-title">{movie.name}</h3>
      <img className="movie-image" src={movie.bannerUrl} alt="" />
      <p>Released on: {movie.releasedOn}</p>
      <div>
        {!movie.isInList && (
          <button onClick={() => addToList(movie.id)}>Add</button>
        )}
        {movie.isInList && (
          <button onClick={() => addToList(movie.id)}>Remove</button>
        )}
      </div>
      <div>
        {!movie.isWatched && (
          <button
            className="btn btn-primary"
            onClick={() => watchMovie(movie.id)}
          >
            Watch
          </button>
        )}
        {movie.isWatched && (
          <button
            className="btn btn-warning"
            onClick={() => watchMovie(movie.id)}
          >
            Unwatch
          </button>
        )}
      </div>
    </div>
  );
}

export default Movie;
