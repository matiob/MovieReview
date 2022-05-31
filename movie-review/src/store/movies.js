import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularRequest = createAsyncThunk("POPULAR", () => {
  return axios.get(`/api/movies/popular`).then((res) => res.data);
});

export const getUpcomingRequest = createAsyncThunk("UPCOMING", () => {
  return axios.get(`/api/movies/upcoming`).then((res) => res.data);
});

export const getGenerRequest = createAsyncThunk("GENER", (id) => {
  return axios.get(`/api/movies/gener/${id}`).then((res) => res.data);
});

export const getSearchMoviesRequest = createAsyncThunk("SEARCH", (search) => {
  console.log("redux");
  return axios.get(`/api/movies/search`, search).then((res) => res.data);
});

const moviesReducer = createReducer(
  [],
  {
    [getPopularRequest.fulfilled]: (state, action) => action.payload,
    [getUpcomingRequest.fulfilled]: (state, action) => action.payload,
    [getGenerRequest.fulfilled]: (state, action) => action.payload,
    [getSearchMoviesRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default moviesReducer;
