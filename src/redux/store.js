import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter"; //Slice

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});