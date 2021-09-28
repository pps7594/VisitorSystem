import { createSlice } from "@reduxjs/toolkit";

export const residentSlice = createSlice({
  name: "residentslice",
  initialState: {
    residentdashboardobj: [],
    residentvisitrequestarray: [],
    residentreportarray:[],
    walkInAllowed:0
  },
  reducers: {
    storeResidentDashboardObj: (state, action) => {    
        state.residentdashboardobj = action.payload
    },
    removeResidentDashboardObj:(state) => {
        state.residentdashboardobj = {}
    },
    storeVisitRequestArray: (state, action) => {    
      state.residentvisitrequestarray = action.payload
    },
    removeVisitRequestArray:(state) => {
      state.residentvisitrequestarray = {}
    },
    storeResidentReportArray: (state, action) => {    
      state.residentreportarray = action.payload
    },
    removeResidentReportArray:(state) => {
      state.residentreportarray = {}
    },
    storeWalkInAllowed:(state,action) => {
      state.walkInAllowed = action.payload
    },
    removeWalkInAllowed:(state) => {
      state.walkInAllowed = 0
    }
  }
});


// Action creators are generated for each case reducer function
export const { storeResidentDashboardObj,storeVisitRequestArray,storeResidentReportArray,storeWalkInAllowed } = residentSlice.actions;

export default residentSlice.reducer;


