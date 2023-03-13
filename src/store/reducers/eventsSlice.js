import { createSlice } from "@reduxjs/toolkit";
import mutations from "../mutations";
import initialState from "../initialState";

const eventsSliceReducer = createSlice({
  name: "events",
  initialState,
  reducers: {
    fetchEvents(state, action) {
      mutations.connection.fetchEvents(state, action);
    },
  },
});

export default eventsSliceReducer.reducer;
