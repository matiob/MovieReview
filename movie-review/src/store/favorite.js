import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleFavRequest = createAsyncThunk("FAVORITE", (id) => {
  return axios.get(`/api/favorites/one/${id}`).then((res) => res.data);
});

export const sendFavRequest = createAsyncThunk("SAVE", (favorite, thunkAPI) => {
  const { user } = thunkAPI.getState();
  const userId = user.id;
  return axios
    .post(`/api/favorites/${userId}`, favorite)
    .then((res) => res.data);
});

export const deleteFavRequest = createAsyncThunk("DELETE", (id) => {
  return axios.delete(`/api/favorites/${id}`).then((res) => res.data);
});

const singleFavReducer = createReducer(
  {},
  {
    [getSingleFavRequest.fulfilled]: (state, action) => action.payload,
    [sendFavRequest.fulfilled]: (state, action) => action.payload,
    [deleteFavRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default singleFavReducer;
