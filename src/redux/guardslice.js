import { createSlice } from "@reduxjs/toolkit";

export const guardSlice = createSlice({
  name: "guardslice",
  initialState: {
    walkinallowed:0,
    currentvisitorlistarray:[],
    qrvisitrequest:{},
  },
  reducers: {
    storeWalkInAllowed:(state,action) => {
      state.walkinallowed = action.payload
    },
    removeWalkInAllowed:(state) => {
      state.walkinallowed = 0
    },
    storeCurrentVisitorlist:(state,action) => {
      state.currentvisitorlistarray = action.payload
    },
    removeCurrentVisitorlist:(state) => {
      state.currentvisitorlistarray = {}
    },
    storeQRVisitRequest:(state,action) => {
      state.qrvisitrequest = action.payload
    },
    removeQRVisitRequest:(state) => {
      state.qrvisitrequest = {}
    }
  }
});


// Action creators are generated for each case reducer function
export const {storeWalkInAllowed, storeCurrentVisitorlist,storeQRVisitRequest } = guardSlice.actions;

export default guardSlice.reducer;


