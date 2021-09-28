import { createSlice } from "@reduxjs/toolkit";

export const admindashboardSlice = createSlice({
  name: "admindashboard",
  initialState: {
    admindashboardobj: [],
    // No matter fulltime or timeframed, the object will replace old record and store here. To reduce data store on user device
    requestapprovalarray: [],
    visitrequestarray:[],
    adminreportarray:[],
    defaultsetting:[],
  },
  reducers: {
    storeAdminDashboardObj: (state, action) => {    
        state.admindashboardobj = action.payload
    },
    removeAdminDashboardObj:(state) => {
        state.admindashboardobj = {}
    },
    storeRequestApprovalArray: (state,action) => {
      state.requestapprovalarray = action.payload
    },
    removeRequestApprovalArray: (state) => {
      state.requestapprovalarray = {}
    },
    storeVisitRequestArray: (state,action) => {
      state.visitrequestarray = action.payload
    },
    removeVisitRequestArray: (state) => {
      state.visitrequestarray = {}
    },
    storeAdminReportArray: (state,action) => {
      state.adminreportarray = action.payload
    },
    removeAdminReportArray: (state) => {
      state.adminreportarray = {}
    },
    storeDefaultSetting: (state,action) => {
      state.defaultsetting = action.payload
    },
    removeDefaultSetting: (state) => {
      state.defaultsetting = {}
    },
  }
});


// Action creators are generated for each case reducer function
export const { storeAdminDashboardObj,storeRequestApprovalArray,storeVisitRequestArray,storeAdminReportArray,storeDefaultSetting, removeAdminDashboardObj } = admindashboardSlice.actions;

export default admindashboardSlice.reducer;


