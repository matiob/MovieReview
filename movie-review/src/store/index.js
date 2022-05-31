import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import allUsersReducer from "./users";
import favReducer from "./favorites";
import singleFavReducer from "./favorite";
import moviesReducer from "./movies";
import movieReducer from "./movie";
import showsReducer from "./shows";
import showReducer from "./show";

const store = configureStore({
  reducer: {
    user: userReducer,
    users: allUsersReducer,
    favorites: favReducer,
    favorite: singleFavReducer,
    movie: movieReducer,
    movies: moviesReducer,
    show: showReducer,
    shows: showsReducer,
  },
});

export default store;