import React from "react";
import MovieCard from "../moviecard/Moviecard";
import PropTypes from "prop-types";
import "./movielist.css";
function MovieList({ movies, textSearch, searchRate }) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies.filter((el) => el.name.toLowerCase().includes(textSearch.toLowerCase().trim())).map((el) => (
        <MovieCard key={el.id} movie={el} />
      ))}
    </div>
  );
}

export default MovieList;
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
