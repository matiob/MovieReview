import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularRequest = createAsyncThunk("POPULAR", () => {
  return axios.get(`http://localhost:3001/api/shows/popular`).then((res) => res.data);
});

export const getUpcomingRequest = createAsyncThunk("UPCOMING", () => {
  return axios.get(`http://localhost:3001/api/shows/upcoming`).then((res) => res.data);
});

export const getGenerRequest = createAsyncThunk("GENER", (id) => {
  return axios.get(`http://localhost:3001/api/shows/gener/${id}`).then((res) => res.data);
});

export const getSearchShowsRequest = createAsyncThunk("SEARCH", (search) => {
  return axios.get(`http://localhost:3001/api/shows/search`, search).then((res) => res.data);
});

const showsReducer = createReducer([], {
  [getPopularRequest.fulfilled]: (state, action) => action.payload,
  [getUpcomingRequest.fulfilled]: (state, action) => action.payload,
  [getGenerRequest.fulfilled]: (state, action) => action.payload,
  [getSearchShowsRequest.fulfilled]: (state, action) => action.payload,
});

export default showsReducer;
