import { createSlice } from "@reduxjs/toolkit";

export const admindashboardSlice = createSlice({
  name: "admindashboard",
  initialState: {
    admindashboardobj: [],
    // No matter fulltime or timeframed, the object will replace old record and store here. To reduce data store on user device
    requestapprovalarray: [],
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
    removeRequestApprovalAray: (state) => {
      state.requestapprovalarray = {}
    },
  }
});


// Action creators are generated for each case reducer function
export const { storeAdminDashboardObj, removeAdminDashboardObj,storeRequestApprovalArray } = admindashboardSlice.actions;

export default admindashboardSlice.reducer;


