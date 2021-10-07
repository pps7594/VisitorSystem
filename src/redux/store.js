import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter" //Slice
import credentialReducer from "./credential"
import admindashboardReducer from "./admindashboardslice"
import residentReducer from "./residentslice";
import guardReducer from "./guardslice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    credential:credentialReducer,
    admindashboardSlice: admindashboardReducer,
    resident:residentReducer,
    guard:guardReducer
    
  }
});