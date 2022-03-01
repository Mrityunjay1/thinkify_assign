import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postReducer, { postFetch } from "./features/postSlice";
import { postApi } from "./features/postApi";
import favouriteReducer from "./features/favouriteSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    favourite: favouriteReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(postApi.middleware);
  }
});

store.dispatch(postFetch());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
