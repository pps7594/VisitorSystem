import { createSlice } from "@reduxjs/toolkit";

export const credentialSlice = createSlice({
  name: "credential",
  initialState: {
        // We store the user object, so no need to get it from API
        // Make sure to update this state if the user object updates
        userWithAddress:{} ,
        // Error message for display when wrong credential is inputted
        errorMsg: ''
  },
  reducers: {
    storeUserObj: (state, action) => {    
        state.userWithAddress = action.payload;
    },
    removeUserObj:(state) => {
        state.userWithAddress = {}
    },
    storeErrorMsg: (state,action) => {
        state.errorMsg = action.payload
    },
    removeErrorMsg: (state) => {
      state.errorMsg = '';
    }
  }
});


// Action creators are generated for each case reducer function
export const { storeUserObj, storeErrorMsg, removeErrorMsg } = credentialSlice.actions;

export default credentialSlice.reducer;
