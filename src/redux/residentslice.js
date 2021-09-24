import { createSlice } from "@reduxjs/toolkit";

export const residentSlice = createSlice({
  name: "residentslice",
  initialState: {
    residentdashboardobj: [],
  },
  reducers: {
    storeResidentDashboardObj: (state, action) => {    
        state.residentdashboardobj = action.payload
    },
    removeResidentDashboardObj:(state) => {
        state.residentdashboardobj = {}
    },
    
  }
});


// Action creators are generated for each case reducer function
export const { storeResidentDashboardObj } = residentSlice.actions;

export default residentSlice.reducer;


