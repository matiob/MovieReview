import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieRequest } from "../store/movie";
import { getShowRequest } from "../store/show";

const Card = () => {
  const dispatch = useDispatch();
  const { type, id } = useParams();
  let movieID, showID;

  const movie = useSelector((state) => state.movie);
  const show = useSelector((state) => state.show);

  type === "movies" ? (movieID = id) : (showID = id);

  useEffect(() => {
    if (!movieID) return;
    dispatch(getMovieRequest(movieID));
  }, [id]);

  useEffect(() => {
    if (!showID) return;
    dispatch(getShowRequest(showID));
  }, [id]);

  return (
    <>
      {type === "movies" ? (
        <div>
          <div>
            <div>
              <p>{movie.title}</p>
              <p>Sinopsis: {movie.overview}</p>
              <p>Release: {movie.release_date}</p>
            </div>
          </div>
          <div>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt="Placeholder image"
                style={{ width: "220px", height: "330px" }}
              />
            </figure>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <p>{show.title}</p>
              <p>Sinopsis: {show.overview}</p>
              <p>Release: {show.release_date}</p>
            </div>
          </div>
          <div>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w185/${show.poster_path}`}
                alt="Placeholder image"
                style={{ width: "220px", height: "330px" }}
              />
            </figure>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
