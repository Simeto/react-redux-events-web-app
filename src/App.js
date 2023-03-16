import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useDispatch } from "react-redux";
import { connectToEventbrite } from "./api/backendThunkRequests";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connectToEventbrite(dispatch));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
