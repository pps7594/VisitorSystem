import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter" //Slice
import credentialReducer from "./credential"
import admindashboardReducer from "./admindashboardslice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    credential:credentialReducer,
    admindashboardSlice: admindashboardReducer
  }
});