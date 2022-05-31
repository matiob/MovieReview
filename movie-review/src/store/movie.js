import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovieRequest = createAsyncThunk("MOVIE", (id) => {
  return axios.get(`/api/movies/${id}`).then((res) => res.data);
});

const movieReducer = createReducer(
  {},
  {
    [getMovieRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default movieReducer;
