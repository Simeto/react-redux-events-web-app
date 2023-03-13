import { createSlice } from "@reduxjs/toolkit";
import  mutations from "../mutations";
import initialState from "../initialState";

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    connectEventbrite(state, action) {
      mutations.connection.connectEventbrite(state, action);

    },
  },
});

export const connectionActions = connectionSlice.actions

export default connectionSlice.reducer;
