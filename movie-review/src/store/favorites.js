import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getFavRequest = createAsyncThunk("FAVORITES", (id) => {
  return axios
    .get(`/api/favorites/${id}`)
    .then((res) => res.data)
});

const favReducer = createReducer([], {
  [getFavRequest.fulfilled]: (state, action) => action.payload,
});

export default favReducer;