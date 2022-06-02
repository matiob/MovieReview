import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularRequest = createAsyncThunk("POPULAR", () => {
  return axios.get(`/api/shows/popular`).then((res) => res.data);
});

export const getUpcomingRequest = createAsyncThunk("UPCOMING", () => {
  return axios.get(`/api/shows/upcoming`).then((res) => res.data);
});

export const getGenerRequest = createAsyncThunk("GENER", (id) => {
  return axios.get(`/api/shows/gener/${id}`).then((res) => res.data);
});

export const getSearchShowsRequest = createAsyncThunk("SEARCH", (search) => {
  return axios.get(`/api/shows/search`, search).then((res) => res.data);
});

const showsReducer = createReducer([], {
  [getPopularRequest.fulfilled]: (state, action) => action.payload,
  [getUpcomingRequest.fulfilled]: (state, action) => action.payload,
  [getGenerRequest.fulfilled]: (state, action) => action.payload,
  [getSearchShowsRequest.fulfilled]: (state, action) => action.payload,
});

export default showsReducer;
