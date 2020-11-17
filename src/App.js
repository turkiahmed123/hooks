import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./Constants/data";
import MovieList from "./component/movieList/Movielist";
import Filter from "./component/filter/Filter";
import AddMovie from "./add/Add";
import { Route, Switch } from "react-router-dom";
import Description from "./component/Description";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [textSearch, settextSearch] = useState("");

  const handleAdd = (newMovie) => {
    if (newMovie.name !== "") {
      setMovies([...movies, newMovie]);
    }
  };

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          {" "}
          <Filter settextSearch={settextSearch} />
          <AddMovie handleAdd={handleAdd} />
          <MovieList textSearch={textSearch} movies={movies} />
        </Route>
        <Route path="/trailer" component={Description} />
      </Switch>
    </div>
  );
}

export default App;
