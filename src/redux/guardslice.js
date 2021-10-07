import { createSlice } from "@reduxjs/toolkit";

export const guardSlice = createSlice({
  name: "guardslice",
  initialState: {
    walkinallowed:0,
    currentvisitorlistarray:[],
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
    }
  }
});


// Action creators are generated for each case reducer function
export const {storeWalkInAllowed, storeCurrentVisitorlist } = guardSlice.actions;

export default guardSlice.reducer;


