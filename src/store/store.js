import { configureStore } from "@reduxjs/toolkit";
import { connectionSliceReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    connection: connectionSliceReducer,
  },
});
