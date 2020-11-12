import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./Constants/data";
import MovieList from "./component/movieList/Movielist";
import Filter from "./component/filter/Filter"
import AddMovie from "./add/Add";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [textSearch, settextSearch] = useState("")
  
  const handleAdd = (newMovie) => {

    if (newMovie.name !== "") {
      setMovies([...movies, newMovie]);
    }
  };

  return (
    <div className="container">
      <Filter settextSearch={settextSearch} />
      <AddMovie handleAdd={handleAdd} />

      
      <MovieList
        textSearch={textSearch}
        movies={movies}
      />
    </div>
  );
};

export default App;
