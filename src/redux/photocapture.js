import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import conn from '../api/connection';

export const photoCaptureLabSlice = createSlice({
  name: "photoCaptureLab",
  initialState: {
    photo: null,
    id:null
  },
  reducers: {
    uploadPhoto: (state, action) => {
      state.photo = action.payload.photoUri
      state.id = action.payload.id

      
    },
    readPhoto: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

const createFormData = (photo, body = {}) =>{
  const data = new FormData();

  data.append('file',{
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) =>{
    data.append(key,body[key])
  });

  return data;
}

const upPhoto = (pic,id,callback) => {
    try{
        // make API request to sign up at the track-server with our credential
        await conn.post('/uploadPhoto',
            // This will become something inside 'req.body' parameter, note that we extract this from 'req.body' in server
            {createFormData(photo = pic,body = {VisitRequestID: id})}
        )
       
        callback();
    } catch (err) {
        console.log(err)
        // dispatch({type: 'add_error', payload: 'Something went wrong with Sign Up'})
    }    
}

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
