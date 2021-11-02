import { createSlice } from "@reduxjs/toolkit";

export const residentSlice = createSlice({
  name: "residentslice",
  initialState: {
    residentdashboardobj: [],
    residentvisitrequestarray: [],
    residentreportarray:[],
    walkinallowed:0,
    tempreportarray:[],
    tempvisitrequestarray:[],
    residentvisitrequestwithcar:[],
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
      state.walkinallowed = action.payload
    },
    removeWalkInAllowed:(state) => {
      state.walkinallowed = 0
    },
    storeTempReportArray: (state, action) => {
      state.tempreportarray = action.payload
    },
    removeTempReportArray: (state) => {
      state.tempreportarray = {}
    },
    storeTempVisitRequestArray: (state,action) => {
      state.tempvisitrequestarray = action.payload
    },
    removeTempVisitRequestArray: (state) => {
      state.tempvisitrequestarray = {}
    },
    storeResidentVisitRequestWithCar: (state,action) => {
      state.residentvisitrequestwithcar = action.payload
    },
    removeResidentVisitRequestWithCar: (state) => {
      state.residentvisitrequestwithcar = {}
    },
  }
});


// Action creators are generated for each case reducer function
export const { 
  storeResidentDashboardObj,
  storeVisitRequestArray,
  storeResidentReportArray,
  storeWalkInAllowed,
  storeTempVisitRequestArray,
  storeTempReportArray,
  storeResidentVisitRequestWithCar 
} = residentSlice.actions;

export default residentSlice.reducer;


