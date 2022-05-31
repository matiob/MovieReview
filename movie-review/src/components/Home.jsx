import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSearchMoviesRequest } from "../store/movies";
import { getSearchShowsRequest } from "../store/shows";

import useInput from "../hooks/useInput";
import Item from "../commons/Item";

const Home = ({ addToFav, removeToFav }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const tvshows = useSelector((state) => state.shows);
  const [type, setType] = useState("movies");

  const search = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    type === "movies"
      ? dispatch(getSearchMoviesRequest(search.value))
      : dispatch(getSearchShowsRequest(search.value));
  };

  console.log("TYPE->", type);
  console.log("SEARCH->", search.value);
  console.log("MOVIES->", movies);

  return (
    <section className="home">
      <form onSubmit={handleSubmit} className="homeForm">
        <label className="homeSearch">Search</label>
        <fieldset className="homeRadio" onChange={(e) => setType(e.target.value)}>
          <label>
            <input type="radio" name="media" value="movies" /> Movies 
          </label>
          <label>
            <input type="radio" name="media" value="shows" /> Shows
          </label>
        </fieldset>
        <input
          {...search}
          type="text"
          placeholder=" Search movies and shows"
          className="searchTab"
        />
      </form>
      <div>
        <h3 className="homeTitle">Movies & TV-Shows</h3>
      </div>
      <hr className="homeLine" />
      <div className="container">
        <div className="row">
          {type === "movies"
            ? movies.map((movie) => (
                <div className="col">
                  <Link to={`/home/movies/${movie.id}`}>
                    <Item
                      data={movie}
                      key={movie.id}
                      addToFav={addToFav}
                      removeToFav={removeToFav}
                    />
                  </Link>
                </div>
              ))
            : tvshows.map((show) => (
                <div className="col">
                  <Link to={`/home/shows/${show.id}`}>
                    <Item
                      data={show}
                      key={show.id}
                      addToFav={addToFav}
                      removeToFav={removeToFav}
                    />
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
