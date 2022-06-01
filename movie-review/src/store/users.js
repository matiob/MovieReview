import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersRequest = createAsyncThunk("USERS", () => {
  return axios.get(`http://localhost:3001/api/users`).then((res) => res.data);
});

const allUsersReducer = createReducer([], {
  [getUsersRequest.fulfilled]: (state, action) => action.payload,
});

export default allUsersReducer;
